import { GASTOS_DB } from "../data/gasto.data.js";
import { GastoCombustible } from "../model/gasto.model.js";

var gastoAnual = {
  2020 : 0,
  2019 : 0,
  2018 : 0,
  2017 : 0,
  2016 : 0,
  2015 : 0
};

function almacenarGastos(){
  for (const gasto of GASTOS_DB) {
    localStorage.setItem(gasto.id, JSON.stringify(gasto));
    gastoAnual[gasto.date.getFullYear()] += gasto.precioViaje;
  }
  
  for (const anio in gastoAnual) {
    sessionStorage.setItem(anio, gastoAnual[anio]);
  }
}

function procesarGasto(jsonNuevoGasto){
  const datos = JSON.parse(jsonNuevoGasto);
  const gasto = new GastoCombustible(
    datos.id, datos.vehicleType, datos.date, datos.kilometers, datos.precioViaje
  );

  const anio = gasto.date.getFullYear();
  const total = parseFloat(sessionStorage.getItem(anio)) || 0;
  sessionStorage.setItem(anio, total + gasto.precioViaje);
}

export const GastoService = { almacenarGastos, procesarGasto};
