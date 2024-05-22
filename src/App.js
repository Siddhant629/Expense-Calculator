import styled from "styled-components"
import HComponent from "./modules/home";
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 30px 0 10px;

`;

const Header = styled.span`
color: black;
font-size: 25px;
font-weight:bold;`;


function App() {
  return (
    <Container >
      
      <Header>The Expense Tracker</Header> 
      <HComponent></HComponent>
     
      
    </Container>
  );
}

export default App;
