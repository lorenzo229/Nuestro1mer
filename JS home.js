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
  const fechaInicio = new Date("2024-05-02T11:51:00");

  const diff = ahora - fechaInicio; // diferencia en milisegundos
  const segundos = Math.floor(diff / 1000);

  const años = Math.floor(segundos / (365.25 * 24 * 60 * 60));
  const meses = Math.floor((segundos % (365.25 * 24 * 60 * 60)) / (30.44 * 24 * 60 * 60));
  const días = Math.floor((segundos % (30.44 * 24 * 60 * 60)) / (24 * 60 * 60));
  const horas = Math.floor((segundos % (24 * 60 * 60)) / (60 * 60));
  const minutos = Math.floor((segundos % (60 * 60)) / 60);
  const segs = Math.floor(segundos % 60);

  document.getElementById("contador").textContent = 
    `${años} años, ${meses} meses, ${días} días, ${horas} horas, ${minutos} minutos, ${segs} segundos`;
}

// Actualiza el contador cada segundo
setInterval(actualizarContador, 1000);

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
