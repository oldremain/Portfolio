import { BrowserRouter, Routes, Route } from "react-router";
import { MainLayout } from "./layout/MainLayout";
import { Home } from "./pages/home/Home";
import { Works } from "./pages/works/Works";
import { About } from "./pages/about/About";
import { Contacts } from "./pages/contacts/Contacts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/works" element={<Works />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
