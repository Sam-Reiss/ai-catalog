import { COLORS } from '../types';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'neutral' | 'purple' | 'blue' | 'green' | 'orange';
  size?: 'sm' | 'md';
}

export function Badge({ children, variant = 'neutral', size = 'sm' }: BadgeProps) {
  const variants = {
    neutral: {
      bg: COLORS.n50,
      color: COLORS.n700,
      border: COLORS.n100,
    },
    purple: {
      bg: COLORS.p50,
      color: COLORS.p700,
      border: COLORS.p100,
    },
    blue: {
      bg: COLORS.b50,
      color: COLORS.b600,
      border: COLORS.b100,
    },
    green: {
      bg: COLORS.g50,
      color: COLORS.g600,
      border: COLORS.g100,
    },
    orange: {
      bg: COLORS.o50,
      color: COLORS.o500,
      border: COLORS.o100,
    },
  };

  const v = variants[variant] || variants.neutral;

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        padding: size === 'sm' ? '1px 6px' : '2px 8px',
        fontSize: size === 'sm' ? '11px' : '13px',
        fontWeight: 500,
        borderRadius: 4,
        lineHeight: '18px',
        background: v.bg,
        color: v.color,
        border: `1px solid ${v.border}`,
      }}
    >
      {children}
    </span>
  );
}
