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

export const S = {
  Section,
  SkillsWrapper,
  Image,
};
