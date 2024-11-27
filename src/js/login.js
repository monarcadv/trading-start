// login
const emailLogin = document.getElementById("Email");
const claveLogin = document.getElementById("clave");
//
const RexEmail = /[a-zA-Z0-9_]+\@[a-zA-Z]+\.[a-zA-Z]/;
const RexClave = /[a-zA-Z_]*[0-9]/;
// exportacion
export default document
  .getElementById("logins")
  .addEventListener("click", (e) => {
    e.preventDefault();
    if (RexEmail.test(emailLogin.value)) {
      emailLogin.classList.add("valido");
      emailLogin.classList.remove("fomulario");
      emailLogin.classList.remove("invalido");
    } else {
      emailLogin.classList.add("invalido");
      emailLogin.classList.remove("fomulario");
      emailLogin.classList.remove("valido");
    }

    if (RexClave.test(claveLogin.value)) {
      claveLogin.classList.add("valido");
      claveLogin.classList.remove("fomulario");
      claveLogin.classList.remove("invalido");
    } else {
      claveLogin.classList.add("invalido");
      claveLogin.classList.remove("fomulario");
      claveLogin.classList.remove("valido");
    }
    if (RexEmail.test(emailLogin.value) && RexClave.test(claveLogin.value)) {
      setTimeout(() => {
        window.location.href = "../../index.html";
      }, 1000);
    }
    //
    setTimeout(() => {
      emailLogin.classList.remove("invalido");
      emailLogin.classList.add("fomulario");

      claveLogin.classList.remove("invalido");
      claveLogin.classList.add("fomulario");
    }, 1500);
  });
