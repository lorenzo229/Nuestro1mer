// Iniciar página (con confeti)
function iniciar() {
  const audio = document.getElementById('music');
  audio.play();
  
  // Guardar preferencia de música
  localStorage.setItem('musicEnabled', 'true');
  
  // Ocultar pantalla de inicio
  document.getElementById('inicio').classList.add('hidden');
  setTimeout(() => {
    document.getElementById('contenido').style.display = 'block';
    lanzarConfeti(); // Efecto confeti
  }, 1000);
}

function actualizarContador() {
  const ahora = new Date();
  const inicio = new Date(2024, 4, 2, 11, 51, 0); // 2 de mayo de 2024, 11:51 AM

  // Calcular años, meses y días exactos
  let años = ahora.getFullYear() - inicio.getFullYear();
  let meses = ahora.getMonth() - inicio.getMonth();
  let días = ahora.getDate() - inicio.getDate();

  if (días < 0) {
    meses--;
    const ultimoDiaMesAnterior = new Date(ahora.getFullYear(), ahora.getMonth(), 0).getDate();
    días += ultimoDiaMesAnterior;
  }

  if (meses < 0) {
    años--;
    meses += 12;
  }

  // Calcular tiempo (horas, minutos, segundos) exacto
  const inicioMismoDia = new Date(
    ahora.getFullYear(),
    ahora.getMonth(),
    ahora.getDate(),
    inicio.getHours(),
    inicio.getMinutes(),
    inicio.getSeconds()
  );

  let diffTiempo = ahora - inicioMismoDia;
  if (diffTiempo < 0) {
    días--;
    diffTiempo += 24 * 60 * 60 * 1000;
  }

  const horas = Math.floor(diffTiempo / (1000 * 60 * 60));
  const minutos = Math.floor((diffTiempo % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diffTiempo % (1000 * 60)) / 1000);

  // Actualizar DOM
  document.getElementById("years").textContent = String(años).padStart(2, '0');
  document.getElementById("months").textContent = String(meses).padStart(2, '0');
  document.getElementById("days").textContent = String(días).padStart(2, '0');
  document.getElementById("hours").textContent = String(horas).padStart(2, '0');
  document.getElementById("minutes").textContent = String(minutos).padStart(2, '0');
  document.getElementById("seconds").textContent = String(segundos).padStart(2, '0');
}

setInterval(actualizarContador, 1000);




// Toggle de música con localStorage
function toggleMusic() {
  const audio = document.getElementById('music');
  const toggle = document.getElementById('toggle-music');
  const status = document.querySelector('.music-status');
  
  if (toggle.checked) {
    audio.play();
    status.textContent = 'Música activada';
    localStorage.setItem('musicEnabled', 'true');
  } else {
    audio.pause();
    status.textContent = 'Música desactivada';
    localStorage.setItem('musicEnabled', 'false');
  }
}

// Efecto confeti (al iniciar)
function lanzarConfeti() {
  const canvas = document.getElementById('confetti');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  // ... (código del confeti, puedes usar una librería como canvas-confetti)
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  // Cargar estado de la música
  const musicEnabled = localStorage.getItem('musicEnabled') !== 'false';
  document.getElementById('toggle-music').checked = musicEnabled;
  
  // Iniciar contador
  actualizarContador();
  setInterval(actualizarContador, 1000);
});
