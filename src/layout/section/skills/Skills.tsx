import React from "react";
import styled from "styled-components";
import { SectionTitle } from "@/components/SectionTitle";
import { FlexWrapper } from "@/components/FlexWrapper";
import { Container } from "@/components/Container";
import { Skill } from "./skill/Skill";
import skillsImg from "@/assets/images/skills-img.png";

export const Skills = () => {
  return (
    <StyledSection>
      <Container>
        <SectionTitle title="skills" />
        <FlexWrapper gap={60}>
          <Image src={skillsImg} alt="" />
          <FlexWrapper
            className="skills-wrp"
            wrap="wrap"
            justify="end"
            grow={1}
            gap={16}
          >
            <Skill title="Languages" skills={["TypeScript", "JavaScript"]} />
            <Skill title="Tools" skills={["VSCode", "Git", "Figma"]} />
            <Skill title="Frameworks" skills={["React", "Vue"]} />
            <Skill title="Other" skills={["HTML", "Css", "SCSS"]} />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: var(--section-padding);
  .skills-wrp {
    margin-top: 30px;
  }
`;

const Image = styled.img`
  width: 350px;
  height: 282px;
  object-fit: contain;
`;
