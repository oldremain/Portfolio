import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Icon } from "@/components/icon/Icon";
import { S } from "./Facts_Styles";
import DotsImg from "@/assets/images/fun-facts-right-rect.webp";
import RectImg from "@/assets/images/fun-facts-left-rect.webp";

const funFacts = [
  "I can drink coffee at night and still fall asleep instantly.",
  "I’ve broken more headphones than I’d like to admit.",
  "I always forget movie plots but remember random lines.",
  "I love exploring new tools and frameworks just for fun.",
  "My playlists are pure chaos: jazz, metal, and game soundtracks.",
  "My favorite movie is Inglourious Basterds by Tarantino.",
  "I have been to Egypt, Germany, and the Netherlands.",
];

export const Facts: React.FC = () => {
  return (
    <S.Section>
      <Container>
        <SectionTitle title="my-fun-facts" $noLine />
        <S.ContentWrapper
          $wrap="wrap"
          $align="center"
          $justify="space-between"
          $gap={16}
        >
          <S.FactsWrapper>
            {funFacts.map((it) => (
              <S.Fact key={it}>{it}</S.Fact>
            ))}
          </S.FactsWrapper>
          <S.IconWrapper>
            <Icon name="boxCircle" />
            <Icon
              name="factsContentRect"
              width="114"
              height="114"
              viewBox="0 0 114 114"
            />
          </S.IconWrapper>
        </S.ContentWrapper>
      </Container>
      <S.LeftRectImg src={RectImg} />
      <S.DotsImg src={DotsImg} />
    </S.Section>
  );
};
