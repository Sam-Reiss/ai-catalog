import { COLORS, Visibility } from '../types';
import { Icon } from './Icon';

interface VisibilityBadgeProps {
  visibility: Visibility;
}

export function VisibilityBadge({ visibility }: VisibilityBadgeProps) {
  const visibilityMap: Record<Visibility, { bg: string; color: string; border: string; icon: string }> = {
    Public: {
      bg: COLORS.g50,
      color: COLORS.g600,
      border: COLORS.g100,
      icon: 'earth',
    },
    'Group-scoped': {
      bg: COLORS.b50,
      color: COLORS.b600,
      border: COLORS.b100,
      icon: 'group',
    },
    'Org-wide': {
      bg: COLORS.p50,
      color: COLORS.p700,
      border: COLORS.p100,
      icon: 'namespace',
    },
    Private: {
      bg: COLORS.n50,
      color: COLORS.n700,
      border: COLORS.n100,
      icon: 'eye',
    },
  };

  const v = visibilityMap[visibility] || visibilityMap.Private;

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        padding: '2px 8px',
        fontSize: '12px',
        fontWeight: 500,
        borderRadius: 4,
        background: v.bg,
        color: v.color,
        border: `1px solid ${v.border}`,
      }}
    >
      <Icon name={v.icon} size={12} color={v.color} />
      {visibility}
    </span>
  );
}
