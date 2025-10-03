import React from "react";
import { S } from "@/layout/header/Header_Styles";

const links = [
  { label: "home", path: "/" },
  { label: "works", path: "/works" },
  { label: "about-me", path: "/about" },
  { label: "contacts", path: "/contacts" },
];

type MenuProps = {
  onClick?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

export const DesktopMenu: React.FC<MenuProps> = (props: MenuProps) => {
  return (
    <S.Menu {...props}>
      <S.MenuList>
        {links.map((it) => (
          <li key={it.label}>
            <S.MenuLink to={it.path} onClick={props.onClick}>
              <S.HashTag>#</S.HashTag>
              {it.label}
            </S.MenuLink>
          </li>
        ))}
      </S.MenuList>
    </S.Menu>
  );
};
