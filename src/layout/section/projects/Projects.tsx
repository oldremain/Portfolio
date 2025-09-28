import React from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { FlexWrapper } from "@/components/FlexWrapper";
import { Container } from "@/components/Container";
import { Project } from "./project/Project";
import { S } from "./Projects_Styles";
import projectImg1 from "@/assets/images/project-1.webp";
import projectImg2 from "@/assets/images/project-2.webp";
import projectImg3 from "@/assets/images/project-3.webp";
import projectsRectImg from "@/assets/images/projects-rect.webp";

export const Projects: React.FC = () => {
  return (
    <S.Section id="works">
      <S.ProjectRectImg src={projectsRectImg} alt="" />
      <Container>
        <SectionTitle title="projects" $lineMaxWidth="500px" />
        <FlexWrapper $gap={16} $justify="space-between">
          <Project
            img={projectImg1}
            technologies={["HTML", "CSS", "JavaScript"]}
            title="ChertNodes"
            description="Minecraft servers hosting"
          />
          <Project
            img={projectImg2}
            technologies={["React", "Express", "Node.js", "HTML", "CSS"]}
            title="ProtectX"
            description="Discord anti-crash bot"
          />
          <Project
            img={projectImg3}
            technologies={["CSS", "Express", "Node.js"]}
            title="Kahoot Answers Viewer"
            description="Get answers to your kahoot quiz"
          />
        </FlexWrapper>
      </Container>
    </S.Section>
  );
};
