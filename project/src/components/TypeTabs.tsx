import { COLORS, FONT_FAMILY, ItemType, CatalogItem } from '../types';
import { Icon } from './Icon';

interface TypeTab {
  key: 'all' | ItemType;
  label: string;
  icon: string;
}

interface TypeTabsProps {
  items: CatalogItem[];
  activeType: 'all' | ItemType;
  setActiveType: (type: 'all' | ItemType) => void;
}

const typeTabs: TypeTab[] = [
  { key: 'all', label: 'All', icon: 'package' },
  { key: 'agent', label: 'Agents', icon: 'agent-ai' },
  { key: 'flow', label: 'Flows', icon: 'flow-ai' },
  { key: 'mcp', label: 'MCP Servers', icon: 'link' },
  { key: 'skill', label: 'Skills', icon: 'book-open' },
];

export function TypeTabs({ items, activeType, setActiveType }: TypeTabsProps) {
  const getCount = (key: 'all' | ItemType): number => {
    if (key === 'all') return items.length;
    return items.filter((i) => i.type === key).length;
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: 0,
        borderBottom: `1px solid ${COLORS.n100}`,
        marginBottom: 16,
      }}
    >
      {typeTabs.map((tab) => {
        const count = getCount(tab.key);
        const isActive = activeType === tab.key;

        return (
          <button
            key={tab.key}
            onClick={() => setActiveType(tab.key)}
            style={{
              padding: '8px 14px',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontSize: '14px',
              fontWeight: isActive ? 600 : 400,
              color: isActive ? COLORS.n950 : COLORS.n500,
              fontFamily: FONT_FAMILY,
              borderBottom: isActive ? `2px solid ${COLORS.b500}` : '2px solid transparent',
              marginBottom: -1,
              whiteSpace: 'nowrap',
            }}
          >
            <Icon name={tab.icon} size={14} color={isActive ? COLORS.n950 : COLORS.n500} />
            {tab.label}
            <span
              style={{
                fontSize: '12px',
                color: isActive ? COLORS.n500 : COLORS.n400,
                fontWeight: 400,
              }}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
