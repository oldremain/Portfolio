import { Header } from "./layout/header/Header";
import { Aside } from "./layout/aside/Aside";
import { Main } from "./layout/section/main/Main";
import { Skills } from "./layout/section/skills/Skills";
import { Projects } from "./layout/section/projects/Projects";
import { About } from "./layout/section/about/About";
import { Contacts } from "./layout/section/contacts/Contacts";
import { Footer } from "./layout/footer/Footer";

function App() {
  return (
    <>
      <Aside />
      <Header />
      <Main />
      <Projects />
      <Skills />
      <About />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
