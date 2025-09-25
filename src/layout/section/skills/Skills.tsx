import styled from "styled-components";
import { SectionTitle } from "@/components/SectionTitle";
import { FlexWrapper } from "@/components/FlexWrapper";
import { Container } from "@/components/Container";
import { SkillsGroup } from "./skillsGroup/SkillsGroup";
import { theme } from "@/styles/Theme";
import skillsImg from "@/assets/images/skills-img.webp";

export const Skills = () => {
  return (
    <StyledSection>
      <Container>
        <SectionTitle title="skills" $lineMaxWidth="250px" />
        <FlexWrapper $gap={60}>
          <Image src={skillsImg} alt="" />
          <SkillsWrapper $wrap="wrap" $justify="end" $grow={1} $gap={16}>
            <SkillsGroup
              title="Languages"
              skills={["TypeScript", "JavaScript"]}
            />
            <SkillsGroup title="Tools" skills={["VSCode", "Git", "Figma"]} />
            <SkillsGroup title="Frameworks" skills={["React", "Vue"]} />
            <SkillsGroup title="Other" skills={["HTML", "Css", "SCSS"]} />
          </SkillsWrapper>
        </FlexWrapper>
      </Container>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: ${theme.padding.section.desktop};

  @media ${theme.media.tablet} {
    padding: ${theme.padding.section.mobile};
  }
`;

const SkillsWrapper = styled(FlexWrapper)`
  margin-top: 30px;

  @media ${theme.media.tablet} {
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    margin-top: 0;
  }
`;

const Image = styled.img`
  width: 350px;
  height: 282px;
  object-fit: contain;

  @media ${theme.media.tablet} {
    display: none;
  }
`;
