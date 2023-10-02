import "./App.css";
import { Main } from "./pages/Main";
import { Header } from "./widget/Header";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";
import Footer from "./widget/Footer/ui/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  AOS.init();

  return (
    <>
      <Header />
      <Main />
      <Services />
      <About />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
