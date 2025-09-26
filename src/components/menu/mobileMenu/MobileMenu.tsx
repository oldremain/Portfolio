import { useState } from "react";
import styled from "styled-components";
import { theme } from "@/styles/Theme";
import { Icon } from "@/components/icon/Icon";
import { FlexWrapper } from "@/components/FlexWrapper";
import { Logo } from "@/components/logo/Logo";
import { Menu } from "../Menu";

export const MobileMenu = () => {
  const [open, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!open);

  return (
    <StyledMenu>
      {!open && (
        <ActionButton type="button" onClick={toggleMenu}>
          <Icon name="burgerMenu" width="24" height="24" viewBox="0 0 24 24" />
        </ActionButton>
      )}
      <Overlay $open={open}>
        <FlexWrapper $align="center" $justify="space-between" $gap={10}>
          <Logo />
          <ActionButton onClick={toggleMenu}>
            <Icon name="closeMenu" width="24" height="24" viewBox="0 0 24 24" />
          </ActionButton>
        </FlexWrapper>
        <NavLinks />
        <SocialLinks>
          <li>
            <SocialLink href="">
              <Icon name="github" width="100%" height="100%" />
            </SocialLink>
          </li>
          <li>
            <SocialLink href="">
              <Icon name="linkedin" width="100%" height="100%" />
            </SocialLink>
          </li>
        </SocialLinks>
      </Overlay>
    </StyledMenu>
  );
};

const StyledMenu = styled.div`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }
`;

const ActionButton = styled.button.attrs({
  type: "button",
})`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.primary};
`;

const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  background-color: rgba(41, 43, 51, 0.99);
  transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(100%)")};
  transition: 0.3s;

  ${FlexWrapper} {
    background-color: ${theme.colors.bg};
  }
`;

const NavLinks = styled(Menu)`
  margin-top: 47px;
  font-size: 30px;
  ul {
    flex-direction: column;
  }
`;

const SocialLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: auto;
`;

const SocialLink = styled.a`
  display: inline-block;
  width: 64px;
  height: 64px;
`;
