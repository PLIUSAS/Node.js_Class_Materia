const HOST = "http://localhost:3000";
const nameInput = document.querySelector("#membershipName");
const priceInput = document.querySelector("#membershipPrice");
const formSubmit = document.querySelector("#serviceForm");
const descriptionInput = document.querySelector("#description");
const button = document.querySelector(".button");

formSubmit.addEventListener("submit", async (e) => {
  e.preventDefault();
  addMembership();
});
button.addEventListener("click", () => {
  window.location.href = "./index.html";
});

async function addMembership() {
  try {
    const price = priceInput.value;
    const name = nameInput.value;
    const description = descriptionInput.value;
    const response = await fetch(HOST + "/memberships", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        price: price,
        description: description,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.log("kazkokia klaida");
    }
  } catch (error) {
    console.log(error.message);
  }
}

// ----------
