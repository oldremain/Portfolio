import styled from "styled-components";
import { theme } from "@/styles/Theme";
import { font } from "@/styles/Common";
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
  padding-top: 98px;
  padding-bottom: 20px;

  ${FlexWrapper} {
    width: 100%;
    max-width: 555px;
    margin: 0 auto;
    color: ${theme.colors.secondary};
    justify-content: center;
  }

  @media ${theme.media.tablet} {
    padding-top: 70px;
    padding-bottom: 30px;

    ${FlexWrapper} {
      max-width: 425px;
    }
  }
`;

const StyledQuote = styled.div`
  ${font({
    weight: 500,
    Fmin: 18,
    Fmax: 22,
    lineHeight: 1.3,
    color: theme.colors.secondary,
  })}
  position: relative;
  padding: 16px 32px;
  margin-left: auto;
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

    svg {
      width: 25px;
    }
  }
`;

const Author = styled.div`
  ${font({ Fmin: 16, Fmax: 18, color: theme.colors.secondary })}
  margin-left: auto;
  padding: 16px 32px;
  border: 1px solid ${theme.colors.primary};
  border-top: 0;

  @media ${theme.media.tablet} {
    padding: 10px 16px;
    text-align: center;
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
