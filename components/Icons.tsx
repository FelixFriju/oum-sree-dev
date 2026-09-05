type IconProps = { size?: number; className?: string };

const Svg = ({ children, size = 20, className }: IconProps & { children: React.ReactNode }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
);

export const ArrowUpRight = (props: IconProps) => <Svg {...props}><path d="M7 17 17 7" /><path d="M7 7h10v10" /></Svg>;
export const Menu = (props: IconProps) => <Svg {...props}><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></Svg>;
export const Close = (props: IconProps) => <Svg {...props}><path d="m6 6 12 12" /><path d="m18 6-12 12" /></Svg>;
export const WhatsApp = ({ size = 20, className }: IconProps) => <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.51 0 .17 5.34.17 11.91c0 2.1.55 4.15 1.6 5.95L.08 24l6.3-1.65a11.91 11.91 0 0 0 5.69 1.45h.01c6.56 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.16-3.47-8.41ZM12.08 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.23-.38a9.91 9.91 0 1 1 8.37 4.64Zm5.43-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.38-1.48a8.96 8.96 0 0 1-1.66-2.07c-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.08-.8.38-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.07 4.49.7.3 1.25.49 1.68.63.7.22 1.33.19 1.83.12.56-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" /></svg>;
export const Instagram = ({ size = 20, className }: IconProps) => <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>;
export const Facebook = ({ size = 20, className }: IconProps) => <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v4h4v-4h3.2l.8-4H13V9c0-.67.33-1 1-1Z" /></svg>;
