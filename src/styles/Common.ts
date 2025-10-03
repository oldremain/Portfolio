import { theme } from "./Theme";

type FontProps = {
  weight?: number;
  color?: string;
  lineHeight?: number;
  Fmin?: number;
  Fmax?: number;
};

export const font = ({
  weight,
  color,
  lineHeight,
  Fmin = 16,
  Fmax = 16,
}: FontProps) => `
  font-family: 'Fira Code', monospace;
  font-weight: ${weight || 400};
  color: ${color || theme.colors.primary};
  line-height: ${lineHeight || 1.3};
  font-size: calc( (100vw - 360px)/(1366 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`;
