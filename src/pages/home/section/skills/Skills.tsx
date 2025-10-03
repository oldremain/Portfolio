import React from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { FlexWrapper } from "@/components/FlexWrapper";
import { Container } from "@/components/Container";
import { SkillBox } from "@/components/skillBox/SkillBox";
import { S } from "./Skills_Styles";
import skillsImg from "@/assets/images/skills-img.webp";

export const Skills: React.FC = () => {
  return (
    <S.Section>
      <Container>
        <SectionTitle title="skills" $lineMaxWidth="250px" />
        <FlexWrapper $gap={60}>
          <S.Image src={skillsImg} alt="" />
          <S.SkillsWrapper $wrap="wrap" $justify="end" $grow={1} $gap={16}>
            <SkillBox title="Languages" skills={["TypeScript", "JavaScript"]} />
            <SkillBox title="Tools" skills={["VSCode", "Git", "Figma"]} />
            <SkillBox title="Frameworks" skills={["React", "Vue"]} />
            <SkillBox title="Other" skills={["HTML", "Css", "SCSS"]} />
          </S.SkillsWrapper>
        </FlexWrapper>
      </Container>
    </S.Section>
  );
};
