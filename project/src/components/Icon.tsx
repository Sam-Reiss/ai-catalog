interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

export function Icon({ name, size = 16, color = 'currentColor' }: IconProps) {
  const icons: Record<string, React.ReactNode> = {
    'tanuki-ai': (
      <path fillRule="evenodd" clipRule="evenodd" d="M2.377.266a.4.4 0 0 0-.754 0l-.291.823a.4.4 0 0 1-.243.243l-.823.291a.4.4 0 0 0 0 .754l.823.291a.4.4 0 0 1 .243.243l.291.823a.4.4 0 0 0 .754 0l.291-.823a.4.4 0 0 1 .243-.243l.823-.291a.4.4 0 0 0 0-.754l-.823-.291a.4.4 0 0 1-.243-.243L2.377.266Zm12.018 6.602-.014-.038-.55-1.44-.172.53-.337 1.035H6.678L6.342 5.92l-.172-.528-.551 1.445-.004.01-.004.01-.012.03a1.557 1.557 0 0 0 .512 1.78l.001.001.003.003.01.008.01.008.004.002 2.474 1.862.005.004 1.232.935.148.112.146-.112 1.233-.935.006-.004 2.49-1.873.006-.004.009-.006a1.558 1.558 0 0 0 .51-1.79l-.003-.009Zm.391 3-2.502 1.88-1.233.936-.748.569a.505.505 0 0 1-.61 0l-.75-.569-1.232-.935-2.485-1.87-.013-.011-.007-.005A3.057 3.057 0 0 1 4.2 6.343l.017-.042L5.431 3.12l.068-.178.043-.114.173-.453.017-.045.118-.308a.425.425 0 0 1 .356-.27.43.43 0 0 1 .46.314l.099.305.004.013.193.594.06.181.746 2.296h4.464l.747-2.296.06-.18.193-.595.004-.013.099-.305a.433.433 0 0 1 .648-.248.43.43 0 0 1 .168.204l.116.305.019.048.171.45.045.117.068.177L15.784 6.3l.016.044a3.057 3.057 0 0 1-1.007 3.518l-.007.006ZM3.03 11.333a.5.5 0 0 1 .942 0l.364 1.028a.5.5 0 0 0 .304.304l1.028.364a.5.5 0 0 1 0 .942l-1.028.364a.5.5 0 0 0-.304.304l-.364 1.028a.5.5 0 0 1-.942 0l-.364-1.028a.5.5 0 0 0-.304-.304l-1.028-.364a.5.5 0 0 1 0-.942l1.028-.364a.5.5 0 0 0 .304-.304l.364-1.028Z" fill={color} />
    ),
    'flow-ai': (
      <path d="M7.156 1.446c.412-.662 1.437-.614 1.762.141l1.447 3.362a.75.75 0 0 1-1.378.593l-.988-2.295-1.113 2.591c-.202.47-.578.846-1.048 1.048l-2.59 1.113 2.59 1.115c.47.203.846.577 1.048 1.047l1.113 2.59 1.312-3.048.33-.779a2.75 2.75 0 0 1 2.532-1.674h.956l-.97-.97a.75.75 0 0 1 1.061-1.06L16 8l-2.78 2.78a.75.75 0 0 1-1.06-1.06l.97-.97h-.957c-.501 0-.954.3-1.15.761l-.333.782-.001.003-1.77 4.116c-.348.807-1.49.807-1.838 0l-1.573-3.658a.501.501 0 0 0-.262-.262L1.587 8.918c-.806-.347-.806-1.49 0-1.837l3.66-1.573a.501.501 0 0 0 .261-.262l1.573-3.659.075-.141Z" fill={color} />
    ),
    'agent-ai': (
      <path d="M14.25 1a.75.75 0 0 1 .75.75V8.5l-.004.07a4.46 4.46 0 0 1-2.176 3.728l-4.284 2.55-.121.061a1 1 0 0 1-.9-.06L3.19 12.295A4.46 4.46 0 0 1 1.01 8.75l-.005-.174L1 8.5V1.75a.75.75 0 0 1 1.5 0v3.373a4.44 4.44 0 0 1 2.728-1.117L5.457 4h5.08l.23.006a4.44 4.44 0 0 1 2.733 1.12V1.75a.75.75 0 0 1 .75-.75M5.457 5.5a2.957 2.957 0 0 0-1.504 5.502l4.07 2.404 4.03-2.397A2.963 2.963 0 0 0 10.537 5.5zm5.293 2a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5z" fill={color} />
    ),
    link: (
      <path fillRule="evenodd" clipRule="evenodd" d="M9.929 3.132a2.078 2.078 0 1 1 2.94 2.94l-.65.648a.75.75 0 0 0 1.061 1.06l.649-.648a3.579 3.579 0 0 0-5.06-5.06L6.218 4.72a3.578 3.578 0 0 0 0 5.06.75.75 0 0 0 1.061-1.06 2.078 2.078 0 0 1 0-2.94L9.93 3.132Zm-.15 3.086a.75.75 0 0 0-1.057 1.064c.816.81.818 2.13.004 2.942l-2.654 2.647a2.08 2.08 0 0 1-2.94-2.944l.647-.647a.75.75 0 0 0-1.06-1.06l-.648.647a3.58 3.58 0 0 0 5.06 5.066l2.654-2.647a3.575 3.575 0 0 0-.007-5.068Z" fill={color} />
    ),
    'star-o': (
      <path d="M8 1.25l2.03 4.11 4.54.66-3.29 3.2.78 4.53L8 11.67l-4.06 2.08.78-4.53-3.29-3.2 4.54-.66L8 1.25z" fill="none" stroke={color} strokeWidth="1.3" strokeLinejoin="round" />
    ),
    search: (
      <>
        <circle cx="7" cy="7" r="4.25" fill="none" stroke={color} strokeWidth="1.5" />
        <path d="M10.25 10.25L14 14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
    project: (
      <path fillRule="evenodd" clipRule="evenodd" d="M2 2.75A.75.75 0 0 1 2.75 2h4.79a.75.75 0 0 1 .53.22l1.28 1.28h3.85a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-.75.75h-10.5A.75.75 0 0 1 2 12.75V2.75zm1.5.75v8.5h9V5H9.11a.75.75 0 0 1-.53-.22L7.3 3.5H3.5z" fill={color} />
    ),
    group: (
      <>
        <path d="M5.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" fill="none" stroke={color} strokeWidth="1.3" />
        <path d="M1 14c0-2.49 2.01-4.5 4.5-4.5S10 11.51 10 14" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
        <path d="M10.5 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="none" stroke={color} strokeWidth="1.3" />
        <path d="M11 9.5c1.66 0 3.5 1.12 3.5 3" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      </>
    ),
    package: (
      <path fillRule="evenodd" clipRule="evenodd" d="M8.27 1.1a.75.75 0 0 0-.54 0l-6 2.5A.75.75 0 0 0 1.25 4.3v7.4a.75.75 0 0 0 .48.7l6 2.5a.75.75 0 0 0 .54 0l6-2.5a.75.75 0 0 0 .48-.7V4.3a.75.75 0 0 0-.48-.7l-6-2.5zM8 2.62L3.41 4.53 8 6.44l4.59-1.91L8 2.62zM2.75 5.57v5.58L7.25 13V7.42L2.75 5.57zm6 7.43 4.5-1.85V5.57L8.75 7.42V13z" fill={color} />
    ),
    tag: (
      <path fillRule="evenodd" clipRule="evenodd" d="M2 2.75A.75.75 0 0 1 2.75 2h5a.75.75 0 0 1 .53.22l5.5 5.5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-5.5-5.5A.75.75 0 0 1 2 7.75v-5zM5.5 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill={color} />
    ),
    snippet: (
      <>
        <path d="M4 4.5l-3 3.5 3 3.5" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 4.5l3 3.5-3 3.5" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 2l-3 12" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      </>
    ),
    'chevron-left': (
      <path d="M10.5 3L5.5 8l5 5" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    ),
    'chevron-down': (
      <path d="M3 5.5l5 5 5-5" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    ),
    'check-circle': (
      <>
        <circle cx="8" cy="8" r="7" fill="none" stroke={color} strokeWidth="1.3" />
        <path d="M5 8l2 2 4-4" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    'external-link': (
      <>
        <path d="M12 9v3.25a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V4.75a.75.75 0 0 1 .75-.75H7" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
        <path d="M10 2h4v4M14 2L7.5 8.5" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    settings: (
      <>
        <circle cx="8" cy="8" r="2.25" fill="none" stroke={color} strokeWidth="1.3" />
        <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      </>
    ),
    namespace: (
      <>
        <rect x="1.5" y="1.5" width="5" height="5" rx=".75" fill="none" stroke={color} strokeWidth="1.3" />
        <rect x="9.5" y="1.5" width="5" height="5" rx=".75" fill="none" stroke={color} strokeWidth="1.3" />
        <rect x="5.5" y="9.5" width="5" height="5" rx=".75" fill="none" stroke={color} strokeWidth="1.3" />
        <path d="M4 6.5v2.25c0 .414.336.75.75.75H5.5M12 6.5v2.25a.75.75 0 0 1-.75.75H10.5" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      </>
    ),
    close: (
      <path d="M4 4l8 8M12 4l-8 8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    ),
    plus: (
      <path d="M8 2.5v11M2.5 8h11" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    ),
    eye: (
      <>
        <path d="M8 4C4.5 4 1.7 7.1 1.1 7.8a.5.5 0 0 0 0 .4C1.7 8.9 4.5 12 8 12s6.3-3.1 6.9-3.8a.5.5 0 0 0 0-.4C14.3 7.1 11.5 4 8 4z" fill="none" stroke={color} strokeWidth="1.3" />
        <circle cx="8" cy="8" r="2" fill={color} />
      </>
    ),
    filter: (
      <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75zm2 5A.75.75 0 0 1 3.75 7h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 3 7.75zm3 5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75z" fill={color} />
    ),
    user: (
      <>
        <circle cx="8" cy="5" r="3" fill="none" stroke={color} strokeWidth="1.3" />
        <path d="M2 15c0-3.31 2.69-6 6-6s6 2.69 6 6" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      </>
    ),
    earth: (
      <>
        <circle cx="8" cy="8" r="6.25" fill="none" stroke={color} strokeWidth="1.3" />
        <ellipse cx="8" cy="8" rx="3" ry="6.25" fill="none" stroke={color} strokeWidth="1.3" />
        <path d="M2 8h12" stroke={color} strokeWidth="1.3" />
      </>
    ),
    'sort-desc': (
      <>
        <path d="M4 2v11M2 11l2 2 2-2" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 4h6M8 7h4.5M8 10h3" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      </>
    ),
    fork: (
      <>
        <path d="M5 2v4M11 2v4M8 10v4M5 6c0 2.2 1.3 4 3 4s3-1.8 3-4" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="5" cy="2" r="1" fill={color} />
        <circle cx="11" cy="2" r="1" fill={color} />
        <circle cx="8" cy="14" r="1" fill={color} />
      </>
    ),
    clock: (
      <>
        <circle cx="8" cy="8" r="6.25" fill="none" stroke={color} strokeWidth="1.3" />
        <path d="M8 4.5V8l2.5 1.5" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    chart: (
      <path d="M2 13h12M4 9v2M7 5v6M10 7v4M13 3v8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    ),
    inbox: (
      <>
        <path d="M2 10l2.5-7h7L14 10" fill="none" stroke={color} strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M2 10h3.5a1 1 0 0 1 1 1 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 0 1 1-1H14v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10z" fill="none" stroke={color} strokeWidth="1.3" />
      </>
    ),
    'book-open': (
      <>
        <path d="M8 4.25C8 4.25 6.25 3 3 3v9.5c3.25 0 5 1.25 5 1.25s1.75-1.25 5-1.25V3c-3.25 0-5 1.25-5 1.25z" fill="none" stroke={color} strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M8 4.25v9.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      </>
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      {icons[name] || null}
    </svg>
  );
}
