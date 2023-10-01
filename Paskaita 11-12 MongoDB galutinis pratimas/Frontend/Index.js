const output = document.querySelector("#membershipSection");
const HOST = "http://localhost:3000";
async function getData() {
  const response = await fetch(HOST + "/memberships");
  try {
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      output.innerHTML = "";
      data.forEach((el) => {
        addDataToHtml(el);
      });
    }
  } catch (error) {
    console.log(error.message);
  }
}

getData();

function addDataToHtml(data) {
  const container = document.createElement("div");
  container.classList.add("membership-container", "box-shadow");
  const h5 = document.createElement("h5");
  h5.textContent = `$${data.price} ${data.name}`;
  const p = document.createElement("p");
  p.textContent = data.description;

  const div1 = document.createElement("div");
  div1.append(h5, p);
  const div2 = document.createElement("div");
  div2.classList.add("flex-end");
  const i = document.createElement("i");
  i.classList.add("fa-solid", "fa-trash");
  i.id = data._id;
  // console.log(data._id);
  i.addEventListener("click", async () => {
    try {
      const response = await fetch(HOST + "/memberships" + i.id, {
        method: "DELETE",
      });
      if (response.ok) {
        container.remove();
      } else {
        console.log("Kazkokia klaida");
      }
    } catch (error) {
      console.log(error.message);
    }
  });
  div2.append(i);
  container.append(div1, div2);
  output.append(container);
}
