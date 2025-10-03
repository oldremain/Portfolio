import { FlexWrapper } from "@/components/FlexWrapper";
import { theme } from "@/styles/Theme";
import styled from "styled-components";

const Section = styled.section`
  padding: ${theme.padding.section.desktop};

  @media ${theme.media.tablet} {
    padding: ${theme.padding.section.mobile};

    ${FlexWrapper} {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

export const S = {
  Section,
};
