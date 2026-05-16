import Crust from "./Crust";
import GreenPeppers from "./GreenPeppers";
import Mushrooms from "./Mushrooms";
import Pepperoni from "./Pepperoni";

function Pizza({
  pepperoni,
  mushrooms,
  greenPeppers,
  whiteSauce,
  glutenFreeCrust,
}) {
  // TODO (Iteracion 2): renderiza cada sub-componente de topping SOLO cuando
  // su prop sea true. Usa el patron {prop && <Componente />} para envolver
  // <GreenPeppers />, <Mushrooms /> y <Pepperoni />.
  return (
    <div id="pizza">
      <GreenPeppers />
      <Mushrooms />
      <Pepperoni />
      <Crust whiteSauce={whiteSauce} isGlutenFree={glutenFreeCrust} />
    </div>
  );
}

export default Pizza;
