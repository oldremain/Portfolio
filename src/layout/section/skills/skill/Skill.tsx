import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "@/components/FlexWrapper";
import { theme } from "@/styles/Theme";

type SkillProps = {
  title: string;
  skills: string[];
};

export const Skill = ({ title, skills }: SkillProps) => {
  return (
    <StyledSkill>
      <SkillTitle>{title}</SkillTitle>
      {skills.length && (
        <FlexWrapper className="skill-list" gap={8} wrap="wrap">
          {skills.map((skill, idx) => (
            <span key={idx}>{skill}</span>
          ))}
        </FlexWrapper>
      )}
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  max-width: 196px;
  border: 1px solid ${theme.colors.primary};
  .skill-list {
    padding: 8px;
  }
`;

const SkillTitle = styled.h3`
  padding: 8px;
  border-bottom: 1px solid ${theme.colors.primary};
  font-weight: 600;
  color: ${theme.colors.secondary};
`;
