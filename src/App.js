import styled from "styled-components";
import Begin from "./components/Begin/Begin";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

const Container = styled.div`
  background-color: #03001C;
`

function App() {
  return (
    <Container> 
      <Begin/>
      <About/>
      <Projects/>
    </Container>
  );
}

export default App;
