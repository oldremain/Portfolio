import React from "react";
import { FlexWrapper } from "@/components/FlexWrapper";
import { Logo } from "@/components/logo/Logo";
import { Container } from "@/components/Container";
import { SocialLink } from "@/components/socialLink/SocialLink";
import { S } from "./Footer_Styles";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <S.Footer>
      <Container>
        <FlexWrapper $align="center" $justify="space-between">
          <S.AboutMe>
            <Logo />
            <p>Front-end developer</p>
          </S.AboutMe>
          <div>
            <S.SocialLinksTitle>Media</S.SocialLinksTitle>
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
          </div>
        </FlexWrapper>
        <S.Copyright>© Copyright {year}. Made by Oleg</S.Copyright>
      </Container>
    </S.Footer>
  );
};
