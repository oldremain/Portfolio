import { FlexWrapper } from "@/components/FlexWrapper";
import { theme } from "@/styles/Theme";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  padding: ${theme.padding.section.desktop};
  padding-bottom: 156px;

  ${FlexWrapper} {
    margin-top: 30px;
  }

  @media ${theme.media.tablet} {
    padding: ${theme.padding.section.mobile};

    ${FlexWrapper} {
      margin-top: 20px;
      flex-direction: column;
    }
  }
`;

const LeftRectImg = styled.img`
  position: absolute;
  left: 0;
  top: calc(20px + 50%);
  transform: translateY(-50%);

  @media ${theme.media.desktop} {
    display: none;
  }
`;

const AboutMe = styled.p`
  max-width: 505px;
  font-size: 14px;
`;

const ContactsBox = styled.div`
  padding: 14px;
  margin-left: auto;
  border: 1px solid ${theme.colors.primary};

  @media ${theme.media.tablet} {
    padding: 10px;
    margin-left: 0;
    width: 100%;
  }
`;

const ContactsTitle = styled.div`
  margin-bottom: 12px;
  color: ${theme.colors.secondary};

  @media ${theme.media.tablet} {
    margin-bottom: 8px;
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-thickness: 0.5px;
  }
`;

const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${theme.media.tablet} {
    gap: 6px;
  }
`;

export const S = {
  Section,
  LeftRectImg,
  AboutMe,
  ContactsBox,
  ContactsTitle,
  ContactsList,
};
