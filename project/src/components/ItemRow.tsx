import { useState } from 'react';
import { COLORS, CatalogItem } from '../types';
import { Icon } from './Icon';
import { VisibilityBadge } from './VisibilityBadge';

interface ItemRowProps {
  item: CatalogItem;
  onClick: (item: CatalogItem) => void;
  isLast: boolean;
}

const typeIcon: Record<string, string> = {
  agent: 'agent-ai',
  flow: 'flow-ai',
  mcp: 'link',
  skill: 'book-open',
};

export function ItemRow({ item, onClick, isLast }: ItemRowProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div>
      <div
        onClick={() => onClick(item)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          padding: hovered ? '12px 16px' : '12px 0',
          cursor: 'pointer',
          background: hovered ? COLORS.n10 : 'transparent',
          margin: hovered ? '0 -16px' : '0',
          transition: 'background 0.1s',
          display: 'flex',
          gap: 12,
          alignItems: 'flex-start',
        }}
      >
        <div
          style={{
            flexShrink: 0,
            width: 28,
            height: 28,
            borderRadius: 4,
            background: COLORS.n50,
            border: `1px solid ${COLORS.n100}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 2,
          }}
        >
          <Icon name={typeIcon[item.type]} size={14} color={COLORS.n700} />
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
            <span style={{ fontWeight: 600, fontSize: '14px', color: COLORS.n950 }}>
              {item.name}
            </span>
            {item.is_foundational && (
              <span
                title="Foundational"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 22,
                  height: 22,
                  borderRadius: 11,
                  background: COLORS.p50,
                  border: `1px solid ${COLORS.p100}`,
                  flexShrink: 0,
                }}
              >
                <Icon name="tanuki-ai" size={12} color={COLORS.purple500} />
              </span>
            )}
          </div>

          <div
            style={{
              fontSize: '14px',
              color: COLORS.n600,
              lineHeight: '20px',
              marginBottom: 4,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {item.description}
          </div>

          <div
            style={{
              fontSize: '13px',
              color: COLORS.n400,
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              flexWrap: 'wrap',
            }}
          >
            <VisibilityBadge visibility={item.visibility} />
            <span style={{ margin: '0 2px' }}>·</span>
            <Icon name="namespace" size={12} color={COLORS.n400} />
            <span>{item.namespaces} namespaces</span>
            <span style={{ margin: '0 4px' }}>·</span>
            <Icon name="user" size={12} color={COLORS.n400} />
            <span>Updated {item.updated_at ? 'recently' : 'unknown'} by {item.author}</span>
          </div>
        </div>
      </div>
      {!isLast && <div style={{ borderBottom: `1px solid ${COLORS.n100}` }} />}
    </div>
  );
}
