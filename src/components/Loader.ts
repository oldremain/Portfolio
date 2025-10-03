import { theme } from "@/styles/Theme";
import styled, { keyframes } from "styled-components";

const load = keyframes`
  0% {
    background-size: 15% 100%, 15% 100%, 15% 100%;
  }
  33% {
    background-size: 15% 5%, 15% 100%, 15% 100%;
  }
  50% {
    background-size: 15% 100%, 15% 5%, 15% 100%;
  }
  66% {
    background-size: 15% 100%, 15% 100%, 15% 5%;
  }
  100% {
    background-size: 15% 100%, 15% 100%, 15% 100%;
  }
`;

export const Loader = styled.div`
  width: 20px;
  aspect-ratio: 1;
  --c: no-repeat linear-gradient(${theme.colors.accent} 0 0);
  background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
  background-size: 15% 100%;
  animation: ${load} 1s infinite linear;
`;
