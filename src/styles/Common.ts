import { theme } from "./Theme";

type FontProps = {
  family?: string;
  weight?: number;
  color?: string;
  lineHeight?: number;
  Fmin: number;
  Fmax: number;
};

export const font = ({
  family,
  weight,
  color,
  lineHeight,
  Fmin,
  Fmax,
}: FontProps) => `
  font-family: ${family || "Fira-Code, monospace"};
  font-weight: ${weight || 400};
  color: ${color || theme.colors.primary};
  line-height: ${lineHeight || 1.3};
  font-size: calc( (100vw - 360px)/(1366 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`;
