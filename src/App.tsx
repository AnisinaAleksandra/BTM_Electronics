import "./App.css";
import { Main } from "./pages/Main";
import { Header } from "./widget/Header";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Services />
      <About />
      <Contacts />
    </>
  );
}

export default App;
