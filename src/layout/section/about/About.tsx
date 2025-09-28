import React from "react";
import { FlexWrapper } from "@/components/FlexWrapper";
import { SectionTitle } from "@/components/SectionTitle";
import { Container } from "@/components/Container";
import { S } from "./About_Styles";
import aboutImg from "@/assets/images/about-img.webp";
import leftRectImg from "@/assets/images/about-left-rect.webp";
import rightRectImg from "@/assets/images/about-right-rect-img.webp";

export const About: React.FC = () => {
  return (
    <S.Section id="about-me">
      <S.LeftRectImg src={leftRectImg} alt="" />
      <S.RightRectImg src={rightRectImg} alt="" />
      <Container>
        <SectionTitle title="about me" $lineMaxWidth="350px" />
        <FlexWrapper $gap={20} $justify="space-between">
          <S.Presentation>
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
            <S.LinkButton>Read more {"->"}</S.LinkButton>
          </S.Presentation>
          <S.Image src={aboutImg} alt="" />
        </FlexWrapper>
      </Container>
    </S.Section>
  );
};
