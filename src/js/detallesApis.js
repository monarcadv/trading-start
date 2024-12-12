const description = document.getElementById("description");
const dataDescription = document.getElementById("dataDescription");
function GetApis() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

async function datelli() {
  const id = GetApis();

  try {
    const response = await fetch(
      "https://api.npoint.io/5aed6cb2e07430ef14a4/informacionTrading"
    );
    const elementos = await response.json();
    const elemento = elementos.find((el) => el.id == id);
    if (elemento) {
      const bodys = elemento.body.replace(/\n/g, "<br/>");
      description.innerHTML = `<button id="stop" class="stops"><-</button><img src="${elemento.img}" class="look"/> <h1 class="title">${elemento.title}</h1> <div class="detailtitle">${bodys}</div>`;
      document.getElementById("stop").addEventListener("click", () => {
        window.location.href = "../../index.html";
      });
    }
  } catch {}
}
datelli();

async function datellipersonal() {
  const id = GetApis();

  try {
    const response = await fetch(
      "https://api.npoint.io/5aed6cb2e07430ef14a4/datosTrading"
    );
    const elementos = await response.json();
    const elemento = elementos.find((el) => el.id == id);
    if (elemento) {
      const bodys = elemento.body.replace(/\n/g, "<br/>");
      dataDescription.innerHTML = `<button id="stop" class="stops"><-</button><img src="${elemento.img}" class="look"/> <h1 class="title">${elemento.title}</h1> <div class="detailtitle">${bodys}</div> `;
      document.getElementById("stop").addEventListener("click", () => {
        window.location.href = "../../index.html";
      });
    }
  } catch {}
}

datellipersonal();
