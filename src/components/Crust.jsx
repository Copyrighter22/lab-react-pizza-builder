function Crust({ isGlutenFree, whiteSauce }) {
  // TODO (Iteracion 3):
  //   - La clase "crust-gluten-free" del <section className="crust"> SOLO
  //     debe aplicarse cuando isGlutenFree sea true.
  //   - La clase "sauce-white" del <section className="sauce"> SOLO debe
  //     aplicarse cuando whiteSauce sea true.
  //
  // Pista: usa template literals con un operador ternario, por ejemplo:
  //   className={`crust ${isGlutenFree ? "crust-gluten-free" : ""}`}
  return (
    <section className={`crust ${isGlutenFree ? "crust crust-gluten-free" : ""}`}>
      <section className="cheese"></section>
      <section className={`sauce ${whiteSauce ? "sauce-white" : ""}`}></section>
    </section>
  );
}

export default Crust;
