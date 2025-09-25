import React from "react";
import styled from "styled-components";
import { SectionTitle } from "@/components/SectionTitle";
import { FlexWrapper } from "@/components/FlexWrapper";
import { Container } from "@/components/Container";
import { Project } from "./project/Project";
import { theme } from "@/styles/Theme";
import projectImg1 from "@/assets/images/project-1.webp";
import projectImg2 from "@/assets/images/project-2.webp";
import projectImg3 from "@/assets/images/project-3.webp";
import projectsRectImg from "@/assets/images/projects-rect.webp";

export const Projects = () => {
  return (
    <StyledSection id="works">
      <ProjectRectImg src={projectsRectImg} alt="" />
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
    </StyledSection>
  );
};

const StyledSection = styled.section`
  position: relative;
  padding: ${theme.padding.section.desktop};

  @media ${theme.media.tablet} {
    ${FlexWrapper} {
      flex-wrap: wrap;
    }
  }

  @media ${theme.media.tablet} {
    padding: ${theme.padding.section.mobile};
  }
`;

const ProjectRectImg = styled.img`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  @media ${theme.media.tablet} {
    display: none;
  }
`;
