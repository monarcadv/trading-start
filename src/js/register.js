const nombre = document.getElementById("nombre");
const apelldio = document.getElementById("apellido");
const email = document.getElementById("Email");
const clave = document.getElementById("clave");

const RexfullName = /[a-zA-Z0-9_]/;
const RexEmail = /[a-zA-Z0-9_]+\@[a-zA-Z]+\.[a-zA-Z]/;
const RexClave = /[a-zA-Z_]*[0-9]/;

export default document
  .getElementById("registers")
  .addEventListener("click", (e) => {
    e.preventDefault();
    // nombres
    if (RexfullName.test(nombre.value)) {
      nombre.classList.add("valido");
      nombre.classList.remove("fomulario");
      nombre.classList.remove("invalido");
    } else {
      nombre.classList.add("invalido");
      nombre.classList.remove("fomulario");
      nombre.classList.remove("valido");
    }
    // apelldio
    if (RexfullName.test(apelldio.value)) {
      apelldio.classList.add("valido");
      apelldio.classList.remove("fomulario");
      apelldio.classList.remove("invalido");
    } else {
      apelldio.classList.add("invalido");
      apelldio.classList.remove("fomulario");
      apelldio.classList.remove("valido");
    }
    //Email
    if (RexEmail.test(email.value)) {
      email.classList.add("valido");
      email.classList.remove("fomulario");
      email.classList.remove("invalido");
    } else {
      email.classList.add("invalido");
      email.classList.remove("fomulario");
      email.classList.remove("valido");
    }
    // clave
    if (RexClave.test(clave.value)) {
      clave.classList.add("valido");
      clave.classList.remove("fomulario");
      clave.classList.remove("invalido");
    } else {
      clave.classList.add("invalido");
      clave.classList.remove("fomulario");
      clave.classList.remove("valido");
    }

    // if(RexfullName.test(nombre.value) && RexfullName.test(apelldio.value) && RexEmail.test(email.value) && RexClave.test(clave.value)){

    //     setTimeout(()=>{
    //         window.location.href = '../../index.html'
    //     },1000)

    // }
    //

    setTimeout(() => {
      nombre.classList.remove("invalido");
      nombre.classList.add("fomulario");

      apelldio.classList.remove("invalido");
      apelldio.classList.add("fomulario");

      email.classList.remove("invalido");
      email.classList.add("fomulario");

      clave.classList.remove("invalido");
      clave.classList.add("fomulario");
    }, 1500);
  });
