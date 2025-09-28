import React from "react";
import { S } from "../Projects_Styles";

type ProjectProps = {
  img: string;
  technologies: string[];
  title: string;
  description: string;
};

export const Project: React.FC<ProjectProps> = ({
  img,
  technologies,
  title,
  description,
}: ProjectProps) => {
  return (
    <S.Project>
      <S.Image src={img} alt="" />
      <S.Technologies>
        {technologies.map((item, idx) => (
          <span key={idx}>{item}</span>
        ))}
      </S.Technologies>
      <S.ProjectBody>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.ViewButton>
          Live <span>{"<~>"}</span>
        </S.ViewButton>
      </S.ProjectBody>
    </S.Project>
  );
};
