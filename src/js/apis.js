const infoTrading = document.getElementById("infoTrading");
const DataTrading = document.getElementById("DataTrading");

async function ApisLoad() {
  try {
    const url = "https://api.npoint.io/5aed6cb2e07430ef14a4/informacionTrading";
    const res = await fetch(url);
    const data = await res.json();
    RenderApis(data);
  } catch (ero) {
    console.log(ero);
  }
}
function RenderApis(data) {
  infoTrading.innerHTML = "";
  data.forEach((item) => {
    let newdiv = document.createElement("div");

    newdiv.className = "";
    newdiv.innerHTML = `<h2 class="subtitle">${item.title}</h2> <div class="card-ligh"> <img src="${item.img}" class="imgs"/> </div>`;
    if (item.id === 2) {
      newdiv.innerHTML = `<h2 class="subtitle">${item.title}</h2> <div class="card-dark"> <img src="${item.img}" class="imgs"/> </div>`;
    }
    newdiv.addEventListener("click", () => {
      window.location.href =`../html/detalles.html?id=${item.id}`
      console.log(window.location)
    });
    infoTrading.appendChild(newdiv);
  });
}

ApisLoad();

async function ApisLoadpersonal() {
  try {
    const url = "https://api.npoint.io/5aed6cb2e07430ef14a4/datosTrading";
    const res = await fetch(url);
    const data = await res.json();
    RenderApisPersonal(data);
  } catch (ero) {
    console.log(ero);
  }
}

function RenderApisPersonal(data) {
  DataTrading.innerHTML = "";
  data.forEach((item) => {
    let newdiv = document.createElement("div");

    newdiv.className = "";
    newdiv.innerHTML = `<h2 class="subtitle">${item.title}</h2> <div class="card-dark"> <img src="${item.img}" class="imgs"/> </div>`;
    if (item.id === 5) {
      newdiv.innerHTML = `<h2 class="subtitle">${item.title}</h2> <div class="card-ligh"> <img src="${item.img}" class="imgs"/> </div>`;
    }
    newdiv.addEventListener("click", () => {
      window.location.href =`/src/html/detalles.html?id=${item.id}`
      console.log(window.location)
    });
    DataTrading.appendChild(newdiv);
  });
}
ApisLoadpersonal()
export { ApisLoad ,ApisLoadpersonal};
