import React from "react";
import styled from "styled-components";

const links = [
  { label: "home", path: "/" },
  { label: "works", path: "#works" },
  { label: "about-me", path: "#about-me" },
  { label: "contacts", path: "#contacts" },
];

type MenuProps = React.HTMLAttributes<HTMLDivElement>;

export const Menu = (props: MenuProps) => {
  return (
    <StyledMenu {...props}>
      <MenuList>
        {links.map((it) => (
          <li key={it.label}>
            <MenuLink href={it.path}>
              <HashTag>#</HashTag>
              {it.label}
            </MenuLink>
          </li>
        ))}
      </MenuList>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav``;

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
