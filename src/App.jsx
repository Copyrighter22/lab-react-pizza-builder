import { useState } from "react";
import Header from "./components/Header";
import Controls from "./components/Controls";
import Price from "./components/Price";
import Pizza from "./components/Pizza";
import Footer from "./components/Footer";

function App() {
  // TODO (Iteracion 1): convierte cada uno de estos const en useState.
  //   Cada ingrediente arranca en true (la pizza completa se ve al cargar).
  //   Ejemplo: const [pepperoni, setPepperoni] = useState(true);
  const pepperoni = true;
  const mushrooms = true;
  const greenPeppers = true;
  const whiteSauce = true;
  const glutenFreeCrust = true;

  // TODO (Iteracion 1): crea 5 handlers inline (uno por ingrediente)
  // que llamen al setter correspondiente con el valor invertido y pasalos
  // a <Controls /> en lugar de los () => {} vacios de mas abajo.
  // Ejemplo: onTogglePepperoni={() => { setPepperoni(!pepperoni); }}

  return (
    <>
      <Header />
      <Controls
        pepperoni={pepperoni}
        mushrooms={mushrooms}
        greenPeppers={greenPeppers}
        whiteSauce={whiteSauce}
        glutenFreeCrust={glutenFreeCrust}
        onTogglePepperoni={() => {}}
        onToggleMushrooms={() => {}}
        onToggleGreenPeppers={() => {}}
        onToggleWhiteSauce={() => {}}
        onToggleGlutenFree={() => {}}
      />
      <Price
        pepperoni={pepperoni}
        mushrooms={mushrooms}
        greenPeppers={greenPeppers}
        whiteSauce={whiteSauce}
        glutenFreeCrust={glutenFreeCrust}
      />
      <Pizza
        pepperoni={pepperoni}
        mushrooms={mushrooms}
        greenPeppers={greenPeppers}
        whiteSauce={whiteSauce}
        glutenFreeCrust={glutenFreeCrust}
      />
      <p id="crumbs">&there4;</p>
      <Footer />
    </>
  );
}

export default App;
