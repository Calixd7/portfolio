import styled from "styled-components";
import './App.css';

function App() {
  return (
   <AppStyled>
     <h1>Styled Components</h1>
   </AppStyled>
  );
}
const AppStyled = styled.div`
 background-color: red;`
export default App;
