import React from "react";
import styled from "styled-components";
import { SectionTitle } from "@/components/SectionTitle";
import { FlexWrapper } from "@/components/FlexWrapper";
import { ContactLink } from "./ContactLink";

export const Contacts = () => {
  return (
    <StyledSection>
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
              <ContactLink url="mailto:30oleg.zv94@gmail.com" iconName="email">
                30oleg.zv94@gmail.com
              </ContactLink>
            </li>
          </ContactsList>
        </StyledContacts>
      </FlexWrapper>
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
  border: 1px solid var(--color-primary);
`;

const ContactsTitle = styled.div`
  margin-bottom: 12px;
  color: var(--color-secondary);
`;

const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
