//localStorage.clear();

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
  let tiempoGuardado = localStorage.getItem("tiempoRestante") || 300;

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
      const sound = new Audio("img/soundexplosion.mp3");
      sound.volume = 1;
      sound.play();
      window.location.href = "explosion.html";
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
const btnchest = document.querySelector(".chest");
const divchest = document.querySelector(".chestdiv");
const closechest = document.querySelector(".closechest");
btnchest.addEventListener("click", () => {
  divchest.style.display = "flex";
  closechest.style.display = "flex";
});
closechest.addEventListener("click", () => {
  divchest.style.display = "none";
  closechest.style.display = "none";
});
const send = document.querySelector(".send");
send.addEventListener("click", () => {
  let code = 426;
  const n1 = document.querySelector(".n1").value;
  const n2 = document.querySelector(".n2").value;
  const n3 = document.querySelector(".n3").value;

  let codesent = Number(n1 + n2 + n3);
  console.log(codesent);
  console.log(n1);
  console.log(n2);
  console.log(n3);
  if (code === codesent) {
    window.location.href = "pantallafinal.html";
  } else {
    alert("Codigo incorrecto");
  }
});

const clue1btn = document.querySelector(".clue1btn");
const textclue1 = document.querySelector(".textclue1");
const clue2btn = document.querySelector(".clue2btn");
const textclue2 = document.querySelector(".textclue2");
const clue3btn = document.querySelector(".clue3btn");
const textclue3 = document.querySelector(".textclue3");
const solutionbtn = document.querySelector(".solutionbtn");
const textsolution = document.querySelector(".textsolution");
clue1btn.addEventListener("click", () => {
  textclue1.style.display = "flex";
  clue2btn.style.display = "block";
});
clue2btn.addEventListener("click", () => {
  textclue2.style.display = "flex";
  clue3btn.style.display = "block";
});
clue3btn.addEventListener("click", () => {
  textclue3.style.display = "flex";
  solutionbtn.style.display = "block";
});
solutionbtn.addEventListener("click", () => {
  textsolution.style.display = "flex";
});

window.onload = () => {
  const sound = document.getElementById("explosion-sound");
  sound.volume = 5;
  sound.play();
  document.getElementById("explosion-sound").play();
};
