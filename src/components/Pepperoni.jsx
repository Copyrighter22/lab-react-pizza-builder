import { PEPPERONI_POSITIONS } from "../data/ingredients";

function Pepperoni() {
  // TODO (Iteracion 2.1): mapea PEPPERONI_POSITIONS y, por cada (position, index),
  // devuelve:
  //
  //   <section key={`pep-${position}`} className={`pep ${position}`}>
  //     {index + 1}
  //   </section>
  //
  // Envuelve el resultado del map en un Fragment (<>...</>).
  return (
    <>
      {PEPPERONI_POSITIONS.map((position, index) => (
        <section key={`pep-${position}`} className={`pep ${position}`}>
          {index + 1}
        </section>
      ))}
    </>
  );
}

export default Pepperoni;
