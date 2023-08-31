import Dashboard from "./components/Dashboard";
import styled from "styled-components";
import { Provider } from "react-redux";
import {store} from "./redux/store";

const Container = styled.div`
  background-color: #fff;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
`;
function App() {
  return (
    <Provider store={store}>
    <Container>
      <Dashboard />
    </Container>
    </Provider>
  );
}

export default App;
