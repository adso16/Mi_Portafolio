// Scroll suave y resaltar sección activa
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-menu a");

  const changeActiveLink = () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  };

// 🔥 Modo oscuro
  const temaoscuro = document.querySelector(".tema-oscuro");

  temaoscuro.addEventListener("click", () => {
    document.body.classList.toggle("modo-oscuro"); // activa/desactiva clase
    temaoscuro.textContent = document.body.classList.contains("modo-oscuro")
      ? "☀️ modo claro"
      : "🌙 modo oscuro";
  });

  window.addEventListener("scroll", changeActiveLink);
});
