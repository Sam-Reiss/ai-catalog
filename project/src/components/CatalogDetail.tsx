import { useState } from 'react';
import { COLORS, CatalogItem, Persona, FONT_FAMILY, Visibility } from '../types';
import { Icon } from './Icon';
import { VisibilityBadge } from './VisibilityBadge';
import { Badge } from './Badge';

interface CatalogDetailProps {
  item: CatalogItem;
  persona: Persona;
  onBack: () => void;
}

// ── Modal ──────────────────────────────────────────────────────────────────
function Modal({
  title,
  children,
  onConfirm,
  onCancel,
  confirmLabel,
  confirmDanger,
}: {
  title: string;
  children: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
  confirmLabel: string;
  confirmDanger?: boolean;
}) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0,0,0,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
        padding: 20,
      }}
    >
      <div
        style={{
          background: COLORS.n0,
          borderRadius: 4,
          boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
          width: '100%',
          maxWidth: 480,
          maxHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            padding: '12px 16px',
            borderBottom: `1px solid ${COLORS.n100}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600, color: COLORS.n950 }}>
            {title}
          </h3>
          <button
            onClick={onCancel}
            style={{
              width: 24, height: 24,
              border: 'none', background: 'transparent',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: 0,
            }}
          >
            <Icon name="close" size={12} color={COLORS.n500} />
          </button>
        </div>
        <div
          style={{
            padding: 16, overflow: 'auto', flex: 1,
            fontSize: '14px', color: COLORS.n700, lineHeight: '20px',
          }}
        >
          {children}
        </div>
        <div
          style={{
            padding: '12px 16px',
            borderTop: `1px solid ${COLORS.n100}`,
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 8,
          }}
        >
          <button
            onClick={onCancel}
            style={{
              height: 32, padding: '0 12px',
              borderRadius: 4, border: `1px solid ${COLORS.n200}`,
              background: COLORS.n0, color: COLORS.n700,
              fontWeight: 500, fontSize: '14px', fontFamily: FONT_FAMILY,
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            style={{
              height: 32, padding: '0 12px',
              borderRadius: 4, border: 'none',
              background: confirmDanger ? COLORS.r500 : COLORS.b500,
              color: COLORS.n0,
              fontWeight: 600, fontSize: '14px', fontFamily: FONT_FAMILY,
              cursor: 'pointer',
            }}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Visibility Edit Modal ──────────────────────────────────────────────────
function VisibilityEditModal({
  currentVi,
  onConfirm,
  onCancel,
}: {
  currentVi: Visibility;
  onConfirm: (v: Visibility) => void;
  onCancel: () => void;
}) {
  const [selected, setSelected] = useState<Visibility>(currentVi);
  const tiers: { v: Visibility; desc: string }[] = [
    { v: 'Private', desc: 'Only members of the managing project.' },
    { v: 'Group-scoped', desc: 'Visible within the managing group and its subgroups.' },
    { v: 'Org-wide', desc: 'All groups within this instance.' },
    { v: 'Public', desc: 'Any GitLab user.' },
  ];
  const order: Record<Visibility, number> = { Private: 0, 'Group-scoped': 1, 'Org-wide': 2, Public: 3 };
  const isDowngrade = order[selected] < order[currentVi];

  return (
    <Modal
      title="Edit visibility"
      onConfirm={() => onConfirm(selected)}
      onCancel={onCancel}
      confirmLabel={selected !== currentVi ? 'Save changes' : 'No changes'}
      confirmDanger={isDowngrade}
    >
      <p style={{ margin: '0 0 12px', fontSize: '13px', color: COLORS.n600 }}>
        Choose who can see and enable this item.
      </p>
      {tiers.map((tier) => (
        <div
          key={tier.v}
          onClick={() => setSelected(tier.v)}
          style={{
            padding: '10px 12px',
            border: `1px solid ${selected === tier.v ? COLORS.b200 : COLORS.n100}`,
            borderRadius: 4,
            marginBottom: 8,
            cursor: 'pointer',
            background: selected === tier.v ? COLORS.b50 : COLORS.n0,
            display: 'flex',
            alignItems: 'flex-start',
            gap: 10,
          }}
        >
          <div
            style={{
              width: 14, height: 14, borderRadius: 7,
              border: `2px solid ${selected === tier.v ? COLORS.b500 : COLORS.n200}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, marginTop: 2,
            }}
          >
            {selected === tier.v && (
              <div style={{ width: 6, height: 6, borderRadius: 3, background: COLORS.b500 }} />
            )}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
              <VisibilityBadge visibility={tier.v} />
              {tier.v === currentVi && (
                <span style={{ fontSize: '11px', color: COLORS.n400 }}>current</span>
              )}
            </div>
            <div style={{ fontSize: '13px', color: COLORS.n600 }}>{tier.desc}</div>
          </div>
        </div>
      ))}
      {isDowngrade && (
        <div
          style={{
            padding: '10px 12px',
            background: COLORS.o50,
            border: `1px solid ${COLORS.o100}`,
            borderRadius: 4,
            marginTop: 12,
            display: 'flex',
            gap: 8,
            alignItems: 'flex-start',
          }}
        >
          <div style={{ marginTop: 1 }}>
            <Icon name="eye" size={14} color={COLORS.o500} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '13px', fontWeight: 600, color: COLORS.o500, marginBottom: 2 }}>
              This change will affect existing users
            </div>
            <div style={{ fontSize: '13px', color: COLORS.n700 }}>
              Lowering visibility will affect consumers who are currently enabled under the wider tier.
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}

// ── Version Management ─────────────────────────────────────────────────────
function VersionManagement({ persona }: { persona: Persona }) {
  const [versions, setVersions] = useState([
    { v: '1.4.0', note: 'Updated system prompt for improved diff analysis', ago: '3 days ago', deprecated: false },
    { v: '1.3.2', note: 'Added support for multi-file context', ago: '3 weeks ago', deprecated: true },
    { v: '1.3.0', note: 'Initial public release', ago: '2 months ago', deprecated: false },
  ]);
  const [recommended, setRecommended] = useState('1.4.0');
  const [onVersion, setOnVersion] = useState('1.3.0');
  const [modal, setModal] = useState<{ type: string; target?: string } | null>(null);

  const latest = versions[0];
  const onVersionObj = versions.find((x) => x.v === onVersion);
  const isDeprecated = onVersionObj?.deprecated;
  const isOnRecommended = onVersion === recommended;
  const recommendedObj = versions.find((x) => x.v === recommended);

  const toggleDeprecated = (v: string) =>
    setVersions((p) => p.map((x) => (x.v === v ? { ...x, deprecated: !x.deprecated } : x)));

  const restoreAsNew = (v: string) => {
    const src = versions.find((x) => x.v === v)!;
    const parts = latest.v.split('.').map(Number);
    parts[2] += 1;
    const newV = parts.join('.');
    setVersions((p) => [
      { v: newV, note: `Restored from v${v}: ${src.note}`, ago: 'just now', deprecated: false },
      ...p,
    ]);
    setRecommended(newV);
  };

  if (persona === 'User') {
    return (
      <div>
        <div style={{ fontSize: '14px', fontWeight: 600, color: COLORS.n950, marginBottom: 8 }}>Version</div>
        <div
          style={{
            padding: '8px 12px',
            background: COLORS.n10,
            border: `1px solid ${COLORS.n100}`,
            borderRadius: 4,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <Icon name="tag" size={14} color={COLORS.n500} />
          <span style={{ fontSize: '14px', color: COLORS.n700 }}>
            Running version{' '}
            <code style={{ fontWeight: 600, color: COLORS.n950, fontFamily: 'monospace' }}>
              {onVersion}
            </code>
          </span>
        </div>
        <div style={{ fontSize: '12px', color: COLORS.n400, marginTop: 6 }}>
          Contact your maintainer if this needs to change.
        </div>
      </div>
    );
  }

  if (persona === 'Maintainer') {
    return (
      <div>
        <div style={{ fontSize: '14px', fontWeight: 600, color: COLORS.n950, marginBottom: 12 }}>
          Version management
        </div>

        {isDeprecated && (
          <div
            style={{
              padding: '10px 12px',
              background: COLORS.o50,
              border: `1px solid ${COLORS.o100}`,
              borderRadius: 4,
              marginBottom: 12,
              display: 'flex',
              gap: 8,
              alignItems: 'flex-start',
            }}
          >
            <div style={{ marginTop: 1 }}>
              <Icon name="close" size={14} color={COLORS.o500} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: COLORS.o500, marginBottom: 2 }}>
                This version has been deprecated
              </div>
              <div style={{ fontSize: '13px', color: COLORS.n700 }}>
                v{onVersion} was marked as deprecated. Update to the recommended version (v{recommended}).
              </div>
            </div>
          </div>
        )}

        {!isOnRecommended && !isDeprecated && (
          <div
            style={{
              padding: '10px 12px',
              background: COLORS.b50,
              border: `1px solid ${COLORS.b100}`,
              borderRadius: 4,
              marginBottom: 12,
              display: 'flex',
              gap: 8,
              alignItems: 'center',
            }}
          >
            <Icon name="check-circle" size={14} color={COLORS.b600} />
            <div style={{ fontSize: '13px', color: COLORS.n700, flex: 1 }}>
              The author recommends updating to v{recommended}.
            </div>
          </div>
        )}

        <div
          style={{
            padding: '12px 14px',
            background: COLORS.n10,
            border: `1px solid ${COLORS.n100}`,
            borderRadius: 4,
            marginBottom: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 8,
          }}
        >
          <div style={{ display: 'flex', gap: 24 }}>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 600, color: COLORS.n500, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 2 }}>
                You're on
              </div>
              <code style={{ fontSize: '14px', fontWeight: 600, color: COLORS.n950, fontFamily: 'monospace' }}>
                v{onVersion}
              </code>
            </div>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 600, color: COLORS.n500, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 2 }}>
                Author recommends
              </div>
              <code style={{ fontSize: '14px', fontWeight: 600, color: COLORS.n950, fontFamily: 'monospace' }}>
                v{recommended}
              </code>
            </div>
          </div>
          {!isOnRecommended ? (
            <button
              onClick={() => setModal({ type: 'update' })}
              style={{
                height: 28, padding: '0 10px',
                borderRadius: 4, border: 'none',
                background: COLORS.b500, color: COLORS.n0,
                fontWeight: 600, fontSize: '13px', fontFamily: FONT_FAMILY,
                cursor: 'pointer',
              }}
            >
              Update to recommended
            </button>
          ) : (
            <span
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                fontSize: '12px', color: COLORS.b600,
                padding: '4px 8px',
                background: COLORS.b50, border: `1px solid ${COLORS.b100}`,
                borderRadius: 4,
              }}
            >
              <Icon name="check-circle" size={12} color={COLORS.b500} />
              On recommended
            </span>
          )}
        </div>

        <div style={{ fontSize: '12px', fontWeight: 600, color: COLORS.n500, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 8 }}>
          History
        </div>
        {versions.map((ver, i) => (
          <div key={ver.v} style={{ display: 'flex', gap: 12, marginBottom: i < versions.length - 1 ? 16 : 0 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 16 }}>
              <div
                style={{
                  width: 10, height: 10, borderRadius: 5,
                  background: ver.v === recommended ? COLORS.g500 : ver.v === onVersion ? COLORS.b500 : COLORS.n200,
                  flexShrink: 0, marginTop: 4,
                }}
              />
              {i < versions.length - 1 && (
                <div style={{ width: 1, flex: 1, background: COLORS.n100, marginTop: 4 }} />
              )}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2, flexWrap: 'wrap' }}>
                <code style={{ fontSize: '14px', fontWeight: 600, color: COLORS.n950, fontFamily: 'monospace' }}>
                  {ver.v}
                </code>
                {ver.v === recommended && <Badge variant="green" size="sm">recommended</Badge>}
                {ver.v === onVersion && <Badge variant="blue" size="sm">you're here</Badge>}
                {ver.deprecated && <Badge variant="orange" size="sm">deprecated</Badge>}
              </div>
              <div style={{ fontSize: '13px', color: COLORS.n600 }}>{ver.note}</div>
              <div style={{ fontSize: '12px', color: COLORS.n400 }}>{ver.ago}</div>
            </div>
          </div>
        ))}

        {modal?.type === 'update' && (
          <Modal
            title="Update to recommended version"
            onConfirm={() => { setOnVersion(recommended); setModal(null); }}
            onCancel={() => setModal(null)}
            confirmLabel={`Update to v${recommended}`}
          >
            <p style={{ margin: '0 0 12px' }}>
              This will move you from <strong>v{onVersion}</strong> to <strong>v{recommended}</strong>.
            </p>
            <div style={{ padding: 12, background: COLORS.n10, border: `1px solid ${COLORS.n100}`, borderRadius: 4 }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: COLORS.n500, marginBottom: 4 }}>
                What's in v{recommended}
              </div>
              <div style={{ fontSize: '13px', color: COLORS.n700 }}>{recommendedObj?.note}</div>
            </div>
          </Modal>
        )}
      </div>
    );
  }

  // Engineer persona
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <div style={{ fontSize: '14px', fontWeight: 600, color: COLORS.n950 }}>Published versions</div>
        <button
          style={{
            height: 28, padding: '0 10px',
            borderRadius: 4, border: `1px solid ${COLORS.n200}`,
            background: COLORS.n0, color: COLORS.n700,
            fontWeight: 500, fontSize: '13px', fontFamily: FONT_FAMILY,
            cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 4,
          }}
        >
          <Icon name="plus" size={12} color={COLORS.n600} />
          Publish new version
        </button>
      </div>

      <div
        style={{
          padding: '10px 12px',
          background: COLORS.g50, border: `1px solid ${COLORS.g100}`,
          borderRadius: 4, marginBottom: 12,
          display: 'flex', gap: 8, alignItems: 'center',
        }}
      >
        <Icon name="check-circle" size={14} color={COLORS.g600} />
        <div style={{ fontSize: '13px', color: COLORS.n700, flex: 1 }}>
          Currently recommending{' '}
          <code style={{ fontWeight: 600, color: COLORS.n950, fontFamily: 'monospace' }}>v{recommended}</code>{' '}
          to consumers.
        </div>
      </div>

      {versions.map((ver, i) => (
        <div key={ver.v} style={{ display: 'flex', gap: 12, marginBottom: i < versions.length - 1 ? 16 : 0 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 16 }}>
            <div
              style={{
                width: 10, height: 10, borderRadius: 5,
                background: ver.v === recommended ? COLORS.g500 : COLORS.n200,
                flexShrink: 0, marginTop: 4,
              }}
            />
            {i < versions.length - 1 && (
              <div style={{ width: 1, flex: 1, background: COLORS.n100, marginTop: 4 }} />
            )}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2, flexWrap: 'wrap' }}>
              <code style={{ fontSize: '14px', fontWeight: 600, color: COLORS.n950, fontFamily: 'monospace' }}>
                {ver.v}
              </code>
              {ver.v === recommended && <Badge variant="green" size="sm">recommended</Badge>}
              {ver.deprecated && <Badge variant="orange" size="sm">deprecated</Badge>}
            </div>
            <div style={{ fontSize: '13px', color: COLORS.n600 }}>{ver.note}</div>
            <div style={{ fontSize: '12px', color: COLORS.n400, marginBottom: 6 }}>{ver.ago}</div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {ver.v !== recommended && !ver.deprecated && (
                <button
                  onClick={() => setRecommended(ver.v)}
                  style={{ height: 24, padding: '0 8px', borderRadius: 4, border: `1px solid ${COLORS.n200}`, background: COLORS.n0, color: COLORS.n700, fontSize: '12px', fontFamily: FONT_FAMILY, cursor: 'pointer' }}
                >
                  Set as recommended
                </button>
              )}
              {ver.v !== latest.v && (
                <button
                  onClick={() => setModal({ type: 'restore', target: ver.v })}
                  style={{ height: 24, padding: '0 8px', borderRadius: 4, border: `1px solid ${COLORS.n200}`, background: COLORS.n0, color: COLORS.n700, fontSize: '12px', fontFamily: FONT_FAMILY, cursor: 'pointer' }}
                >
                  Restore as new version
                </button>
              )}
              <button
                onClick={() => setModal({ type: ver.deprecated ? 'undeprecate' : 'deprecate', target: ver.v })}
                style={{ height: 24, padding: '0 8px', borderRadius: 4, border: `1px solid ${ver.deprecated ? COLORS.n200 : COLORS.o100}`, background: COLORS.n0, color: ver.deprecated ? COLORS.n700 : COLORS.o500, fontSize: '12px', fontFamily: FONT_FAMILY, cursor: 'pointer' }}
              >
                {ver.deprecated ? 'Unmark as deprecated' : 'Mark as deprecated'}
              </button>
            </div>
          </div>
        </div>
      ))}

      {modal?.type === 'restore' && modal.target && (
        <Modal
          title="Restore as new version"
          onConfirm={() => { restoreAsNew(modal.target!); setModal(null); }}
          onCancel={() => setModal(null)}
          confirmLabel="Create new version"
        >
          <p style={{ margin: '0 0 12px' }}>
            This will create a <strong>new version</strong> using the configuration from{' '}
            <strong>v{modal.target}</strong> and set it as recommended.
          </p>
          <p style={{ margin: 0, fontSize: '13px', color: COLORS.n500 }}>
            Versions are immutable, so v{modal.target} itself stays unchanged.
          </p>
        </Modal>
      )}
      {modal?.type === 'deprecate' && modal.target && (
        <Modal
          title={`Mark v${modal.target} as deprecated`}
          onConfirm={() => { toggleDeprecated(modal.target!); setModal(null); }}
          onCancel={() => setModal(null)}
          confirmLabel="Mark as deprecated"
          confirmDanger
        >
          <p style={{ margin: '0 0 12px' }}>
            Deprecating <strong>v{modal.target}</strong> signals to consumers that it should no longer be used.
          </p>
          <p style={{ margin: 0, fontSize: '13px', color: COLORS.n500 }}>
            Deprecation does not affect running sessions. You can unmark at any time.
          </p>
        </Modal>
      )}
      {modal?.type === 'undeprecate' && modal.target && (
        <Modal
          title={`Unmark v${modal.target} as deprecated`}
          onConfirm={() => { toggleDeprecated(modal.target!); setModal(null); }}
          onCancel={() => setModal(null)}
          confirmLabel="Unmark"
        >
          <p style={{ margin: 0 }}>
            This will remove the deprecated marker from <strong>v{modal.target}</strong>.
          </p>
        </Modal>
      )}
    </div>
  );
}

// ── Main Detail ────────────────────────────────────────────────────────────
export function CatalogDetail({ item, persona, onBack }: CatalogDetailProps) {
  const [actOpen, setActOpen] = useState(false);
  const [tab, setTab] = useState<'config' | 'governance' | 'performance'>('config');
  const [visEditOpen, setVisEditOpen] = useState(false);
  const [currentVi, setCurrentVi] = useState<Visibility>(item.visibility);
  const [enabled, setEnabled] = useState(false);
  const [tipOpen, setTipOpen] = useState(false);

  const label = enabled ? 'Disable' : 'Enable';
  const primaryBtn = {
    height: 32, padding: '0 12px',
    borderRadius: 4, border: 'none',
    cursor: 'pointer',
    background: COLORS.b500, color: COLORS.n0,
    fontWeight: 600, fontSize: '14px', fontFamily: FONT_FAMILY,
    display: 'inline-flex', alignItems: 'center',
  };
  const secondaryBtn = {
    height: 32, padding: '0 12px',
    borderRadius: 4, border: `1px solid ${COLORS.n200}`,
    cursor: 'pointer',
    background: COLORS.n0, color: COLORS.n700,
    fontWeight: 500, fontSize: '14px', fontFamily: FONT_FAMILY,
    display: 'inline-flex', alignItems: 'center',
  };

  const admActs = [
    { l: 'Manage versions', ic: 'tag' },
    { l: 'Enable for instance', ic: 'check-circle' },
  ];

  return (
    <div>
      {/* Back button */}
      <button
        onClick={onBack}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 4,
          padding: '4px 0', border: 'none', background: 'none',
          cursor: 'pointer', color: COLORS.b600, fontSize: '14px',
          marginBottom: 16, fontFamily: FONT_FAMILY,
        }}
      >
        <Icon name="chevron-left" size={14} color={COLORS.b600} />
        Back to catalog
      </button>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <h1 style={{ margin: 0, fontSize: '20px', fontWeight: 600, color: COLORS.n950, lineHeight: '28px' }}>
              {item.name}
            </h1>
            {item.is_foundational && (
              <span
                title="Foundational"
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: 22, height: 22, borderRadius: 11,
                  background: COLORS.p50, border: `1px solid ${COLORS.p100}`,
                }}
              >
                <Icon name="tanuki-ai" size={12} color={COLORS.purple500} />
              </span>
            )}
            {item.forked_from && (
              <span
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 4,
                  fontSize: '12px', color: COLORS.n400,
                  background: COLORS.n50, padding: '2px 8px',
                  borderRadius: 4, border: `1px solid ${COLORS.n100}`,
                }}
              >
                <Icon name="fork" size={12} color={COLORS.n400} />
                Forked from {item.forked_from}
              </span>
            )}
          </div>
          <p style={{ margin: 0, color: COLORS.n500, fontSize: '14px', lineHeight: '20px' }}>
            Updated recently by {item.author}
          </p>
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          {(persona === 'Engineer' || persona === 'Maintainer') && (
            <button
              style={{ height: 32, padding: '0 8px', border: 'none', background: 'transparent', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: '14px', color: COLORS.b600, fontFamily: FONT_FAMILY }}
            >
              <Icon name="fork" size={14} color={COLORS.b600} />
              Duplicate
            </button>
          )}

          {persona === 'User' && (
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setTipOpen(true)}
              onMouseLeave={() => setTipOpen(false)}
            >
              <button
                disabled
                style={{
                  height: 32, padding: '0 12px',
                  borderRadius: 4, border: `1px solid ${COLORS.n100}`,
                  background: COLORS.n50, color: COLORS.n300,
                  fontWeight: 600, fontSize: '14px', fontFamily: FONT_FAMILY,
                  cursor: 'not-allowed',
                }}
              >
                {label}
              </button>
              {tipOpen && (
                <div
                  role="tooltip"
                  style={{
                    position: 'absolute', top: 'calc(100% + 6px)', right: 0,
                    width: 260, background: COLORS.n900, color: COLORS.n0,
                    padding: '8px 10px', borderRadius: 4,
                    fontSize: '12px', lineHeight: '16px',
                    zIndex: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  }}
                >
                  You need the Maintainer role in frontend-app to {label.toLowerCase()} this.
                </div>
              )}
            </div>
          )}

          {persona === 'Engineer' && (
            <button onClick={() => setEnabled(!enabled)} style={enabled ? secondaryBtn : primaryBtn}>
              {label}
            </button>
          )}

          {persona === 'Maintainer' && (
            <div style={{ display: 'flex', position: 'relative' }}>
              <button
                onClick={() => setEnabled(!enabled)}
                style={{
                  ...enabled ? secondaryBtn : primaryBtn,
                  borderRadius: '4px 0 0 4px',
                  ...(enabled ? { borderRight: 'none' } : {}),
                }}
              >
                {label}
              </button>
              <button
                onClick={() => setActOpen(!actOpen)}
                style={{
                  height: 32, width: 32,
                  border: enabled ? `1px solid ${COLORS.n200}` : `1px solid ${COLORS.b500}`,
                  borderLeft: enabled ? undefined : '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '0 4px 4px 0',
                  background: enabled ? COLORS.n0 : COLORS.b500,
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: 0,
                }}
              >
                <Icon name="chevron-down" size={12} color={enabled ? COLORS.n500 : COLORS.n0} />
              </button>
              {actOpen && (
                <div
                  style={{
                    position: 'absolute', top: 'calc(100% + 4px)', right: 0,
                    width: 210,
                    background: COLORS.n0, border: `1px solid ${COLORS.n200}`,
                    borderRadius: 4, boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    zIndex: 10, padding: '4px 0',
                  }}
                >
                  {admActs.map((a) => (
                    <button
                      key={a.l}
                      onClick={() => setActOpen(false)}
                      onMouseEnter={(e) => (e.currentTarget.style.background = COLORS.n50)}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 8,
                        width: '100%', padding: '7px 12px',
                        border: 'none', background: 'transparent',
                        cursor: 'pointer', fontSize: '14px', color: COLORS.n950,
                        textAlign: 'left', fontFamily: FONT_FAMILY,
                      }}
                    >
                      <Icon name={a.ic} size={14} color={COLORS.n500} />
                      {a.l}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Stats bar */}
      <div
        style={{
          display: 'flex', gap: 24,
          padding: '12px 16px',
          background: COLORS.n10, borderRadius: 4,
          marginBottom: 20, border: `1px solid ${COLORS.n100}`,
          flexWrap: 'wrap',
        }}
      >
        <div style={{ minWidth: 80 }}>
          <div style={{ fontSize: '12px', color: COLORS.n400, marginBottom: 2 }}>
            {item.type === 'skill' ? 'Available in' : 'Namespaces'}
          </div>
          <div style={{ fontSize: '16px', fontWeight: 600, color: COLORS.n950 }}>
            {item.namespaces}
          </div>
          {item.type !== 'skill' && (
            <div style={{ fontSize: '11px', color: COLORS.n300 }}>last 30 days</div>
          )}
        </div>
        <div style={{ minWidth: 60 }}>
          <div style={{ fontSize: '12px', color: COLORS.n400, marginBottom: 2 }}>Stars</div>
          <div style={{ fontSize: '16px', fontWeight: 600, color: COLORS.n950 }}>{item.stars}</div>
        </div>
        <div style={{ minWidth: 90 }}>
          <div style={{ fontSize: '12px', color: COLORS.n400, marginBottom: 2 }}>Visibility</div>
          <VisibilityBadge visibility={currentVi} />
        </div>
        <div style={{ minWidth: 90 }}>
          <div style={{ fontSize: '12px', color: COLORS.n400, marginBottom: 2 }}>Category</div>
          <div style={{ fontSize: '16px', fontWeight: 600, color: COLORS.n950 }}>
            {item.tags[0] || '—'}
          </div>
        </div>
        {item.success_rate !== null && (
          <div style={{ minWidth: 80 }}>
            <div style={{ fontSize: '12px', color: COLORS.n400, marginBottom: 2 }}>Success rate</div>
            <div
              style={{
                fontSize: '16px', fontWeight: 600,
                color: item.success_rate >= 85 ? COLORS.g600 : item.success_rate >= 70 ? COLORS.o500 : COLORS.n400,
              }}
            >
              {item.success_rate}%
            </div>
          </div>
        )}
      </div>

      {/* About */}
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: '14px', fontWeight: 600, color: COLORS.n950, margin: '0 0 6px' }}>About</h2>
        <p style={{ color: COLORS.n600, lineHeight: '20px', margin: 0, fontSize: '14px' }}>
          {item.description}
        </p>
      </div>

      {/* How to use */}
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: '14px', fontWeight: 600, color: COLORS.n950, margin: '0 0 6px' }}>How to use</h2>
        {item.type === 'skill' ? (
          <p style={{ color: COLORS.n600, fontSize: '14px', margin: 0, lineHeight: '20px' }}>
            Once enabled, this skill becomes available to agents running in the selected scope. Agents load it automatically when the task matches the skill's description — you don't invoke it directly.
          </p>
        ) : (
          <p style={{ color: COLORS.n600, fontSize: '14px', margin: 0, lineHeight: '20px' }}>
            Once enabled in your project, trigger this {item.type} by mentioning{' '}
            <code style={{ background: COLORS.n50, padding: '1px 4px', borderRadius: 3, fontSize: '13px', border: `1px solid ${COLORS.n100}` }}>
              @{item.name.toLowerCase().replace(/\s/g, '-')}
            </code>{' '}
            in an issue or merge request.
          </p>
        )}
      </div>

      {/* Skills in scope (for agents/flows) */}
      {(item.type === 'agent' || item.type === 'flow') && (
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
            <h2 style={{ fontSize: '14px', fontWeight: 600, color: COLORS.n950, margin: 0 }}>
              Skills available in this scope
            </h2>
            <span style={{ fontSize: '12px', color: COLORS.n400 }}>3 of 5 available here</span>
          </div>
          <p style={{ color: COLORS.n500, fontSize: '13px', margin: '0 0 10px', lineHeight: '18px' }}>
            Skills this {item.type} may load at runtime when a task matches.
          </p>
          <div style={{ border: `1px solid ${COLORS.n100}`, borderRadius: 4, overflow: 'hidden' }}>
            {[
              { n: 'Ruby Code Review Standards', d: 'Loaded when reviewing Ruby changes', au: 'GitLab' },
              { n: 'API Documentation Standards', d: 'Loaded when generating API reference docs', au: 'GitLab' },
              { n: 'Terraform Review Guidelines', d: 'Loaded when reviewing Terraform plans', au: 'GitLab' },
            ].map((sk, i) => (
              <div
                key={i}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '10px 12px',
                  borderBottom: i < 2 ? `1px solid ${COLORS.n100}` : 'none',
                }}
              >
                <Icon name="book-open" size={14} color={COLORS.n600} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '13px', fontWeight: 500, color: COLORS.n950 }}>{sk.n}</div>
                  <div style={{ fontSize: '12px', color: COLORS.n400 }}>{sk.d} · by {sk.au}</div>
                </div>
                <span
                  style={{
                    fontSize: '11px', fontWeight: 600, color: COLORS.g600,
                    background: COLORS.g50, border: `1px solid ${COLORS.g100}`,
                    padding: '0 6px', borderRadius: 4, lineHeight: '18px', flexShrink: 0,
                  }}
                >
                  available
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Config section (Engineer / Maintainer) */}
      {(persona === 'Engineer' || persona === 'Maintainer') && (
        <div style={{ marginBottom: 20 }}>
          {persona === 'Maintainer' && (
            <div style={{ display: 'flex', borderBottom: `2px solid ${COLORS.n100}`, marginBottom: 16 }}>
              {(['config', 'governance', 'performance'] as const).map((tb) => (
                <button
                  key={tb}
                  onClick={() => setTab(tb)}
                  style={{
                    padding: '8px 16px', border: 'none', background: 'transparent',
                    cursor: 'pointer', fontSize: '14px',
                    fontWeight: tab === tb ? 600 : 400,
                    color: tab === tb ? COLORS.n950 : COLORS.n500,
                    fontFamily: FONT_FAMILY,
                    borderBottom: tab === tb ? `2px solid ${COLORS.b500}` : '2px solid transparent',
                    marginBottom: -2,
                    textTransform: 'capitalize',
                  }}
                >
                  {tb === 'config' ? 'Configuration' : tb === 'governance' ? 'Governance' : 'Performance'}
                </button>
              ))}
            </div>
          )}
          {persona === 'Engineer' && (
            <h2 style={{ fontSize: '16px', fontWeight: 600, color: COLORS.n950, margin: '0 0 16px' }}>
              Configuration
            </h2>
          )}

          {/* Config tab */}
          {(tab === 'config' || persona === 'Engineer') && (
            <>
              {/* Visibility & access panel */}
              <div style={{ border: `1px solid ${COLORS.n100}`, borderRadius: 4, marginBottom: 16, overflow: 'hidden' }}>
                <div style={{ background: COLORS.n50, padding: '8px 16px', borderBottom: `1px solid ${COLORS.n100}` }}>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: COLORS.n950 }}>Visibility & access</span>
                </div>
                <div style={{ padding: 16 }}>
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: COLORS.n950, marginBottom: 2 }}>Managed by</div>
                    <div style={{ fontSize: '14px', color: COLORS.n600 }}>{item.author}</div>
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: COLORS.n950 }}>Visibility</div>
                      <button
                        onClick={() => setVisEditOpen(true)}
                        style={{ height: 24, padding: '0 8px', borderRadius: 4, border: `1px solid ${COLORS.n200}`, background: COLORS.n0, color: COLORS.n700, fontSize: '12px', fontFamily: FONT_FAMILY, cursor: 'pointer' }}
                      >
                        Edit
                      </button>
                    </div>
                    <VisibilityBadge visibility={currentVi} />
                    <div style={{ fontSize: '13px', color: COLORS.n500, marginTop: 4 }}>
                      {currentVi === 'Public' ? 'Anyone can view and enable.' : currentVi === 'Group-scoped' ? 'Visible within the managing group and its subgroups.' : currentVi === 'Org-wide' ? 'All groups within this instance.' : 'Only managing project members.'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Tools / Source panel */}
              <div style={{ border: `1px solid ${COLORS.n100}`, borderRadius: 4, overflow: 'hidden' }}>
                <div style={{ background: COLORS.n50, padding: '8px 16px', borderBottom: `1px solid ${COLORS.n100}` }}>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: COLORS.n950 }}>
                    {item.type === 'skill' ? 'Source' : 'Tools & system prompt'}
                  </span>
                </div>
                <div style={{ padding: 16 }}>
                  {item.type !== 'skill' && (
                    <>
                      <div style={{ marginBottom: 16 }}>
                        <div style={{ fontSize: '14px', fontWeight: 600, color: COLORS.n950, marginBottom: 8 }}>Tools</div>
                        {(item.type === 'agent'
                          ? [
                              { n: 'Search code', d: 'Searches the codebase using keywords or regex', on: true },
                              { n: 'Read file', d: 'Reads the contents of a file at a given path', on: true },
                              { n: 'List directory', d: 'Lists the files and subdirectories within a path', on: true },
                              { n: 'Create file', d: 'Creates a new file with given contents', on: true },
                              { n: 'Edit file', d: 'Modifies a file using find-and-replace', on: true },
                              { n: 'Run terminal', d: 'Executes shell commands', on: false },
                              { n: 'Create MR', d: 'Opens a merge request', on: true },
                            ]
                          : [
                              { n: 'Run Pipeline', d: 'Triggers a CI/CD pipeline run', on: true },
                              { n: 'Create Merge Request', d: 'Opens a new merge request', on: true },
                              { n: 'Get Job Log', d: 'Retrieves logs from a pipeline job', on: true },
                              { n: 'Update Issue', d: 'Modifies an existing issue', on: true },
                            ]
                        ).map((tool, i, arr) => (
                          <div
                            key={i}
                            style={{
                              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                              padding: '8px 0',
                              borderBottom: i < arr.length - 1 ? `1px solid ${COLORS.n100}` : 'none',
                            }}
                          >
                            <div>
                              <div style={{ fontSize: '14px', fontWeight: 500, color: COLORS.n950 }}>{tool.n}</div>
                              <div style={{ fontSize: '12px', color: COLORS.n400 }}>{tool.d}</div>
                            </div>
                            <div
                              style={{
                                width: 36, height: 20, borderRadius: 10,
                                background: tool.on ? COLORS.g500 : COLORS.n200,
                                position: 'relative', cursor: 'pointer', flexShrink: 0,
                              }}
                            >
                              <div
                                style={{
                                  width: 16, height: 16, borderRadius: 8,
                                  background: COLORS.n0,
                                  position: 'absolute', top: 2,
                                  left: tool.on ? 18 : 2,
                                  transition: 'left 0.15s',
                                  boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div style={{ marginBottom: 16 }}>
                        <div style={{ fontSize: '14px', fontWeight: 600, color: COLORS.n950, marginBottom: 8 }}>System prompt</div>
                        <div
                          style={{
                            background: COLORS.n50, border: `1px solid ${COLORS.n100}`,
                            borderRadius: 4, padding: 16,
                            fontFamily: 'monospace', fontSize: '13px', lineHeight: 1.6,
                            color: COLORS.n700, maxHeight: 160, overflow: 'auto',
                            whiteSpace: 'pre-wrap',
                          }}
                        >
                          {`# ${item.name}\n\n## Core Identity\nYou are **${item.name}**, an AI assistant embedded in GitLab.\n\n## Rules\n- FILTER FIRST: Use available filters\n- PAGINATE: Check hasNextPage\n…`}
                        </div>
                      </div>
                    </>
                  )}
                  {item.type === 'skill' && (
                    <div style={{ marginBottom: 16 }}>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: COLORS.n950, marginBottom: 6 }}>Description</div>
                      <div style={{ background: COLORS.n50, border: `1px solid ${COLORS.n100}`, borderRadius: 4, padding: 12, fontSize: '13px', color: COLORS.n700, lineHeight: '20px' }}>
                        {item.description}
                      </div>
                    </div>
                  )}
                  <VersionManagement persona={persona} />
                </div>
              </div>
            </>
          )}

          {/* Governance tab (Maintainer only) */}
          {tab === 'governance' && persona === 'Maintainer' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {[
                  { l: 'Instance-level status', v: 'Enabled', dot: COLORS.g400, vc: COLORS.g600 },
                  { l: 'Active version', v: 'v2.1.0 (recommended)', vc: COLORS.n600 },
                  { l: 'Groups with access', v: '12 of 34 groups', vc: COLORS.n600 },
                  { l: 'Pending requests', v: '3', vc: COLORS.o500 },
                ].map((g, i) => (
                  <div key={i} style={{ padding: 12, background: COLORS.n0, borderRadius: 4, border: `1px solid ${COLORS.n100}` }}>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: COLORS.n500, marginBottom: 4 }}>{g.l}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      {g.dot && <div style={{ width: 8, height: 8, borderRadius: '50%', background: g.dot }} />}
                      <span style={{ fontSize: '14px', color: g.vc }}>{g.v}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Performance tab (Maintainer only) */}
          {tab === 'performance' && persona === 'Maintainer' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                {[
                  { l: 'Success rate', v: `${item.success_rate ?? 0}%`, sc: (item.success_rate ?? 0) >= 85 ? COLORS.g600 : COLORS.o500 },
                  { l: 'Sessions (30d)', v: `${Math.round(item.namespaces * 0.7)}`, sc: COLORS.n950 },
                  { l: 'Credits (30d)', v: `${Math.round(item.namespaces * 1.8)}`, sc: COLORS.n950 },
                ].map((m, i) => (
                  <div key={i} style={{ padding: 12, background: COLORS.n0, borderRadius: 4, border: `1px solid ${COLORS.n100}` }}>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: COLORS.n500, marginBottom: 4 }}>{m.l}</div>
                    <div style={{ fontSize: '20px', fontWeight: 600, color: m.sc }}>{m.v}</div>
                  </div>
                ))}
              </div>
              <div style={{ border: `1px solid ${COLORS.n100}`, borderRadius: 4, overflow: 'hidden' }}>
                <div style={{ background: COLORS.n50, padding: '8px 16px', borderBottom: `1px solid ${COLORS.n100}` }}>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: COLORS.n950 }}>Phase 1 metrics</span>
                </div>
                <div style={{ padding: 16 }}>
                  {[
                    { l: 'Avg steps per task', v: '4.2' },
                    { l: 'Failure reason', v: 'Tool timeout (34%), Bad input (22%), Rate limit (18%)' },
                    { l: 'Code acceptance rate', v: 'Coming in Phase 2' },
                  ].map((m, i, arr) => (
                    <div key={i} style={{ marginBottom: i < arr.length - 1 ? 12 : 0 }}>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: COLORS.n700, marginBottom: 2 }}>{m.l}</div>
                      <div style={{ fontSize: '14px', color: COLORS.n600 }}>{m.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {visEditOpen && (
        <VisibilityEditModal
          currentVi={currentVi}
          onConfirm={(v) => { setCurrentVi(v); setVisEditOpen(false); }}
          onCancel={() => setVisEditOpen(false)}
        />
      )}
    </div>
  );
}
