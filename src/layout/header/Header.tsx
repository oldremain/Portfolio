import React, { useEffect, useState } from "react";
import { Logo } from "@/components/logo/Logo";
import { DesktopMenu } from "@/layout/header/headerMenu/desktopMenu/DesktopMenu";
import { MobileMenu } from "@/layout/header/headerMenu/mobileMenu/MobileMenu";
import { Container } from "@/components/Container";
import { FlexWrapper } from "@/components/FlexWrapper";
import { S } from "./Header_Styles";

export const Header: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 993;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <S.Header>
      <Container>
        <FlexWrapper $align="center" $justify="space-between">
          <Logo />
          {width < breakpoint ? <MobileMenu /> : <DesktopMenu />}
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
