import React from "react";
import { Container } from "@/components/Container";
import { PageTitle } from "@/components/PageTitle";
import { Projects } from "./section/projects/Projects";
import { S } from "./Works_Styles";

export const Works: React.FC = () => {
  return (
    <S.Section>
      <Container>
        <PageTitle title="projects" subtitle="List of my projects" />
        <Projects />
      </Container>
    </S.Section>
  );
};
