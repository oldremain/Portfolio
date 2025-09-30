import { useState } from "react";
import { Icon } from "@/components/icon/Icon";
import { FlexWrapper } from "@/components/FlexWrapper";
import { Logo } from "@/components/logo/Logo";
import { S } from "@/layout/header/Header_Styles";
import { DesktopMenu } from "../desktopMenu/DesktopMenu";

export const MobileMenu: React.FC = () => {
  const [open, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!open);

  return (
    <S.MobileMenu>
      {!open && (
        <S.ActionButton type="button" onClick={toggleMenu}>
          <Icon name="burgerMenu" width="24" height="24" viewBox="0 0 24 24" />
        </S.ActionButton>
      )}
      <S.Overlay $open={open}>
        <FlexWrapper $align="center" $justify="space-between" $gap={10}>
          <Logo />
          <S.ActionButton onClick={toggleMenu}>
            <Icon name="closeMenu" width="24" height="24" viewBox="0 0 24 24" />
          </S.ActionButton>
        </FlexWrapper>
        <S.MobileNavLinks>
          <DesktopMenu />
        </S.MobileNavLinks>
        <S.SocialLinks>
          <li>
            <S.SocialLink href="">
              <Icon name="github" width="100%" height="100%" />
            </S.SocialLink>
          </li>
          <li>
            <S.SocialLink href="">
              <Icon name="linkedin" width="100%" height="100%" />
            </S.SocialLink>
          </li>
        </S.SocialLinks>
      </S.Overlay>
    </S.MobileMenu>
  );
};
