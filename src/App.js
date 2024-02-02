import styled from "styled-components";
import Begin from "./components/Begin/Begin";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Technologies from "./components/Technologies/Technologies";
import Footer from "./components/Footer/Footer";

const Container = styled.div`
  background-color: #03001C;
`

function App() {
  return (
    <Container>
      <Begin />
      <About />
      <Contact />
      <Projects />
      <Technologies />
      <Footer />
    </Container>
  );
}

export default App;
