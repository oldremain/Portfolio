import styled from "styled-components";
import { theme } from "@/styles/Theme";
import { Container } from "@/components/Container";
import { FlexWrapper } from "@/components/FlexWrapper";
import { Icon } from "@/components/icon/Icon";
import quoteRect from "@/assets/images/quote-rect.webp";

export const Quote = () => {
  return (
    <StyledSection>
      <Container>
        <FlexWrapper $direction="column" $align="center">
          <StyledQuote>
            <Icon
              name="quoteStart"
              width="41"
              height="28"
              viewBox="0 0 41 28"
            />
            Simplicity is the soul of efficiency
            <Icon name="quoteEnd" width="41" height="28" viewBox="0 0 41 28" />
          </StyledQuote>
          <Author>- Austin Freeman</Author>
        </FlexWrapper>
        <QuoteRectImg src={quoteRect} alt="" />
      </Container>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  position: relative;
  padding-top: 112px;
  padding-bottom: 20px;

  ${FlexWrapper} {
    width: 100%;
    max-width: 545px;
    margin: 0 auto;
    color: ${theme.colors.secondary};
    font-family: monospace;
  }

  @media ${theme.media.tablet} {
    padding-top: 70px;
    padding-bottom: 30px;
  }
`;

const StyledQuote = styled.div`
  position: relative;
  padding: 16px 32px;
  margin-left: auto;
  font-size: 22px;
  font-weight: 500;
  border: 1px solid ${theme.colors.primary};

  svg {
    position: absolute;
    background-color: ${theme.colors.bg};
    width: 35px;
    &:first-of-type {
      top: -15px;
      left: 12px;
    }
    &:last-of-type {
      bottom: -15px;
      right: 12px;
    }
  }

  @media ${theme.media.tablet} {
    padding: 10px 16px;
    text-align: center;
    font-size: 18px;
    line-height: 1.3;

    svg {
      width: 25px;
    }
  }
`;

const Author = styled.div`
  margin-left: auto;
  padding: 16px 32px;
  font-size: 18px;
  border: 1px solid ${theme.colors.primary};
  border-top: 0;

  @media ${theme.media.tablet} {
    padding: 10px 16px;
    text-align: center;
    font-size: 16px;
    line-height: 1.3;
  }
`;

const QuoteRectImg = styled.img`
  position: absolute;
  top: 130px;
  right: 0;

  @media ${theme.media.tablet} {
    display: none;
  }
`;
