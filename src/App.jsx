import Title from "./componets/Title";
import "./App.css";

function App() {
  return (
    <>
      <main className="container">
        <Title color="blue" titulo="Hello" />
        <Title color="red" titulo="Word" />
        <Title color="black" titulo="Alex" />
      </main>
    </>
  );
}

export default App;
