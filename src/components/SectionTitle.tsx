import styled from "styled-components";

type SectionTitleProps = {
  title?: string;
  $margin?: string;
  $lineMaxWidth?: string;
};

export const SectionTitle = ({
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
  font-family: monospace;
  font-size: 28px;
  font-weight: 500;
  color: var(--color-secondary);
  &::before {
    content: "#";
    color: var(--color-accent);
  }
  &::after {
    content: "";
    display: inline-block;
    height: 1px;
    width: 100%;
    max-width: ${(props) => props.$lineMaxWidth};
    margin-left: 16px;
    background-color: var(--color-accent);
  }
`;
