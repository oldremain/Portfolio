import React from "react";
import { S } from "./Presentation_Styles";
import { FlexWrapper } from "@/components/FlexWrapper";
import { Container } from "@/components/Container";
import aboutImg from "@/assets/images/about-img.webp";
import DotsImg from "@/assets/images/presentation-dots.webp";
import RectImg from "@/assets/images/right-rect.webp";

export const Presentation: React.FC = () => {
  return (
    <S.Section>
      <Container>
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
          </S.Presentation>
          <S.Image src={aboutImg} alt="" />
        </FlexWrapper>
      </Container>
      <S.DotsImg src={DotsImg} />
      <S.RightRectImg src={RectImg} />
    </S.Section>
  );
};
