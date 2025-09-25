import styled from "styled-components";
import { Icon } from "@/components/icon/Icon";
import { theme } from "@/styles/Theme";

export const Aside = () => {
  return (
    <StyledAside>
      <SocialLinksList>
        <SocialLinkItem>
          <SocialLink>
            <Icon name="github" width="32" height="32" viewBox="0 0 32 32" />
          </SocialLink>
        </SocialLinkItem>
        <SocialLinkItem>
          <SocialLink>
            <Icon name="linkedin" width="32" height="32" viewBox="0 0 32 32" />
          </SocialLink>
        </SocialLinkItem>
      </SocialLinksList>
    </StyledAside>
  );
};

const StyledAside = styled.aside`
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
