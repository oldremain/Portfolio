import React from "react";
import styled from "styled-components";
import { theme } from "@/styles/Theme";
import { Logo } from "@/components/logo/Logo";
import { Menu } from "@/components/menu/Menu";
import { Container } from "@/components/Container";
import { FlexWrapper } from "@/components/FlexWrapper";
import { MobileMenu } from "@/components/menu/mobileMenu/MobileMenu";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper $align="center" $justify="space-between">
          <Logo />
          <NavLinks />
          <MobileMenu />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  background-color: ${theme.colors.bg};
`;

const NavLinks = styled(Menu)`
  @media ${theme.media.tablet} {
    display: none;
  }
`;
