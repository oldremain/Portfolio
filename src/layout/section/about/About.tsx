import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "@/components/FlexWrapper";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/Button";
import aboutImg from "@/assets/images/about-img.png";

export const About = () => {
  return (
    <StyledSection>
      <SectionTitle title="about me" />
      <FlexWrapper gap={20} justify="space-between">
        <StyledPresentation>
          <p>Hello, i’m Oleg!</p>
          <p>
            I’m a self-taught front-end developer based in Vitebsk, Belarus. I
            can develop responsive websites from scratch and raise them into
            modern user-friendly web experiences.
          </p>
          <p>
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
          <StyledButton>Read more {"->"}</StyledButton>
        </StyledPresentation>
        <Image src={aboutImg} alt="" />
      </FlexWrapper>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: var(--section-padding);
`;

const StyledPresentation = styled.div`
  max-width: 515px;
  font-family: monospace;
  text-align: start;
  p {
    margin-bottom: 30px;
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
`;
