import { FlexWrapper } from "@/components/FlexWrapper";
import { theme } from "@/styles/Theme";
import styled from "styled-components";

const SkillBox = styled.div`
  max-width: 196px;
  border: 1px solid ${theme.colors.primary};
`;

const BoxTitle = styled.h3`
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
  SkillBox,
  BoxTitle,
  SkillsList,
  SkillTitle,
};
