import Button from "./Button";

function Controls({
  pepperoni,
  onTogglePepperoni,
  mushrooms,
  onToggleMushrooms,
  greenPeppers,
  onToggleGreenPeppers,
  whiteSauce,
  onToggleWhiteSauce,
  glutenFreeCrust,
  onToggleGlutenFree,
}) {
  // Este componente ya esta listo: solo reparte los props a cinco <Button />.
  // El comportamiento depende de que completes <Button /> (Iteracion 1.3)
  // y de los useState/handlers en App.jsx (Iteracion 1.1 y 1.2).
  return (
    <div className="panel controls">
      <ul>
        <li>
          <Button
            color="pepperoni"
            isPressed={pepperoni}
            onClick={onTogglePepperoni}
          >
            Pepperoni
          </Button>
        </li>
        <li>
          <Button
            color="mushrooms"
            isPressed={mushrooms}
            onClick={onToggleMushrooms}
          >
            Mushrooms
          </Button>
        </li>
        <li>
          <Button
            color="green-peppers"
            isPressed={greenPeppers}
            onClick={onToggleGreenPeppers}
          >
            Green peppers
          </Button>
        </li>
        <li>
          <Button
            color="sauce"
            isPressed={whiteSauce}
            onClick={onToggleWhiteSauce}
          >
            White sauce
          </Button>
        </li>
        <li>
          <Button
            color="crust"
            isPressed={glutenFreeCrust}
            onClick={onToggleGlutenFree}
          >
            Gluten-free crust
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default Controls;
