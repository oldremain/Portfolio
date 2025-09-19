import React from "react";
import styled from "styled-components";
import { Logo } from "@/components/logo/Logo";
import { Menu } from "@/components/menu/Menu";
import { Container } from "@/components/Container";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Logo />
        <Menu />
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding-top: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
