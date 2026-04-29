import { COLORS, FONT_FAMILY } from '../types';
import { Icon } from './Icon';

interface SearchBarProps {
  query: string;
  setQuery: (q: string) => void;
  sortBy: 'ns' | 'st' | 'nm';
  setSortBy: (s: 'ns' | 'st' | 'nm') => void;
  viewMode: 'list' | 'grid';
  setViewMode: (v: 'list' | 'grid') => void;
  placeholder?: string;
}

export function SearchBar({
  query,
  setQuery,
  sortBy,
  setSortBy,
  viewMode,
  setViewMode,
  placeholder = 'Search catalog...',
}: SearchBarProps) {
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12 }}>
      <div style={{ flex: 1, position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            left: 10,
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
          }}
        >
          <Icon name="search" size={14} color={COLORS.n400} />
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          style={{
            width: '100%',
            height: 32,
            padding: '0 12px 0 32px',
            border: `1px solid ${COLORS.n200}`,
            borderRadius: 4,
            fontSize: '14px',
            lineHeight: '24px',
            fontFamily: FONT_FAMILY,
            color: COLORS.n950,
            background: COLORS.n0,
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
      </div>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value as 'ns' | 'st' | 'nm')}
        style={{
          height: 32,
          padding: '0 24px 0 8px',
          border: `1px solid ${COLORS.n200}`,
          fontSize: '13px',
          fontFamily: FONT_FAMILY,
          background: COLORS.n0,
          color: COLORS.n950,
          cursor: 'pointer',
          appearance: 'none',
          WebkitAppearance: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='5' viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l3 3 3-3' stroke='%23666' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 8px center',
          borderRadius: 4,
        }}
      >
        <option value="ns">Recommended</option>
        <option value="st">Most stars</option>
        <option value="nm">Name</option>
      </select>

      <div style={{ display: 'flex' }}>
        <button
          onClick={() => setViewMode('list')}
          style={{
            height: 32,
            width: 32,
            border: `1px solid ${COLORS.n200}`,
            borderRadius: '4px 0 0 4px',
            background: viewMode === 'list' ? COLORS.n50 : COLORS.n0,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            borderRight: 'none',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path
              d="M2 3h12M2 6.5h12M2 10h12M2 13.5h12"
              stroke={viewMode === 'list' ? COLORS.n950 : COLORS.n400}
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <button
          onClick={() => setViewMode('grid')}
          style={{
            height: 32,
            width: 32,
            border: `1px solid ${COLORS.n200}`,
            borderRadius: '0 4px 4px 0',
            background: viewMode === 'grid' ? COLORS.n50 : COLORS.n0,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16">
            <rect
              x="2"
              y="2"
              width="5"
              height="5"
              rx="1"
              stroke={viewMode === 'grid' ? COLORS.n950 : COLORS.n400}
              strokeWidth="1.3"
              fill="none"
            />
            <rect
              x="9"
              y="2"
              width="5"
              height="5"
              rx="1"
              stroke={viewMode === 'grid' ? COLORS.n950 : COLORS.n400}
              strokeWidth="1.3"
              fill="none"
            />
            <rect
              x="2"
              y="9"
              width="5"
              height="5"
              rx="1"
              stroke={viewMode === 'grid' ? COLORS.n950 : COLORS.n400}
              strokeWidth="1.3"
              fill="none"
            />
            <rect
              x="9"
              y="9"
              width="5"
              height="5"
              rx="1"
              stroke={viewMode === 'grid' ? COLORS.n950 : COLORS.n400}
              strokeWidth="1.3"
              fill="none"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
