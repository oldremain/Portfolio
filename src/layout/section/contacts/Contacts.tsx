import React from "react";
import styled from "styled-components";
import { SectionTitle } from "@/components/SectionTitle";
import { FlexWrapper } from "@/components/FlexWrapper";
import { Container } from "@/components/Container";
import { ContactLink } from "./ContactLink";
import { theme } from "@/styles/Theme";

export const Contacts = () => {
  return (
    <StyledSection>
      <Container>
        <SectionTitle title="contacts" />
        <FlexWrapper gap={20}>
          <AboutMe>
            I’m open to job opportunities in a company. If you have any other
            requests or questions, feel free to reach out to me.
          </AboutMe>
          <StyledContacts>
            <ContactsTitle>Message me here</ContactsTitle>
            <ContactsList>
              <li>
                <ContactLink url="https://t.me/phdpixxel" iconName="telegram">
                  phdpixxel
                </ContactLink>
              </li>
              <li>
                <ContactLink
                  url="mailto:30oleg.zv94@gmail.com"
                  iconName="email"
                >
                  30oleg.zv94@gmail.com
                </ContactLink>
              </li>
            </ContactsList>
          </StyledContacts>
        </FlexWrapper>
      </Container>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: var(--section-padding);
`;

const AboutMe = styled.p`
  max-width: 505px;
`;

const StyledContacts = styled.div`
  padding: 14px;
  margin-left: auto;
  border: 1px solid ${theme.colors.primary};
`;

const ContactsTitle = styled.div`
  margin-bottom: 12px;
  color: ${theme.colors.secondary};
`;

const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
