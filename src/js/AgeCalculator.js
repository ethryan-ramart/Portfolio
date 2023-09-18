export default function AgeCalculator(fecha) {
  const fechaNacimientoDate = new Date(fecha);
  const fechaActual = new Date();

  // Calcula la diferencia en milisegundos entre las fechas
  const diferencia = fechaActual - fechaNacimientoDate;

  // Convierte la diferencia en milisegundos a años
  const edad = diferencia / (1000 * 60 * 60 * 24 * 365.25);

  // Redondea la edad a un número entero
  return Math.floor(edad);
}
