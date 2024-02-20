function Section_1({ contador, setContador, confiStrong, setConfistrong }) {
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

  return (
    <>
      <section>
        <p>{contador}</p>
        <p>{isImpar() ? "It's odd" : "It's even"}</p>
        <strong>{contador === 0 ? "Start" : ""}</strong>
        <br />
        <strong style={{ background: confiStrong.color }}>
          {confiStrong.status}
        </strong>
        a
        <br />
        <button onClick={handleClipIncrementar}>Increment</button>
        <button onClick={handleClipReset}>Reset</button>
        <button onClick={handleClipRestar}>Decrement</button>
      </section>
    </>
  );
}

export default Section_1;
