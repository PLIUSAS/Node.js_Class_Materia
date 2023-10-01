const HOST = "http://localhost:3000";

const nameInput = document.querySelector("#firstName");
const surnameInput = document.querySelector("#lastName");
const emailInput = document.querySelector("#email");
const membershipInput = document.querySelector("#membership");
const formSubmit = document.querySelector("#userForm");
const button = document.querySelector("button");

formSubmit.addEventListener("submit", async (e) => {
  e.preventDefault();
  await addUser();
});

button.addEventListener("click", () => {
  alert("User successfully added");
  window.location.href = "./add.html";
});

async function addUser() {
  const name = nameInput.value;
  const surname = surnameInput.value;
  const email = emailInput.value;
  const service_id = membershipInput.value;
  const response = await fetch(HOST + "/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      surname: surname,
      email: email,
      service_id: service_id,
    }),
  });
  if (response.ok) {
    alert("User successfully added");
    const data = await response.json();
  } else {
    console.log("Something went wrong");
  }
}

membershipInput.addEventListener("change", () => {
  console.log(membershipInput.value);
});
async function getServices() {
  const response = await fetch(HOST + "/memberships");
  try {
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      membershipInput.innerHTML = "";
      data.forEach((el) => {
        const option = document.createElement("option");
        option.value = el._id;
        option.textContent = el.name;

        membershipInput.append(option);
      });
    }
  } catch (error) {
    console.log(error.message);
  }
}
getServices();
