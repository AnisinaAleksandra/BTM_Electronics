import "./App.css";
import { Main } from "./pages/Main";
import { Header } from "./widget/Header";
import { Services } from "./pages/Services";
import { About } from "./pages/About";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Services />
      <About />
    </>
  );
}

export default App;
