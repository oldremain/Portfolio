import styled from "styled-components";

type ButtonProps = React.ComponentProps<typeof StyledButton>;

export const Button = (props: ButtonProps) => {
  return <StyledButton {...props} />;
};

export const StyledButton = styled.a`
  padding: 8px 16px;
  font-weight: 500;
  color: var(--color-secondary);
  border: 1px solid var(--color-accent);
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: #c778dd20;
  }
  &:active {
    background-color: #c778dd10;
  }
`;
