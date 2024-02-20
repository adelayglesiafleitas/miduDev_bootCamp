import { useState } from "react";
import Section_1 from "./componets/Section_1.jsx";

function App() {
  const [contador, setContador] = useState(0);
  const [confiStrong, setConfistrong] = useState({
    color: "green",
    status: "positive",
  });

  

  console.table(confiStrong);

  return (
    <>
      <header>
        <h1>Class_Midu_Dev_hook</h1>
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
