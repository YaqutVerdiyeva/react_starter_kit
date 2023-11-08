import { Button, Input, Rotate, StyledLink, Title, TomatoButton } from "./Components";

function App() {
  return (
    <>
      test
      <Title>Hello</Title>
      <Title theme="dark">Testing</Title>
      <Button>CLICK</Button>
      <TomatoButton>CLICK</TomatoButton>
      <hr />
      <StyledLink>Home Page</StyledLink>
      <hr />
      <Input placeholder="Enter text..." inputColor="rebeccapurple" />
      <hr />
      <Rotate>&lt; 💅🏾 &gt;</Rotate>
    </>
  );
}

export default App;
