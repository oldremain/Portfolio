import styled from "styled-components";
import { FlexWrapper } from "@/components/FlexWrapper";
import { theme } from "@/styles/Theme";

type SkillProps = {
  title: string;
  skills: string[];
};

export const SkillsGroup = ({ title, skills }: SkillProps) => {
  return (
    <StyledSkillsGroup>
      <GroupTitle>{title}</GroupTitle>
      {skills.length && (
        <SkillsList $gap={8} $wrap="wrap">
          {skills.map((skill, idx) => (
            <SkillTitle key={idx}>{skill}</SkillTitle>
          ))}
        </SkillsList>
      )}
    </StyledSkillsGroup>
  );
};

const StyledSkillsGroup = styled.div`
  max-width: 196px;
  border: 1px solid ${theme.colors.primary};
`;

const GroupTitle = styled.h3`
  padding: 8px;
  border-bottom: 1px solid ${theme.colors.primary};
  font-weight: 600;
  color: ${theme.colors.secondary};

  @media ${theme.media.tablet} {
    padding: 6px;
  }
`;

const SkillsList = styled(FlexWrapper)`
  padding: 8px;

  @media ${theme.media.tablet} {
    padding: 6px;
    gap: 6px;
  }
`;

const SkillTitle = styled.span`
  font-size: 14px;
`;
