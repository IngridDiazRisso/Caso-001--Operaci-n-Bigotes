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
