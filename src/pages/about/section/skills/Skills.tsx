import React from "react";
import { S } from "./Skills_Styles";
import { Container } from "@/components/Container";
import { SkillBox } from "@/components/skillBox/SkillBox";
import { SectionTitle } from "@/components/SectionTitle";

export const Skills: React.FC = () => {
  return (
    <S.Section>
      <Container>
        <SectionTitle title="skills" $noLine />
        <S.SkillsWrapper $wrap="wrap" $grow={1} $gap={16}>
          <SkillBox title="Languages" skills={["TypeScript", "JavaScript"]} />
          <SkillBox title="Tools" skills={["VSCode", "Git", "Figma"]} />
          <SkillBox title="Frameworks" skills={["React", "Vue"]} />
          <SkillBox title="Other" skills={["HTML", "Css", "SCSS"]} />
        </S.SkillsWrapper>
      </Container>
    </S.Section>
  );
};
