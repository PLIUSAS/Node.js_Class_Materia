const MemberUl = document.querySelector("#Memberships");

async function getMemberships() {
  MemberUl.innerHTML = "";
  try {
    const response = await fetch("http://localhost:3000/memberships");
    if (response.ok) {
      const memberships = await response.json();
      memberships.forEach((membership) => {
        const cards = document.createElement("div");
        cards.classList.add("card");
        const span = document.createElement("span");
        span.textContent = " $" + membership.price;
        const h3 = document.createElement("h3");
        h3.textContent = membership.name;
        const p = document.createElement("p");
        p.textContent = membership.description;
        const div2 = document.createElement("div");
        const span2 = document.createElement("span");
        const iconElement = document.createElement("i");
        iconElement.className = "fa-solid fa-trash";
        iconElement.style.color = "#ff0000";
        h3.append(span);
        span2.append(iconElement);
        div2.append(span2);
        cards.append(h3, p, div2);
        MemberUl.append(cards);
      });
    } else {
      alert("Something went wrong");
    }
  } catch (error) {
    console.log(error);
  }
}
getMemberships();

document
  .getElementById("MembershipsButton")
  .addEventListener("click", getMemberships);
