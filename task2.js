const button = document.querySelector(".wh-button");

button.addEventListener("click", () => {
  alert(
    `width: ${document.documentElement.clientWidth} & height: ${document.documentElement.clientHeight} `
  );
});
