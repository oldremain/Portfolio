import React from "react";
import { S } from "./SocialLink_Styles";
import { Icon } from "@/components/icon/Icon";

type SocialLinkProps = {
  href: string;
  icon: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  icon,
  width,
  height,
  viewBox,
}: SocialLinkProps) => {
  return (
    <S.SocialLink href={href}>
      <Icon name={icon} width={width} height={height} viewBox={viewBox} />
    </S.SocialLink>
  );
};
