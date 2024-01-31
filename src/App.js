import styled from "styled-components";
import Begin from "./components/Begin/Begin";
import About from "./components/About/About";

const Container = styled.div`
  background-color: #03001C;
`

function App() {
  return (
    <Container> 
      <Begin/>
      <About/>
    </Container>
  );
}

export default App;
