import styled from "styled-components";
import { theme } from "@/styles/Theme";

const Footer = styled.footer`
  position: relative;
  padding: 22px 0;
  border-top: 1px solid ${theme.colors.primary};

  @media ${theme.media.tablet} {
    padding: 16px 0;
  }
`;

const AboutMe = styled.div`
  a {
    margin-bottom: 12px;
  }
  p {
    color: ${theme.colors.secondary};
  }

  @media ${theme.media.tablet} {
    a {
      margin-bottom: 8px;
    }
  }
`;

const SocialLinksTitle = styled.span`
  display: inline-block;
  margin-bottom: 12px;
  font-weight: 500;
  font-size: 22px;

  @media ${theme.media.tablet} {
    margin-bottom: 8px;
  }
`;

const SocialLinksList = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SocialLinkItem = styled.li`
  cursor: pointer;
`;

const Copyright = styled.small`
  display: block;
  margin-top: 40px;
  text-align: center;

  @media ${theme.media.tablet} {
    margin-top: 30px;
  }
`;

export const S = {
  Footer,
  AboutMe,
  SocialLinksTitle,
  SocialLinksList,
  SocialLinkItem,
  Copyright,
};
