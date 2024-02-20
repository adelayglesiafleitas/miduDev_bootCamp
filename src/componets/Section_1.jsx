import "../styleFolder/Section_1Style.css";

function Section_1({ contador, setContador, confiStrong, setConfistrong }) {
  const confi = (count) => {
    if (count == 0) {
      setConfistrong({
        ...confiStrong,
        color: "yellow",
        status: "neutral",
      });
    } else if (count >= 1) {
      setConfistrong({
        ...confiStrong,
        color: "green",
        status: "positive",
      });
    } else if (count <= -1) {
      setConfistrong({
        ...confiStrong,
        color: "red",
        status: "negative",
      });
    }
  };

  const handleClipIncrementar = () => {
    let count = contador + 1;
    setContador(count);
    confi(count);
  };

  const isImpar = () => {
    return contador % 2 !== 0;
  };

  const handleClipReset = () => {
    setContador(0);
    confi(0);
  };

  const handleClipRestar = () => {
    let count = contador - 1;
    setContador(count);
    confi(count);
  };

  return (
    <>
      <section id="section">
        <p>{contador}</p>
        <p>{isImpar() ? "It's odd" : "It's even"}</p>
        <br />
        <strong style={{ background: confiStrong.color }}>
          {confiStrong.status}
        </strong>

        <br />
        <section id="botones">
          <button onClick={handleClipIncrementar}>Increment</button>
          <button onClick={handleClipReset}>Reset</button>
          <button onClick={handleClipRestar}>Decrement</button>
        </section>
      </section>
    </>
  );
}

export default Section_1;
