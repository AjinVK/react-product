interface IconProps {
    color?: string;
    size?: number;
}

export const EyelashEye = ({ color = '#320881', size = 20 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
            d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12Z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="3" fill={color} />
        <path
            d="M4 6L3 4M7 4L6.5 2M10 3L9.8 1M14 3l.2-2M17 4l.5-2M20 6l1-2"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
        />
    </svg>
);

export const EyelashEyeOff = ({ color = '#320881', size = 20 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
            d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12Z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path d="M3 3L21 21" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
);
