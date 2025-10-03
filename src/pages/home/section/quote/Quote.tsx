import React from "react";
import { Container } from "@/components/Container";
import { FlexWrapper } from "@/components/FlexWrapper";
import { Icon } from "@/components/icon/Icon";
import { S } from "./Quote_Styles";
import quoteRect from "@/assets/images/quote-rect.webp";

export const Quote: React.FC = () => {
  return (
    <S.Section>
      <Container>
        <FlexWrapper $direction="column" $align="center">
          <S.Quote>
            <Icon
              name="quoteStart"
              width="41"
              height="28"
              viewBox="0 0 41 28"
            />
            Simplicity is the soul of efficiency
            <Icon name="quoteEnd" width="41" height="28" viewBox="0 0 41 28" />
          </S.Quote>
          <S.Author>- Austin Freeman</S.Author>
        </FlexWrapper>
        <S.QuoteRectImg src={quoteRect} alt="" />
      </Container>
    </S.Section>
  );
};
