import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "@/components/FlexWrapper";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { theme } from "@/styles/Theme";
import aboutImg from "@/assets/images/about-img.webp";
import leftRectImg from "@/assets/images/about-left-rect.webp";
import rightRectImg from "@/assets/images/about-right-rect-img.webp";

export const About = () => {
  return (
    <StyledSection id="about-me">
      <LeftRectImg src={leftRectImg} alt="" />
      <RightRectImg src={rightRectImg} alt="" />
      <Container>
        <SectionTitle title="about me" $lineMaxWidth="350px" />
        <FlexWrapper $gap={20} $justify="space-between">
          <StyledPresentation>
            <p>Hello, i’m Oleg!</p>
            <p>
              I’m a self-taught front-end developer based in Vitebsk, Belarus. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
            </p>
            <p>
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
            <StyledButton>Read more {"->"}</StyledButton>
          </StyledPresentation>
          <Image src={aboutImg} alt="" />
        </FlexWrapper>
      </Container>
    </StyledSection>
  );
};

const StyledSection = styled.section`
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

  @media ${theme.media.tablet} {
    display: none;
  }
`;

const RightRectImg = styled.img`
  position: absolute;
  right: 0;
  top: calc(180px + 50%);
  transform: translateY(-50%);

  @media ${theme.media.tablet} {
    display: none;
  }
`;

const StyledPresentation = styled.div`
  max-width: 515px;
  font-family: monospace;
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

const StyledButton = styled(Button)`
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
