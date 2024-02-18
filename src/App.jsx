import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);
  const [confiStrong, setConfistrong] = useState({
    color: "green",
    status: "positive",
  });

  const handleClipIncrementar = () => {
    setContador((prevContador) => prevContador + 1);
    confi();
  };

  const isImpar = () => {
    return contador % 2 !== 0;
  };

  const handleClipReset = () => {
    setContador(0);
    confi();
  };

  const handleClipRestar = () => {
    setContador((prevContador) => prevContador - 1);
    confi();
  };

  const confi = () => {
    if (contador === 0) {
      setConfistrong({
        ...confiStrong,
        color: "green",
        status: "neutral",
      });
    } else if (contador > 0) {
      setConfistrong({
        ...confiStrong,
        color: "green",
        status: "positive",
      });
    } else {
      setConfistrong({
        ...confiStrong,
        color: "red",
        status: "negative",
      });
    }
  };

  console.table(confiStrong);

  return (
    <>
      <header>
        <h1>Class_Midu_Dev_hook</h1>
      </header>
      <main className="container">
        <section>
          <p>{contador}</p>
          <p>{isImpar() ? "It's odd" : "It's even"}</p>
          <strong>{contador === 0 ? "Start" : ""}</strong>
          <br />
          <strong style={{ background: confiStrong.color }}>
            {confiStrong.status}
          </strong>
          <br />
          <button onClick={handleClipIncrementar}>Increment</button>
          <button onClick={handleClipReset}>Reset</button>
          <button onClick={handleClipRestar}>Decrement</button>
        </section>
      </main>
    </>
  );
}

export default App;