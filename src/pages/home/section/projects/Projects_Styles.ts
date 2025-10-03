import { FlexWrapper } from "@/components/FlexWrapper";
import { theme } from "@/styles/Theme";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  padding: ${theme.padding.section.desktop};

  @media ${theme.media.tablet} {
    ${FlexWrapper} {
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  @media ${theme.media.tablet} {
    padding: ${theme.padding.section.mobile};
  }
`;

const ProjectRectImg = styled.img`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  @media ${theme.media.desktop} {
    display: none;
  }
`;

export const S = {
  Section,
  ProjectRectImg,
  Image,
};
