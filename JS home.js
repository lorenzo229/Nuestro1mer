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

// Contador progresivo desde el 2 de mayo de 2024 a las 11:51 AM
function actualizarContador() {
  const ahora = new Date();
  const fechaInicio = new Date(2024, 4, 2, 11, 51, 0); // Mayo = 4 (meses van de 0 a 11)

  // Calcular la diferencia en milisegundos
  const diff = ahora - fechaInicio;

  // Convertir la diferencia a años, meses y días
  const totalSegundos = Math.floor(diff / 1000);
  const totalDias = Math.floor(totalSegundos / (24 * 60 * 60));
  
  const años = Math.floor(totalDias / 365);
  const meses = Math.floor((totalDias % 365) / 30);
  const días = totalDias % 30;

  // Calcular horas, minutos y segundos
  const horas = Math.floor((totalSegundos % (24 * 60 * 60)) / (60 * 60));
  const minutos = Math.floor((totalSegundos % (60 * 60)) / 60);
  const segs = totalSegundos % 60;

  // Actualizar DOM
  document.getElementById("years").textContent = String(años).padStart(2, '0');
  document.getElementById("months").textContent = String(meses).padStart(2, '0');
  document.getElementById("days").textContent = String(días).padStart(2, '0');
  document.getElementById("hours").textContent = String(horas).padStart(2, '0');
  document.getElementById("minutes").textContent = String(minutos).padStart(2, '0');
  document.getElementById("seconds").textContent = String(segs).padStart(2, '0');
}

// Llamar a la función cada segundo
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
