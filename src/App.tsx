import "./App.css";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/section/main/Main";
import { Skills } from "./layout/section/skills/Skills";
import { Projects } from "./layout/section/projects/Projects";
import { About } from "./layout/section/about/About";
import { Contacts } from "./layout/section/contacts/Contacts";
import { Footer } from "./layout/footer/Footer";

function App() {
  return (
    <div>
      <div className="container">
        <Header />
        <main>
          <Main />
          <Projects />
          <Skills />
          <About />
          <Contacts />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
