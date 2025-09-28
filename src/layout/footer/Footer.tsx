import styled from "styled-components";
import { FlexWrapper } from "@/components/FlexWrapper";
import { Logo } from "@/components/logo/Logo";
import { Icon } from "@/components/icon/Icon";
import { Container } from "@/components/Container";
import { theme } from "@/styles/Theme";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <StyledFooter>
      <Container>
        <FlexWrapper $align="center" $justify="space-between">
          <AboutMe>
            <Logo />
            <p>Front-end developer</p>
          </AboutMe>
          <div>
            <SocialLinksTitle>Media</SocialLinksTitle>
            <SocialLinksList>
              <SocialLinkItem>
                <SocialLink>
                  <Icon
                    name="github"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  />
                </SocialLink>
              </SocialLinkItem>
              <SocialLinkItem>
                <SocialLink>
                  <Icon
                    name="linkedin"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  />
                </SocialLink>
              </SocialLinkItem>
            </SocialLinksList>
          </div>
        </FlexWrapper>
        <Copyright>© Copyright {year}. Made by Oleg</Copyright>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
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

const SocialLink = styled.a``;

const Copyright = styled.small`
  display: block;
  margin-top: 40px;
  text-align: center;

  @media ${theme.media.tablet} {
    margin-top: 30px;
  }
`;
