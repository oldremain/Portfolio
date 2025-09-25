import styled from "styled-components";
import { theme } from "@/styles/Theme";

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  min-height: 100%;
  margin: 0 auto;
  padding: 0 15px;

  @media ${theme.media.tablet} {
    max-width: 840px;
  }
`;
