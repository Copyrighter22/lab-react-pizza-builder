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
  let finalPrice = 10;
  if (pepperoni) finalPrice += 1;
  if (mushrooms) finalPrice += 1;
  if (greenPeppers) finalPrice += 1;
  if (whiteSauce) finalPrice += 3;
  if (glutenFreeCrust) finalPrice += 5;

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
}

export default Price;
