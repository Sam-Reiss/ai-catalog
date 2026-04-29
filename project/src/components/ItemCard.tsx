import { useState } from 'react';
import { COLORS, CatalogItem } from '../types';
import { Icon } from './Icon';
import { Badge } from './Badge';
import { VisibilityBadge } from './VisibilityBadge';

interface ItemCardProps {
  item: CatalogItem;
  onClick: (item: CatalogItem) => void;
}

const typeIcon: Record<string, string> = {
  agent: 'agent-ai',
  flow: 'flow-ai',
  mcp: 'link',
  skill: 'book-open',
};

export function ItemCard({ item, onClick }: ItemCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => onClick(item)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? COLORS.b200 : COLORS.n100}`,
        borderRadius: 4,
        padding: 16,
        cursor: 'pointer',
        transition: 'all 0.1s',
        background: hovered ? COLORS.n10 : COLORS.n0,
        display: 'flex',
        flexDirection: 'column',
        minHeight: 160,
        overflow: 'hidden',
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
        <Icon name={typeIcon[item.type]} size={16} color={COLORS.n950} />
        <span
          style={{
            fontWeight: 600,
            fontSize: '14px',
            color: COLORS.n950,
            flex: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {item.name}
        </span>
      </div>

      <div
        style={{
          fontSize: '13px',
          color: COLORS.n600,
          lineHeight: '18px',
          marginBottom: 10,
          flex: 1,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {item.description}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 8 }}>
        {item.tags.slice(0, 2).map((tag) => (
          <Badge key={tag} variant="neutral" size="sm">
            {tag}
          </Badge>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          fontSize: '12px',
          color: COLORS.n400,
          borderTop: `1px solid ${COLORS.n100}`,
          paddingTop: 8,
          marginTop: 'auto',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Icon name="namespace" size={11} color={COLORS.n400} />
          {item.namespaces}
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Icon name="star-o" size={11} color={COLORS.n400} />
          {item.stars}
        </span>
        <VisibilityBadge visibility={item.visibility} />
      </div>

      {item.is_foundational && (
        <div style={{ position: 'absolute', bottom: 12, right: 12 }}>
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
        </div>
      )}
    </div>
  );
}
