import { GREEN_PEPPER_POSITIONS } from "../data/ingredients";

function GreenPeppers() {
  // TODO (Iteracion 2.1): mapea GREEN_PEPPER_POSITIONS y, por cada position,
  // devuelve:
  //
  //   <section
  //     key={`green-pepper-${position}`}
  //     className={`green-pepper ${position}`}
  //   />
  //
  // Envuelve el resultado del map en un Fragment (<>...</>).
  return (
    <>
      {GREEN_PEPPER_POSITIONS.map((position) => (
        <section
          key={`green-pepper-${position}`}
          className={`green-pepper ${position}`}
        />
      ))}
    </>
  );
}

export default GreenPeppers;
