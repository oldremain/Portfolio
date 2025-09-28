import React from "react";
import { Icon } from "@/components/icon/Icon";
import { S } from "./Aside_Styles";

export const Aside: React.FC = () => {
  return (
    <S.Aside>
      <S.SocialLinksList>
        <S.SocialLinkItem>
          <S.SocialLink>
            <Icon name="github" width="32" height="32" viewBox="0 0 32 32" />
          </S.SocialLink>
        </S.SocialLinkItem>
        <S.SocialLinkItem>
          <S.SocialLink>
            <Icon name="linkedin" width="32" height="32" viewBox="0 0 32 32" />
          </S.SocialLink>
        </S.SocialLinkItem>
      </S.SocialLinksList>
    </S.Aside>
  );
};
