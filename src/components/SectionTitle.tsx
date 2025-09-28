import React from "react";
import styled from "styled-components";
import { theme } from "@/styles/Theme";

type SectionTitleProps = {
  title?: string;
  $margin?: string;
  $lineMaxWidth?: string;
};

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  $margin = "0 0 20px 0",
  $lineMaxWidth = "150px",
}: SectionTitleProps) => {
  return (
    <StyledSectionTitle $margin={$margin} $lineMaxWidth={$lineMaxWidth}>
      {title}
    </StyledSectionTitle>
  );
};

const StyledSectionTitle = styled.h2<{
  $margin: string;
  $lineMaxWidth?: string;
}>`
  display: flex;
  align-items: center;
  gap: 2px;
  margin: ${(props) => props.$margin};
  font-size: 28px;
  font-weight: 500;
  color: ${theme.colors.secondary};
  &::before {
    content: "#";
    color: ${theme.colors.accent};
  }
  &::after {
    content: "";
    display: inline-block;
    height: 1px;
    width: 100%;
    max-width: ${(props) => props.$lineMaxWidth};
    margin-left: 16px;
    background-color: ${theme.colors.accent};
  }
`;
