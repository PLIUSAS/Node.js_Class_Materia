const response = await fetch("http://localhost:3000/pets")
  .then((response) => response.json())
  .then((data) => dataDisplay(data));
function dataDisplay(data) {
  const table = document.querySelector("tbody");
  table.innerHTML = "";

  data.forEach((pet) => {
    const tr = table.insertRow();
    const td1 = tr.insertCell();
    td1.textContent = pet.name;

    const td2 = tr.insertCell();
    td1.textContent = pet.type;

    const td3 = tr.insertCell();
    td1.textContent = pet.age;
  });
}

document.getElementById("age").addEventListener("click", (e) => {
  const text = e.target.textContent;
  if (text.includes("Esc")) {
    e.target.textContent = text.replace("Asc", "Dsc");
    fetch("http://localhost:3000/pets/dsc")
      .then((res) => res.json())
      .then((data) => dataDisplay(data));
  } else {
    e.target.textContent = text.replace("Dsc", "Asc");
    fetch("http://localhost:3000/pets/asc")
      .then((res) => res.json())
      .then((data) => dataDisplay(data));
  }
});
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.target.classList.toggle("selected");
  });
});
