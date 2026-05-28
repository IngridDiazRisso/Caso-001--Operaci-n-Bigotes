//BOTONES INFORMACION

const infoBtn = document.getElementById("infobtn");
const infoBox = document.getElementById("infoBox");
const closeInfo = document.getElementById("closeInfo");

infoBtn.addEventListener("click", () => {
  infoBox.style.display = "flex";
});

closeInfo.addEventListener("click", () => {
  infoBox.style.display = "none";
});

//TEMPORIZADOR

function iniciarTemporizador() {
  let tiempoGuardado = localStorage.getItem("tiempoRestante") || 1800;

  let tiempo = parseInt(tiempoGuardado);

  const timerElement = document.getElementById("timer");

  function formatoTiempo(segundos) {
    const min = Math.floor(segundos / 60);
    const sec = segundos % 60;
    return `${min}:${sec < 10 ? "0" + sec : sec}`;
  }

  if (window.cuentaAtras) {
    clearInterval(window.cuentaAtras);
  }

  window.cuentaAtras = setInterval(() => {
    tiempo--;
    timerElement.textContent = formatoTiempo(tiempo);

    localStorage.setItem("tiempoRestante", tiempo);

    if (tiempo <= 0) {
      clearInterval(window.cuentaAtras);
      timerElement.textContent = "00:00";
      localStorage.removeItem("tiempoRestante");
      alert("¡Se acabó el tiempo, agente!");
    }
  }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  const timerElement = document.getElementById("timer");
  if (timerElement) {
    iniciarTemporizador();
  }
});
//BOTONES PISTA
const pelusa = document.querySelector(".pelusa");
const pista = document.querySelector(".chat-left");
const closePista = document.querySelector(".closepista");
closePista.addEventListener("click", () => {
  pista.style.display = "none";
  closePista.style.display = "none";
});
pelusa.addEventListener("click", () => {
  pista.style.display = "flex";
  closePista.style.display = "flex";
});

//BOTONES PISTA1
const btnparchment1 = document.querySelector(".parchment-1");
const divparchment1 = document.querySelector(".parchment1");
const closePista1 = document.querySelector(".closepista1");
btnparchment1.addEventListener("click", () => {
  divparchment1.style.display = "flex";
  closePista1.style.display = "flex";
});
closePista1.addEventListener("click", () => {
  divparchment1.style.display = "none";
  closePista1.style.display = "none";
});
//BOTONES PISTA2
const btnparchment2 = document.querySelector(".parchment-2");
const divparchment2 = document.querySelector(".parchment2");
const closePista2 = document.querySelector(".closepista2");
btnparchment2.addEventListener("click", () => {
  divparchment2.style.display = "flex";
  closePista2.style.display = "flex";
});
closePista2.addEventListener("click", () => {
  divparchment2.style.display = "none";
  closePista2.style.display = "none";
});
