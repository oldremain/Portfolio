import React from "react";
import styled from "styled-components";
import { theme } from "@/styles/Theme";
import { Loader } from "./Loader";

type ButtonProps = React.ComponentProps<typeof StyledButton>;

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <StyledButton {...props}>
      {props.disabled ? <Loader /> : props.children}
    </StyledButton>
  );
};

export const StyledButton = styled.button.attrs(({ type }) => ({
  type: type || "button",
}))`
  padding: 8px 16px;
  min-height: 42px;
  display: flex;
  justify-content: center;
  font-weight: 500;
  color: ${theme.colors.secondary};
  border: 1px solid ${theme.colors.accent};
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: #c778dd20;
  }
  &:active {
    background-color: #c778dd10;
  }
`;
