import React from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { FlexWrapper } from "@/components/FlexWrapper";
import { Container } from "@/components/Container";
import { ContactLink } from "./ContactLink";
import leftRectImg from "@/assets/images/contacts-rect.webp";
import { S } from "./Contacts_Styles";

export const Contacts: React.FC = () => {
  return (
    <S.Section id="contacts">
      <S.LeftRectImg src={leftRectImg} alt="" />
      <Container>
        <SectionTitle title="contacts" />
        <FlexWrapper $gap={20}>
          <S.AboutMe>
            I’m open to job opportunities in a company. If you have any other
            requests or questions, feel free to reach out to me.
          </S.AboutMe>
          <S.ContactsBox>
            <S.ContactsTitle>Message me here</S.ContactsTitle>
            <S.ContactsList>
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
            </S.ContactsList>
          </S.ContactsBox>
        </FlexWrapper>
      </Container>
    </S.Section>
  );
};
