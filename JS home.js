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

// Contador regresivo (80 años)
function actualizarContador() {
  const ahora = new Date();
  const fechaFinal = new Date(ahora.getFullYear() + 80, ahora.getMonth(), ahora.getDate());
  
  const diff = fechaFinal - ahora;
  const segundos = Math.floor(diff / 1000);
  
  const años = Math.floor(segundos / (365 * 24 * 60 * 60));
  const meses = Math.floor((segundos % (365 * 24 * 60 * 60)) / (30 * 24 * 60 * 60));
  const días = Math.floor((segundos % (30 * 24 * 60 * 60)) / (24 * 60 * 60));
  const horas = Math.floor((segundos % (24 * 60 * 60)) / (60 * 60));
  const minutos = Math.floor((segundos % (60 * 60)) / 60);
  const segs = Math.floor(segundos % 60);

  // Actualizar DOM
  document.getElementById("years").textContent = String(años).padStart(2, '0');
  document.getElementById("months").textContent = String(meses).padStart(2, '0');
  document.getElementById("days").textContent = String(días).padStart(2, '0');
  document.getElementById("hours").textContent = String(horas).padStart(2, '0');
  document.getElementById("minutes").textContent = String(minutos).padStart(2, '0');
  document.getElementById("seconds").textContent = String(segs).padStart(2, '0');
}

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