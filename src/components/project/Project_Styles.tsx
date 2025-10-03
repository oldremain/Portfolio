import styled from "styled-components";
import { theme } from "@/styles/Theme";
import { Button } from "@/components/Button";

const Project = styled.div`
  width: 100%;
  max-width: 332px;
  border: 1px solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    scale: 1.03;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Technologies = styled.div`
  padding: 8px;
  display: flex;
  gap: 8px;
  border-bottom: 1px solid ${theme.colors.primary};
`;

const ProjectBody = styled.div`
  padding: 16px;
`;

const Title = styled.div`
  margin-bottom: 16px;
  color: ${theme.colors.secondary};
  font-weight: 500;
`;

const Description = styled.h3`
  margin-bottom: 16px;
`;

const ViewButton = styled(Button)`
  display: inline-block;
  span {
    padding-left: 2px;
  }
`;

export const S = {
  Project,
  Image,
  Technologies,
  ProjectBody,
  Title,
  Description,
  ViewButton,
};
