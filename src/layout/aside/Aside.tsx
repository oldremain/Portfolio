import React from "react";
import { SocialLink } from "@/components/socialLink/SocialLink";
import { S } from "./Aside_Styles";

export const Aside: React.FC = () => {
  return (
    <S.Aside>
      <S.SocialLinksList>
        <S.SocialLinkItem>
          <SocialLink
            href="https://github.com/oldremain"
            icon="github"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          />
        </S.SocialLinkItem>
        <S.SocialLinkItem>
          <SocialLink
            href="https://www.linkedin.com/in/oldremain"
            icon="linkedin"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          />
        </S.SocialLinkItem>
      </S.SocialLinksList>
    </S.Aside>
  );
};
