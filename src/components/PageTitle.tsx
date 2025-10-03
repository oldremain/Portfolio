import React from "react";
import styled from "styled-components";
import { theme } from "@/styles/Theme";
import { font } from "@/styles/Common";

type PageTitleProps = {
  title: string;
  subtitle: string;
};

export const PageTitle: React.FC<PageTitleProps> = ({
  title,
  subtitle,
}: PageTitleProps) => {
  return (
    <StyledPageTitle>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </StyledPageTitle>
  );
};

const StyledPageTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-size: 28px;
  font-weight: 500;
  color: ${theme.colors.secondary};
`;

const Title = styled.h2`
  ${font({ weight: 500, Fmax: 32, Fmin: 28 })}
  color: ${theme.colors.secondary};
  &::before {
    content: "/";
    color: ${theme.colors.accent};
    display: inline-block;
    margin-right: 2px;
  }
`;

const Subtitle = styled.span`
  ${font({ Fmax: 16 })}
  color: ${theme.colors.primary};
`;
