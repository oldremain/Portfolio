import React from "react";
import spriteImg from "@/assets/images/icons-sprite.svg";

type IconProps = React.SVGAttributes<SVGElement> & {
  name: string;
  width?: string;
  height?: string;
  viewBox?: string;
  color?: string;
};

export const Icon: React.FC<IconProps> = ({
  name,
  width = "40",
  height = "40",
  viewBox = "0 0 40 40",
  color = "currentColor",
  ...rest
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      style={{ color }}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <use xlinkHref={`${spriteImg}#${name}`} />
    </svg>
  );
};
