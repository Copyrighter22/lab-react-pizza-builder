import { MUSHROOM_POSITIONS } from "../data/ingredients";

function Mushrooms() {
  // TODO (Iteracion 2.1): mapea MUSHROOM_POSITIONS y, por cada (position, index),
  // devuelve:
  //
  //   <section key={`mushroom-${position}`} className={`mushroom ${position}`}>
  //     <div className="cap">{index + 1}</div>
  //     <div className="stem"></div>
  //   </section>
  //
  // Envuelve el resultado del map en un Fragment (<>...</>).
  return (
    <>
      {MUSHROOM_POSITIONS.map((position, index) => (
        <section
          key={`mushroom-${position}`}
          className={`mushroom ${position}`}
        >
          <div className="cap">{index + 1}</div>
          <div className="stem"></div>
        </section>
      ))}
    </>
  );
}

export default Mushrooms;
