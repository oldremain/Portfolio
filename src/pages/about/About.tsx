import React from "react";
import { Container } from "@/components/Container";
import { PageTitle } from "@/components/PageTitle";
import { Presentation } from "./section/presentation/Presentation";
import { Skills } from "./section/skills/Skills";
import { Facts } from "./section/facts/Facts";
import { S } from "./About_Styles";

export const About: React.FC = () => {
  return (
    <S.Section>
      <Container>
        <PageTitle title="about-me" subtitle="Who am I?" />
      </Container>
      <Presentation />
      <Skills />
      <Facts />
    </S.Section>
  );
};
