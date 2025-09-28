import { FlexWrapper } from "@/components/FlexWrapper";
import { theme } from "@/styles/Theme";
import styled from "styled-components";

const Header = styled.header`
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  background-color: ${theme.colors.bg};
`;

const DesktopMenu = styled.nav``;

const MenuList = styled.ul`
  display: flex;
  gap: 32px;
`;

const MenuLink = styled.a`
  color: #abb2bf;
  transition: all 0.2s ease;
  &:hover {
    color: #ffffff;
  }
  &:active {
    font-weight: 500;
  }
`;

const HashTag = styled.span`
  padding-right: 2px;
  color: #c778dd;
  transition: all 0.2s ease;
  &:active {
    font-weight: 500;
  }
`;

const MobileMenu = styled.div``;

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

const NavLinks = styled(DesktopMenu)`
  margin-top: 47px;
  font-size: 26px;
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
  width: 56px;
  height: 56px;
`;

export const S = {
  Header,
  DesktopMenu,
  MenuList,
  MenuLink,
  HashTag,
  MobileMenu,
  ActionButton,
  Overlay,
  NavLinks,
  SocialLinks,
  SocialLink,
};
