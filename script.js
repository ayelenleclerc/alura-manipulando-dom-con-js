const btn = document.querySelector("[data-form-btn]");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const input = document.querySelector("[data-form-input]");
  console.log(input.value);
});
