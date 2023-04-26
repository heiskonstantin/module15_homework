const button = document.querySelector(".button");
const icon = document.querySelectorAll(".icon");

button.addEventListener("click", () => {
  icon.forEach((icon) => {
    icon.classList.toggle("active");
  });
});
