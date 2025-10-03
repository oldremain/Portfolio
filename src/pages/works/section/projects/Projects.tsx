import React from "react";
import { projectsData } from "@/lib/data";
import { SectionTitle } from "@/components/SectionTitle";
import { FlexWrapper } from "@/components/FlexWrapper";
import { Project } from "@/components/project/Project";
import { S } from "./Projects_Styles";

export const Projects: React.FC = () => {
  return (
    <S.Section>
      <SectionTitle title="complete-apps" $noLine />
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
    </S.Section>
  );
};
