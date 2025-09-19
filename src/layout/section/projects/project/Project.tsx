import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "@/components/FlexWrapper";
import { Button } from "@/components/Button";
import { theme } from "@/styles/Theme";

type ProjectProps = {
  img: string;
  technologies: string[];
  title: string;
  description: string;
};

export const Project = ({
  img,
  technologies,
  title,
  description,
}: ProjectProps) => {
  return (
    <StyledProject>
      <Image src={img} alt="" />
      <Technologies>
        {technologies.map((item, idx) => (
          <span key={idx}>{item}</span>
        ))}
      </Technologies>
      <StyledBody>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <FlexWrapper>
          <Button className="view-btn">
            Live <span>{"<~>"}</span>
          </Button>
        </FlexWrapper>
      </StyledBody>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  width: 100%;
  max-width: 332px;
  border: 1px solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  cursor: pointer;
  transition: all 0.2s ease;
  .view-btn {
    font-family: monospace;
    span {
      padding-left: 2px;
    }
  }
  &:hover {
    scale: 1.03;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Technologies = styled.div`
  padding: 8px;
  display: flex;
  gap: 8px;
  border-bottom: 1px solid ${theme.colors.primary};
`;

const StyledBody = styled.div`
  padding: 16px;
`;

const Title = styled.div`
  margin-bottom: 16px;
  color: ${theme.colors.secondary};
  font-weight: 500;
`;

const Description = styled.h3`
  margin-bottom: 16px;
`;
