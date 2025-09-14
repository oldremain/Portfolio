import React from "react";
import styled from "styled-components";
import { SectionTitle } from "@/components/SectionTitle";
import { FlexWrapper } from "@/components/FlexWrapper";
import { Project } from "./project/Project";
import projectImg1 from "@/assets/images/project-1.png";
import projectImg2 from "@/assets/images/project-2.png";
import projectImg3 from "@/assets/images/project-3.png";

export const Projects = () => {
  return (
    <StyledSection>
      <SectionTitle title="projects" />
      <FlexWrapper gap={16} justify="space-between">
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
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: var(--section-padding);
`;
