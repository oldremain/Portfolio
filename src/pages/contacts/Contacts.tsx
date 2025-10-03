import React from "react";
import { Container } from "@/components/Container";
import { PageTitle } from "@/components/PageTitle";
import { ContactLink } from "@/components/ContactLink";
import { FlexWrapper } from "@/components/FlexWrapper";
import { EmailForm } from "@/components/emailForm/EmailForm";
import { SectionTitle } from "@/components/SectionTitle";
import { S } from "./Contacts_Styles";
import leftRectImg from "@/assets/images/contacts-rect.webp";
import RightRectImg from "@/assets/images/right-rect.webp";

export const Contacts: React.FC = () => {
  return (
    <S.Section>
      <S.LeftRectImg src={leftRectImg} alt="" />
      <Container>
        <PageTitle title="contacts" subtitle="Who am I?" />
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
        <SectionTitle level={3} title="contact-me" $noLine />
        <EmailForm />
      </Container>
      <S.RightRectImg src={RightRectImg} />
    </S.Section>
  );
};
