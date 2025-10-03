import React from "react";
import { S } from "./SkillBox_Styles";

type SkillProps = {
  title: string;
  skills: string[];
};

export const SkillBox: React.FC<SkillProps> = ({
  title,
  skills,
}: SkillProps) => {
  return (
    <S.SkillBox>
      <S.BoxTitle>{title}</S.BoxTitle>
      {skills.length && (
        <S.SkillsList $gap={8} $wrap="wrap">
          {skills.map((skill, idx) => (
            <S.SkillTitle key={idx}>{skill}</S.SkillTitle>
          ))}
        </S.SkillsList>
      )}
    </S.SkillBox>
  );
};
