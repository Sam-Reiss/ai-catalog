import { COLORS, FONT_FAMILY, Persona, Scope } from '../types';
import { Icon } from './Icon';

interface SidebarProps {
  persona: Persona;
  setPersona: (p: Persona) => void;
  scope: Scope;
  setScope: (s: Scope) => void;
}

const exploreNav = [
  { id: 'projects', label: 'Projects', icon: 'project' },
  { id: 'groups', label: 'Groups', icon: 'group' },
  { id: 'cicd', label: 'CI/CD Catalog', icon: 'package' },
  { id: 'ai', label: 'AI Catalog', icon: 'tanuki-ai', active: true },
  { id: 'topics', label: 'Topics', icon: 'tag' },
  { id: 'snippets', label: 'Snippets', icon: 'snippet' },
];

const groupProjectNav = [
  { id: 'manage', label: 'Manage', icon: 'settings' },
  { id: 'plan', label: 'Plan', icon: 'project' },
  { id: 'ai', label: 'AI Catalog', icon: 'tanuki-ai', active: true },
  { id: 'code', label: 'Code', icon: 'snippet' },
  { id: 'build', label: 'Build', icon: 'package' },
  { id: 'secure', label: 'Secure', icon: 'eye' },
  { id: 'deploy', label: 'Deploy', icon: 'external-link' },
  { id: 'operate', label: 'Operate', icon: 'settings' },
  { id: 'monitor', label: 'Monitor', icon: 'chart' },
  { id: 'analyze', label: 'Analyze', icon: 'chart' },
];

export function Sidebar({ persona, setPersona, scope, setScope }: SidebarProps) {
  const nav = scope === 'Explore' ? exploreNav : groupProjectNav;
  const scopeTitle =
    scope === 'Explore' ? 'Explore' : scope === 'Group' ? 'Platform Engineering' : 'frontend-app';
  const scopeSub = scope === 'Project' ? 'Platform Engineering /' : null;

  return (
    <div
      style={{
        width: 220,
        borderRight: `1px solid ${COLORS.n100}`,
        background: COLORS.n0,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        flexShrink: 0,
        overflow: 'hidden',
      }}
    >
      {/* Logo */}
      <div style={{ padding: '12px 16px 4px' }}>
        <svg width="32" height="30" viewBox="100 0 180 260" xmlns="http://www.w3.org/2000/svg">
          <path fill="#e24329" d="M265.26416,174.37243l-.2134-.55822-21.19899-55.30908c-.4236-1.08359-1.18542-1.99642-2.17699-2.62689-.98837-.63373-2.14749-.93253-3.32305-.87014-1.1689.06239-2.29195.48925-3.20809 1.21821-.90957.73554-1.56629 1.73047-1.87493 2.85346l-14.31327 43.80662h-57.90965l-14.31327-43.80662c-.30864-1.12299-.96536-2.11791-1.87493-2.85346-.91614-.72895-2.03911-1.15582-3.20809-1.21821-1.17548-.06239-2.33468.23641-3.32297.87014-.99166.63047-1.75348 1.5433-2.17707 2.62689l-21.19891 55.31237-.21348.55493c-6.28158 16.38521-.92929 34.90803 13.05891 45.48782.02621.01641.04922.03611.07552.05582l.18719.14119 32.29094 24.17392 15.97151 12.09024 9.71951 7.34871c2.34117 1.77316 5.57877 1.77316 7.92002 0l9.71943-7.34871 15.96822-12.09024 32.48142-24.31511c.02958-.02299.05588-.04269.08538-.06568 13.97834-10.57977 19.32735-29.09604 13.04905-45.47796Z" />
          <path fill="#fc6d26" d="M265.26416,174.37243l-.2134-.55822c-10.5174 2.16062-20.20405 6.6099-28.49844 12.81593-.1346.0985-25.20497 19.05805-46.55171 35.19699 15.84998 11.98517 29.6477 22.40405 29.6477 22.40405l32.48142-24.31511c.02958-.02299.05588-.04269.08538-.06568 13.97834-10.57977 19.32735-29.09604 13.04905-45.47796Z" />
          <path fill="#fca326" d="M160.34962,244.23117l15.97151 12.09024 9.71951 7.34871c2.34117 1.77316 5.57877 1.77316 7.92002 0l9.71943-7.34871 15.96822-12.09024s-13.79772-10.41888-29.6477-22.40405c-15.85327 11.98517-29.65099 22.40405-29.65099 22.40405Z" />
          <path fill="#fc6d26" d="M143.44561,186.63014c-8.29111-6.20274-17.97446-10.65531-28.49507-12.81264l-.21348.55493c-6.28158 16.38521-.92929 34.90803 13.05891 45.48782.02621.01641.04922.03611.07552.05582l.18719.14119 32.29094 24.17392s13.79772-10.41888 29.65099-22.40405c-21.34673-16.13894-46.42031-35.09848-46.55499-35.19699Z" />
        </svg>
      </div>

      {/* Scope header */}
      <div style={{ padding: '8px 16px 4px' }}>
        {scopeSub && (
          <div style={{ fontSize: '11px', color: COLORS.n400, marginBottom: 2 }}>{scopeSub}</div>
        )}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {scope !== 'Explore' && (
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: 4,
                background: scope === 'Group' ? COLORS.p100 : COLORS.b100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px',
                fontWeight: 600,
                color: scope === 'Group' ? COLORS.p700 : COLORS.b600,
              }}
            >
              {scope === 'Group' ? 'P' : 'f'}
            </div>
          )}
          <span style={{ fontWeight: 600, fontSize: '14px', color: COLORS.n950 }}>{scopeTitle}</span>
        </div>
      </div>

      {/* Nav items */}
      <nav style={{ padding: '4px 0', flex: 1, overflowY: 'auto' }}>
        {nav.map((n) => (
          <div
            key={n.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '7px 16px',
              fontSize: '14px',
              background: n.active ? COLORS.b50 : 'transparent',
              color: n.active ? COLORS.b600 : COLORS.n700,
              fontWeight: n.active ? 600 : 400,
              borderLeft: n.active ? `3px solid ${COLORS.b500}` : '3px solid transparent',
              cursor: 'pointer',
            }}
          >
            <Icon name={n.icon} size={16} color={n.active ? COLORS.b600 : COLORS.n500} />
            {n.label}
          </div>
        ))}
      </nav>

      {/* Controls */}
      <div style={{ padding: '12px 16px', borderTop: `1px solid ${COLORS.n100}` }}>
        <div
          style={{
            fontSize: '11px',
            color: COLORS.n400,
            marginBottom: 6,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            fontWeight: 600,
          }}
        >
          Scope
        </div>
        {(['Explore', 'Group', 'Project'] as Scope[]).map((s) => (
          <button
            key={s}
            onClick={() => setScope(s)}
            style={{
              display: 'block',
              width: '100%',
              padding: '6px 10px',
              marginBottom: 2,
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
              textAlign: 'left',
              fontSize: '13px',
              fontWeight: s === scope ? 600 : 400,
              background: s === scope ? COLORS.b50 : 'transparent',
              color: s === scope ? COLORS.b600 : COLORS.n600,
              fontFamily: FONT_FAMILY,
            }}
          >
            {s}
          </button>
        ))}

        <div style={{ borderTop: `1px solid ${COLORS.n100}`, marginTop: 8, paddingTop: 8 }}>
          <div
            style={{
              fontSize: '11px',
              color: COLORS.n400,
              marginBottom: 6,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              fontWeight: 600,
            }}
          >
            Viewing as
          </div>
          {(['User', 'Engineer', 'Maintainer'] as Persona[]).map((p) => (
            <button
              key={p}
              onClick={() => setPersona(p)}
              style={{
                display: 'block',
                width: '100%',
                padding: '6px 10px',
                marginBottom: 2,
                border: 'none',
                borderRadius: 4,
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '13px',
                fontWeight: p === persona ? 600 : 400,
                background: p === persona ? COLORS.p50 : 'transparent',
                color: p === persona ? COLORS.p700 : COLORS.n600,
                fontFamily: FONT_FAMILY,
              }}
            >
              {p}
            </button>
          ))}
        </div>

        <div style={{ fontSize: '11px', color: COLORS.n300, marginTop: 8, fontStyle: 'italic' }}>
          Prototype only
        </div>
      </div>
    </div>
  );
}
