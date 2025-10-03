import React from "react";
import styled, { css } from "styled-components";
import { theme } from "@/styles/Theme";

type SectionTitleProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  title?: string;
  $noLine?: boolean;
  $margin?: string;
  $lineMaxWidth?: string;
};

export const SectionTitle: React.FC<SectionTitleProps> = ({
  level = 2,
  title,
  $noLine,
  $margin = "0 0 20px 0",
  $lineMaxWidth = "150px",
}: SectionTitleProps) => {
  const tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <StyledSectionTitle
      as={tag}
      $margin={$margin}
      $lineMaxWidth={$lineMaxWidth}
      $noLine={$noLine}
    >
      {title}
    </StyledSectionTitle>
  );
};

const StyledSectionTitle = styled.h2<{
  $margin: string;
  $lineMaxWidth?: string;
  $noLine?: boolean;
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

  ${(props) =>
    props.$noLine
      ? ""
      : css`
          &::after {
            content: "";
            display: inline-block;
            height: 1px;
            width: 100%;
            max-width: ${props.$lineMaxWidth};
            margin-left: 16px;
            background-color: ${theme.colors.accent};
          }
        `}
`;
