import React from "react";
import { S } from "../Skills_Styles";

type SkillProps = {
  title: string;
  skills: string[];
};

export const SkillsGroup: React.FC<SkillProps> = ({
  title,
  skills,
}: SkillProps) => {
  return (
    <S.SkillsGroup>
      <S.GroupTitle>{title}</S.GroupTitle>
      {skills.length && (
        <S.SkillsList $gap={8} $wrap="wrap">
          {skills.map((skill, idx) => (
            <S.SkillTitle key={idx}>{skill}</S.SkillTitle>
          ))}
        </S.SkillsList>
      )}
    </S.SkillsGroup>
  );
};
