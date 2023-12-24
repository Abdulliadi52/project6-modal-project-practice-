const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const container = document.getElementById("container");

openBtn.addEventListener("click", function () {
  container.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  container.classList.remove("active");
});
console.log(openBtn, closeBtn, container);
