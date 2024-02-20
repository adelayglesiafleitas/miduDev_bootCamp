import { useState } from "react";
import Section_1 from "./componets/Section_1.jsx";
import "./styleFolder/AppStyle.css";

function App() {
  const [contador, setContador] = useState(0);
  const [confiStrong, setConfistrong] = useState({
    color: "yellow",
    status: "neutral",
  });

  console.table(confiStrong);

  return (
    <>
      <header>
        <h1>BootCamp_1</h1>
      </header>
      <main className="container">
        <Section_1
          contador={contador}
          setContador={setContador}
          confiStrong={confiStrong}
          setConfistrong={setConfistrong}
        />
      </main>
    </>
  );
}

export default App;
