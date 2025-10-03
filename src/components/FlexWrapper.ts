import styled from "styled-components";

type FlexWrapperProps = {
  $direction?: "column" | "column-reverse" | "row" | "row-reverse";
  $align?: "center" | "flex-start" | "flex-end";
  $justify?: "center" | "space-around" | "space-between" | "start" | "end";
  $wrap?: "wrap" | "nowrap";
  $gap?: number;
  $grow?: number;
  $margin?: string;
};

export const FlexWrapper = styled.div<FlexWrapperProps>`
  display: flex;
  flex-direction: ${(props) => props.$direction || "row"};
  align-items: ${(props) => props.$align || "flex-start"};
  justify-content: ${(props) => props.$justify || "start"};
  flex-wrap: ${(props) => props.$wrap || "nowrap"};
  gap: ${(props) => props.$gap || 0}px;
  flex-grow: ${(props) => props.$grow || 0};
  margin: ${(props) => props.$margin || 0};
`;
