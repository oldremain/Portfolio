import React from "react";
import { S } from "@/layout/header/Header_Styles";

const links = [
  { label: "home", path: "/" },
  { label: "works", path: "#works" },
  { label: "about-me", path: "#about-me" },
  { label: "contacts", path: "#contacts" },
];

type MenuProps = React.HTMLAttributes<HTMLDivElement>;

export const DesktopMenu: React.FC<MenuProps> = (props: MenuProps) => {
  return (
    <S.DesktopMenu {...props}>
      <S.MenuList>
        {links.map((it) => (
          <li key={it.label}>
            <S.MenuLink href={it.path}>
              <S.HashTag>#</S.HashTag>
              {it.label}
            </S.MenuLink>
          </li>
        ))}
      </S.MenuList>
    </S.DesktopMenu>
  );
};
