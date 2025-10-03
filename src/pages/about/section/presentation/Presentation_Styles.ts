import { theme } from "@/styles/Theme";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  padding: ${theme.padding.section.desktop};

  @media ${theme.media.tablet} {
    padding: ${theme.padding.section.mobile};
  }
`;

const Presentation = styled.div`
  max-width: 515px;
  font-size: 14px;
  text-align: start;
  p {
    margin-bottom: 30px;
  }

  @media ${theme.media.tablet} {
    p {
      margin-bottom: 0;
    }
  }
`;

const Image = styled.img`
  margin-top: -70px;
  max-width: 345px;
  height: 410px;
  object-fit: cover;

  @media ${theme.media.tablet} {
    display: none;
  }
`;

const DotsImg = styled.img`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);

  @media ${theme.media.desktop} {
    display: none;
  }
`;

const RightRectImg = styled.img`
  position: absolute;
  right: 0;

  @media ${theme.media.desktop} {
    display: none;
  }
`;

export const S = {
  Section,
  Presentation,
  Image,
  DotsImg,
  RightRectImg,
};
