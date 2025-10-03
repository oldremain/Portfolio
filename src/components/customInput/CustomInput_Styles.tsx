import { theme } from "@/styles/Theme";
import styled from "styled-components";

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Label = styled.label`
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 4px;
  pointer-events: none;
  background-color: ${theme.colors.bg};
  border-radius: 4px;
  transition: all 0.2s ease;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  background-color: ${theme.colors.bg};
  border: 1px solid ${theme.colors.primary};
  font-weight: 400;
  font-size: 16px;
  color: ${theme.colors.secondary};
  outline: none;
  transition: all 0.2s ease;

  &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
    top: 0;
    font-size: 14px;
  }

  &:focus-visible {
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 16px rgba(199, 120, 222, 0.6);
    /* &::placeholder {
      opacity: 0.5;
    } */
  }

  &:disabled {
    opacity: 0.3;
  }

  &::placeholder {
    opacity: 0;
    font-size: 12px;
  }
`;

export const S = {
  InputWrapper,
  Input,
  Label,
};
