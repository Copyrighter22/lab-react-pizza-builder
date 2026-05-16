![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | React Pizza Builder

<br>

## Introduccion

Tenemos hambre de una buena pizza recien hecha. Por supuesto, queremos pedirla online, ya que hablar con una persona solo retrasaria el consumo de pizza.

Hay un solo problema: el constructor de pizzas de nuestra pizzeria local **no funciona**. Esta vez la pizzeria tiene suerte, porque su cliente de hoy es un desarrollador de React. Tu mision es completar la app para que el constructor de pizzas sea interactivo: los botones deben activar y desactivar ingredientes en la pizza, y el precio debe actualizarse automaticamente.

Esta es la version **React** del clasico [lab DOM Pizza Builder](https://github.com/IronPTSolutions/lab-dom-pizza-builder-2026). El HTML y el CSS ya estan portados a componentes JSX; tu trabajo es darle vida con **state + props + renderizado condicional**.

<br>

## Requisitos

- Haz Fork de este repo
- Clona este repo

<br>

## Submission

Una vez completado, ejecuta los siguientes comandos:

```bash
git add .
git commit -m "Solved lab"
git push origin main
```

Crea un Pull Request para que tus profesores puedan revisar tu trabajo.

<br>

## Getting Started

Instala las dependencias y arranca el servidor de desarrollo:

```bash
npm install
npm run dev
```

Abre la URL que muestra Vite (por defecto [http://localhost:5173](http://localhost:5173)) en el navegador.

<br>

## Estructura del proyecto

```
src/
├── App.jsx                  <- aqui vive el state de la pizza
├── main.jsx
├── index.css                <- todos los estilos (no hace falta tocarlos)
├── data/
│   └── ingredients.js       <- arrays con las posiciones de cada topping
└── components/
    ├── Header.jsx           <- listo
    ├── Footer.jsx           <- listo
    ├── Button.jsx           <- stub: boton generico reutilizable
    ├── Controls.jsx         <- listo: usa <Button> y recibe handlers desde App
    ├── Pizza.jsx            <- contenedor de la pizza (toppings + crust)
    ├── Pepperoni.jsx        <- stub: rodajas de pepperoni
    ├── Mushrooms.jsx        <- stub: champiñones
    ├── GreenPeppers.jsx     <- stub: pimientos verdes
    ├── Crust.jsx            <- stub: masa, queso y salsa
    └── Price.jsx            <- panel de precio
```

El proyecto ya tiene toda la estructura JSX y los estilos CSS terminados. Tu trabajo es completar la **logica de estado, props y renderizado condicional** en `App.jsx`, `Button.jsx`, los componentes de toppings (`Pepperoni`, `Mushrooms`, `GreenPeppers`), `Crust.jsx` y `Price.jsx`.

El enfoque que vas a seguir se llama **lifting state up**: el estado de la pizza vive en `App` (con `useState`), se pasa hacia abajo a los hijos a traves de **props**, y los hijos llaman a funciones (tambien recibidas por props) para modificar el estado. Asi, el estado es la **unica fuente de verdad** de tu aplicacion.

> 💡 Los componentes `Controls`, `Header` y `Footer` ya estan terminados. **No necesitas tocarlos**.

<br>

---

### Iteracion 1: Estado en App + boton reutilizable

#### 1.1 - Convierte cada ingrediente en state

Abre `src/App.jsx`. Veras que hay cinco `const` placeholder, uno por ingrediente:

```jsx
const pepperoni = true;
const mushrooms = true;
const greenPeppers = true;
const whiteSauce = true;
const glutenFreeCrust = true;
```

Conviertelos en **state** usando el hook `useState`. Crea **un useState por ingrediente** (cinco en total). Todos arrancan en `true` porque al cargar la pagina queremos ver la pizza completa:

```jsx
const [pepperoni, setPepperoni] = useState(true);
const [mushrooms, setMushrooms] = useState(true);
const [greenPeppers, setGreenPeppers] = useState(true);
const [whiteSauce, setWhiteSauce] = useState(true);
const [glutenFreeCrust, setGlutenFreeCrust] = useState(true);
```

> 💡 Aunque podrias usar un unico `useState` con un objeto, en este lab usamos **cinco estados independientes** para practicar el patron y para que cada ingrediente tenga su propia funcion toggle.

#### 1.2 - Crea los handlers toggle

`<Controls />` ya esta recibiendo cinco props `onTogglePepperoni`, `onToggleMushrooms`, etc., pero ahora mismo todas son funciones vacias `() => {}`. Sustituyelas por handlers inline que llamen al setter correspondiente con el valor invertido:

```jsx
<Controls
  pepperoni={pepperoni}
  mushrooms={mushrooms}
  greenPeppers={greenPeppers}
  whiteSauce={whiteSauce}
  glutenFreeCrust={glutenFreeCrust}
  onTogglePepperoni={() => { setPepperoni(!pepperoni); }}
  onToggleMushrooms={() => { setMushrooms(!mushrooms); }}
  onToggleGreenPeppers={() => { setGreenPeppers(!greenPeppers); }}
  onToggleWhiteSauce={() => { setWhiteSauce(!whiteSauce); }}
  onToggleGlutenFree={() => { setGlutenFreeCrust(!glutenFreeCrust); }}
/>
```

Cada handler invierte el booleano con `set...(!...)`. En React **no se muta el estado**: se llama al setter con el nuevo valor.

#### 1.3 - Completa el componente `Button`

Abre `src/components/Button.jsx`. El componente recibe cuatro props: `color`, `isPressed`, `onClick` y `children`. Ahora mismo devuelve `null`. Hazlo devolver un `<button>` que:

- Tenga la clase `btn btn-${color}` siempre, y ademas `active` **solo** cuando `isPressed` sea `true`.
- Reciba `onClick` directamente del prop.
- Use `children` como contenido visible.

```jsx
function Button({ children, color, isPressed, onClick }) {
  return (
    <button
      className={`btn btn-${color} ${isPressed ? "active" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

#### 1.4 - Verificacion

Recarga el navegador. Deberias ver que:

- Los cinco botones aparecen con su color y con la clase `active` (todos empiezan marcados).
- Al hacer click sobre un boton, este cambia entre activo/inactivo visualmente.
- La pizza todavia **no** cambia al pulsar los botones: la conectaremos en las siguientes iteraciones.

<br>

---

### Iteracion 2: Toppings condicionales

#### 2.1 - Completa los tres componentes de toppings

Cada topping tiene su propio componente que se encarga de pintar las 30+ piezas haciendo `.map()` sobre un array de posiciones definido en `src/data/ingredients.js`. Los tres componentes son ahora mismo stubs que devuelven `null`. Complétalos:

**`src/components/Pepperoni.jsx`:**

```jsx
import { PEPPERONI_POSITIONS } from "../data/ingredients";

function Pepperoni() {
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
```

**`src/components/Mushrooms.jsx`:**

```jsx
import { MUSHROOM_POSITIONS } from "../data/ingredients";

function Mushrooms() {
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
```

**`src/components/GreenPeppers.jsx`:**

```jsx
import { GREEN_PEPPER_POSITIONS } from "../data/ingredients";

function GreenPeppers() {
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
```

#### 2.2 - Renderizado condicional en `Pizza.jsx`

Abre `src/components/Pizza.jsx`. Ahora mismo siempre se renderizan los tres toppings:

```jsx
<div id="pizza">
  <GreenPeppers />
  <Mushrooms />
  <Pepperoni />
  <Crust whiteSauce={whiteSauce} isGlutenFree={glutenFreeCrust} />
</div>
```

Envuelve cada topping con `{prop && <Componente />}` para que solo aparezca cuando su prop sea `true`:

```jsx
<div id="pizza">
  {greenPeppers && <GreenPeppers />}
  {mushrooms && <Mushrooms />}
  {pepperoni && <Pepperoni />}
  <Crust whiteSauce={whiteSauce} isGlutenFree={glutenFreeCrust} />
</div>
```

#### 2.3 - Verificacion

Recarga el navegador y haz click en los botones de **pepperoni**, **mushrooms** y **green peppers**. Cada topping debe aparecer y desaparecer de la pizza al pulsar su boton, y el boton debe cambiar entre activo/inactivo.

> La salsa y la masa todavia no reaccionan: lo arreglamos en la Iteracion 3.

<br>

---

### Iteracion 3: Salsa y masa (className condicional en `Crust`)

La salsa y la masa funcionan de forma diferente. En lugar de montar y desmontar elementos, **se mantienen siempre** en el DOM y lo que cambia es su clase CSS.

Abre `src/components/Crust.jsx`. Recibe dos props: `isGlutenFree` y `whiteSauce`. Ajusta los `className`:

```jsx
function Crust({ isGlutenFree, whiteSauce }) {
  return (
    <section className={`crust ${isGlutenFree ? "crust-gluten-free" : ""}`}>
      <section className="cheese"></section>
      <section className={`sauce ${whiteSauce ? "sauce-white" : ""}`}></section>
    </section>
  );
}
```

#### 3.1 - Verificacion

Recarga el navegador y prueba los botones **White sauce** y **Gluten-free crust**:

- Al desactivar **White sauce** la salsa pasa de blanca a roja (tomate, valor por defecto).
- Al desactivar **Gluten-free crust** la masa pasa de masa clara (sin gluten) a masa normal.

<br>

---

### Iteracion 4: Precio dinamico

Abre `src/components/Price.jsx`. El panel ya muestra el desglose completo y un total hardcodeado a `$21`. Hay que hacer que se actualice segun el estado de la pizza.

#### 4.1 - Calcula el precio total

Antes del `return`, calcula el precio final partiendo de `10` (precio base de la cheese pizza) y sumando el coste de cada ingrediente activo:

| Ingrediente        | Prop              | Precio |
| ------------------ | ----------------- | ------ |
| Pepperoni          | `pepperoni`       | $1     |
| Mushrooms          | `mushrooms`       | $1     |
| Green peppers      | `greenPeppers`    | $1     |
| White sauce        | `whiteSauce`      | $3     |
| Gluten-free crust  | `glutenFreeCrust` | $5     |

```jsx
let finalPrice = 10;

if (pepperoni) finalPrice += 1;
if (mushrooms) finalPrice += 1;
if (greenPeppers) finalPrice += 1;
if (whiteSauce) finalPrice += 3;
if (glutenFreeCrust) finalPrice += 5;
```

#### 4.2 - Renderiza el precio y oculta los `<li>` inactivos

Muestra `finalPrice` dentro del `<strong>` y envuelve cada `<li>` con `{prop && <li>...}` para que solo aparezca cuando su ingrediente este activo:

```jsx
return (
  <aside className="panel price">
    <h2>Your pizza's price</h2>
    <b>$10 cheese pizza</b>
    <ul>
      {pepperoni && <li>$1 pepperoni</li>}
      {mushrooms && <li>$1 mushrooms</li>}
      {greenPeppers && <li>$1 green peppers</li>}
      {whiteSauce && <li>$3 white sauce</li>}
      {glutenFreeCrust && <li>$5 gluten-free crust</li>}
    </ul>
    <strong>${finalPrice}</strong>
  </aside>
);
```

#### 4.3 - Verificacion

Activa y desactiva los cinco ingredientes y comprueba los totales:

- Con **todos los ingredientes activos**, el total es **$21**.
- Con **todo desactivado** (solo la base), el total es **$10**.
- Cada `<li>` del desglose aparece y desaparece junto a su ingrediente.

<br>

---

Happy coding! :heart:
