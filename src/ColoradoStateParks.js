import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde"
import { elevation, trees, wildlife } from "./parks/RockyMountain"

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  wildlife();
  elevation();
  return (
    <>
      <h1>Colorado State Parks!</h1>
      <MesaVerde />
      <h1>{trees}</h1>
    </>

  )
}

export default ColoradoStateParks