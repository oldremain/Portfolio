import React from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { FlexWrapper } from "@/components/FlexWrapper";
import { Container } from "@/components/Container";
import { SkillsGroup } from "./skillsGroup/SkillsGroup";
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
            <SkillsGroup
              title="Languages"
              skills={["TypeScript", "JavaScript"]}
            />
            <SkillsGroup title="Tools" skills={["VSCode", "Git", "Figma"]} />
            <SkillsGroup title="Frameworks" skills={["React", "Vue"]} />
            <SkillsGroup title="Other" skills={["HTML", "Css", "SCSS"]} />
          </S.SkillsWrapper>
        </FlexWrapper>
      </Container>
    </S.Section>
  );
};
