const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("nav-open");
  menuToggle.classList.toggle("active", isOpen);
  menuToggle.setAttribute("aria-expanded", isOpen);

  /* Tell the rest of the page that the mobile menu is open so the
     sticky search bar can step aside. */
  document.body.classList.toggle("menu-open", isOpen);
});
