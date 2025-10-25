document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !correo || !mensaje) {
    alert("⚠️ Por favor, completa todos los campos.");
    return;
  }

  alert("✅ Gracias, tu mensaje ha sido enviado correctamente.");
  e.target.reset();
});
