import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);
  const handleClipIncrementar = () => {
    setContador((contador) => (contador += 1));
  };
  const isImpar = () => {
    if (contador % 2 == 0) {
      return true;
    } else {
      false;
    }
  };
  const handleClipReset = () => {
    setContador(0);
  };

  const handleClipRestar = () => {
    setContador((contador) => (contador -= 1));
  };

  return (
    <>
      <header>
        <h1>Clase_Midu_Dev_hook</h1>
      </header>
      <main className="container">
        D
        <section>
          <p>{contador}</p>
          <p>{isImpar() ? "Es par" : "Es impar"}</p>
          <strong>{contador == 0 ? "comienzo" : ""}</strong>
          <br />
          <strong>
            {contador === 0 ? "" : contador > 0 ? "Positivo" : "negativo"}
          </strong>
          <br />
          <button onClick={handleClipIncrementar}>Incrementar</button>
          <button onClick={handleClipReset}>Reset</button>
          <button onClick={handleClipRestar}>Restar</button>
        </section>
      </main>
    </>
  );
}

export default App;
