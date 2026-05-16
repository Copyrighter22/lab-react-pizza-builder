function Price({
  pepperoni,
  mushrooms,
  greenPeppers,
  whiteSauce,
  glutenFreeCrust,
}) {
  // TODO (Iteracion 4):
  //   1. Declara una variable finalPrice antes del return, partiendo de 10
  //      (precio base de la cheese pizza). Suma a finalPrice el coste de
  //      cada ingrediente activo. Precios:
  //         Pepperoni $1, Mushrooms $1, Green peppers $1,
  //         White sauce $3, Gluten-free crust $5.
  //   2. Oculta cada <li> cuando su ingrediente no este activo (patron
  //      {prop && <li>...}).
  //   3. Muestra finalPrice dentro del <strong>.

  return (
    <aside className="panel price">
      <h2>Your pizza's price</h2>
      <b>$10 cheese pizza</b>
      <ul>
        <li>$1 pepperoni</li>
        <li>$1 mushrooms</li>
        <li>$1 green peppers</li>
        <li>$3 white sauce</li>
        <li>$5 gluten-free crust</li>
      </ul>
      <strong>$21</strong>
    </aside>
  );
}

export default Price;
