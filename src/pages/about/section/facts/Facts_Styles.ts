import { FlexWrapper } from "@/components/FlexWrapper";
import { theme } from "@/styles/Theme";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  padding: ${theme.padding.section.desktop};

  @media ${theme.media.tablet} {
    padding: ${theme.padding.section.mobile};
  }
`;

const ContentWrapper = styled(FlexWrapper)`
  margin-top: 30px;
`;

const FactsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
`;

const Fact = styled.div`
  padding: 8px;
  border: 1px solid ${theme.colors.primary};
  font-size: 14px;
  width: fit-content;
  transition: all 0.2s ease;

  @media (hover) {
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const IconWrapper = styled.div`
  margin: auto;
  width: 180px;
  height: 160px;
  display: flex;
  justify-content: space-between;

  svg:last-child {
    align-self: flex-end;
  }

  @media ${theme.media.tablet} {
    display: none;
  }
`;

const DotsImg = styled.img`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(20%);

  @media ${theme.media.desktop} {
    display: none;
  }
`;

const LeftRectImg = styled.img`
  position: absolute;
  left: 0;
  top: 0;

  @media ${theme.media.desktop} {
    display: none;
  }
`;

export const S = {
  Section,
  ContentWrapper,
  FactsWrapper,
  Fact,
  IconWrapper,
  DotsImg,
  LeftRectImg,
};
