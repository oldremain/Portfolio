import styled from "styled-components";
import { theme } from "@/styles/Theme";

const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 22px;
  height: 32px;
  z-index: 4;

  @media ${theme.media.tablet} {
    display: none;
  }
`;

const SocialLinksList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  margin-right: 12px;
  &::before {
    content: "";
    display: inline-block;
    height: 200px;
    width: 1px;
    background-color: ${theme.colors.primary};
  }
`;

const SocialLinkItem = styled.li`
  cursor: pointer;
`;

const SocialLink = styled.a``;

export const S = {
  Aside,
  SocialLinksList,
  SocialLinkItem,
  SocialLink,
};
