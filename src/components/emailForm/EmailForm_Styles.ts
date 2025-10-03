import styled from "styled-components";
import { FlexWrapper } from "@/components/FlexWrapper";
import { theme } from "@/styles/Theme";

const Form = styled.form`
  max-width: 700px;
  display: grid;
  gap: 24px;

  ${FlexWrapper} {
    margin-top: 0 !important;
  }

  button {
    max-width: 200px;
  }

  @media ${theme.media.tablet} {
    max-width: 100%;
    gap: 20px;
    button {
      max-width: 100%;
    }
  }
`;

export const S = {
  Form,
};
