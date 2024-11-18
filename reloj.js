function mostrarFechaHora() {
  const fecha = new Date();
  const meses = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  const dia = fecha.getDate();
  const mes = meses[fecha.getMonth()];
  const año = fecha.getFullYear();

  let horas = fecha.getHours();
  const minutos = fecha.getMinutes();
  const segundos = fecha.getSeconds();
  const ampm = horas >= 12 ? "PM" : "AM";
  horas = horas % 12;
  horas = horas ? horas : 12; // La hora '0' se convierte en '12'
  const strMinutos = minutos < 10 ? "0" + minutos : minutos;
  const strSegundos = segundos < 10 ? "0" + segundos : segundos;

  const fechaHora = `${dia} de ${mes} de ${año} - ${horas}:${strMinutos}:${strSegundos} ${ampm}`;
  document.getElementById("fecha-hora").innerText = fechaHora;
}

mostrarFechaHora();
setInterval(mostrarFechaHora, 1000);
