import { Button } from "@/components/Button";
import { theme } from "@/styles/Theme";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  padding: ${theme.padding.section.desktop};

  @media ${theme.media.tablet} {
    padding: ${theme.padding.section.mobile};

    h2 {
      white-space: nowrap;
    }
  }
`;

const LeftRectImg = styled.img`
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
  top: calc(180px + 50%);
  transform: translateY(-50%);

  @media ${theme.media.desktop} {
    display: none;
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
      margin-bottom: 20px;
    }
  }
`;

const LinkButton = styled(Button)`
  display: inline-block;
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

export const S = {
  Section,
  LeftRectImg,
  RightRectImg,
  Presentation,
  LinkButton,
  Image,
};
