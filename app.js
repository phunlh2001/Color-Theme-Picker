const colors = document.querySelectorAll(".dot");
const h1 = document.querySelector("h1");

colors.forEach((color) => {
  color.addEventListener("click", (e) => {
    let choice = e.target.id;

    if (choice === "yellow") {
      document.body.style.background = "var(--yellow)";
      h1.style.color = "var(--yellow)";
    }
    if (choice === "red") {
      document.body.style.background = "var(--red)";
      h1.style.color = "var(--red)";
    }
    if (choice === "green") {
      document.body.style.background = "var(--green)";
      h1.style.color = "var(--green)";
    }
    if (choice === "blue") {
      document.body.style.background = "var(--blue)";
      h1.style.color = "var(--blue)";
    }
  });
});
