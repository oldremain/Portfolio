import { FlexWrapper } from "@/components/FlexWrapper";
import { theme } from "@/styles/Theme";
import styled from "styled-components";

const Section = styled.section`
  padding: ${theme.padding.section.desktop};

  @media ${theme.media.tablet} {
    padding: ${theme.padding.section.mobile};
  }
`;

const SkillsWrapper = styled(FlexWrapper)`
  margin-top: 30px;

  @media ${theme.media.tablet} {
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    margin-top: 0;
  }
`;

const Image = styled.img`
  width: 350px;
  height: 282px;
  object-fit: contain;

  @media ${theme.media.tablet} {
    display: none;
  }
`;

const SkillsGroup = styled.div`
  max-width: 196px;
  border: 1px solid ${theme.colors.primary};
`;

const GroupTitle = styled.h3`
  padding: 8px;
  border-bottom: 1px solid ${theme.colors.primary};
  font-weight: 600;
  color: ${theme.colors.secondary};

  @media ${theme.media.tablet} {
    padding: 6px;
  }
`;

const SkillsList = styled(FlexWrapper)`
  padding: 8px;

  @media ${theme.media.tablet} {
    padding: 6px;
    gap: 6px;
  }
`;

const SkillTitle = styled.span`
  font-size: 14px;
`;

export const S = {
  Section,
  SkillsWrapper,
  Image,
  SkillsGroup,
  GroupTitle,
  SkillsList,
  SkillTitle,
};
