const shadow = document.createElement("div");
shadow.id = "cursor-shadow";
document.body.appendChild(shadow);

document.addEventListener("mousemove", (e) => {
  shadow.style.transform = `translate(${e.clientX - 40}px, ${e.clientY - 40}px)`;
});

const menuItems = document.querySelectorAll("#menu a");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((menuItem) => menuItem.classList.remove("active"));
    
    item.classList.add("active");
  });
});



const modal = document.getElementById("loginModal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");


openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});


closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});


window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

