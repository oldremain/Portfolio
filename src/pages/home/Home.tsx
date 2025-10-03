import React from "react";
import { Main } from "./section/main/Main";
import { Quote } from "./section/quote/Quote";
import { Projects } from "./section/projects/Projects";
import { Skills } from "./section/skills/Skills";
import { About } from "./section/about/About";
import { Contacts } from "./section/contacts/Contacts";

export const Home: React.FC = () => {
  return (
    <>
      <Main />
      <Quote />
      <Projects />
      <Skills />
      <About />
      <Contacts />
    </>
  );
};
