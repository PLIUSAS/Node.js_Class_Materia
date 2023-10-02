const HOST = "http://localhost:3000";
const output = document.querySelector("#userSection");
const ascDsc = document.querySelector("#ascDsc");
const sortOrder = document.querySelector("#sortOrder");
0;
async function getData() {
  const response = await fetch(HOST + "/users");
  try {
    if (response.ok) {
      const data = await response.json();
      output.innerHTML = "";
      data.forEach((el) => {
        addDataToHtml(el);
      });
    } else {
      console.log("Kazkokia klaida");
    }
  } catch (error) {
    console.log(error.message);
  }
}
getData("1");

function addDataToHtml(data) {
  const serviceName = data.service_id?.name || "No Membership";

  const container = document.createElement("div");
  container.classList.add("user-cont", "box-shadow");

  const h3 = document.createElement("h3");
  h3.textContent = data.name + " " + data.surname;

  const pEmail = document.createElement("p");
  pEmail.textContent = "Email Address: ";
  const spanEmail = document.createElement("span");
  spanEmail.textContent = data.email;
  spanEmail.style.color = "blue";
  pEmail.append(spanEmail);

  const pMembership = document.createElement("p");
  pMembership.textContent = "Membership: ";
  const spanMembership = document.createElement("span");
  spanMembership.textContent = serviceName;
  spanMembership.style.color = "blue";
  pMembership.append(spanMembership);

  const pId = document.createElement("p");
  pId.textContent = `id: ${data._id}`;
  container.append(h3, pEmail, pMembership, pId);
  output.append(container);
}

ascDsc.addEventListener("click", () => {
  if (sortOrder.textContent === "ASC") {
    getData("-1");
    sortOrder.textContent = "DSC";
  } else if (sortOrder.textContent === "DSC") {
    getData("1");
    sortOrder.textContent = "ASC";
  }
});
