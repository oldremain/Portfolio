import React from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { FlexWrapper } from "@/components/FlexWrapper";
import { Container } from "@/components/Container";
import { Project } from "@/components/project/Project";
import { projectsData } from "@/lib/data";
import { S } from "./Projects_Styles";
import projectsRectImg from "@/assets/images/projects-rect.webp";

export const Projects: React.FC = () => {
  return (
    <S.Section>
      <S.ProjectRectImg src={projectsRectImg} alt="" />
      <Container>
        <SectionTitle title="projects" $lineMaxWidth="500px" />
        <FlexWrapper $gap={16} $justify="space-between">
          {projectsData.map((it) => (
            <Project
              key={it.id}
              img={it.img}
              technologies={it.technologies}
              title={it.title}
              description={it.description}
            />
          ))}
        </FlexWrapper>
      </Container>
    </S.Section>
  );
};
