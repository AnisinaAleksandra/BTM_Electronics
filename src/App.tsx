import "./App.css";
// import "./app/styles/index.scss";
import { Main } from "./pages/Main";
import { Header } from "./widget/Header";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";
import Footer from "./widget/Footer/ui/Footer";
import AOS from "aos";
import "./shared/config/i18n/i18n";
import "aos/dist/aos.css";

function App() {
  AOS.init({
    once: true,
  });

  return (
    <div className="app">
      <Header />
      <Main />
      <Services />
      <About />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
