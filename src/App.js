import About from "./components/About";
import Cntct from "./components/Cntct";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Sociallinks from "./components/Sociallinks";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Experience />
      <Cntct />

      <Sociallinks />
    </div>
  );
}

export default App;
