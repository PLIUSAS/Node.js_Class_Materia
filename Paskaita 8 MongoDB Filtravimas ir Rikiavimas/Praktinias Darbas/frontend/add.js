document.forms[0].addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target.elements.name.value.trim();
  const age = Number(e.target.elements.age.value);
  const type = e.target.elements.type.value;

  fetch("http://localhost:3000/pets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, age, type }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
});
