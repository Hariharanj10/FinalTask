import Dashboard from "./components/Dashboard";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
`;
function App() {
  return (
    <Container>
      <Dashboard />
    </Container>
  );
}

export default App;
