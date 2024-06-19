function validarCorreo() {
    const correoInput = document.getElementById("correo");
    const correoErrorMessage = document.getElementById("correo-error-message");
    const correo = correoInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correo === "") {
      correoErrorMessage.textContent = "Por favor, ingresa un correo electrónico";
      correoInput.classList.add("error");
      return false;
    } else if (!emailRegex.test(correo)) {
      correoErrorMessage.textContent = "El correo electrónico ingresado no es válido";
      correoInput.classList.add("error");
      return false;
    } else {
      correoErrorMessage.textContent = "";
      correoInput.classList.remove("error");
      return true;
    }
}

function validarClave() {
    const claveInput = document.getElementById("clave");
    const claveErrorMessage = document.getElementById("clave-error-message");
    const clave = claveInput.value.trim();
    const claveRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (clave === "") {
      claveErrorMessage.textContent = "Por favor, ingresa una contraseña";
      claveInput.classList.add("error");
      return false;
    } else if (!claveRegex.test(clave)) {
      claveErrorMessage.textContent = "La contraseña no es segura";
      showTooltip();
      claveInput.classList.add("error");
      return false;
    } else {
      claveErrorMessage.textContent = "";
      claveInput.classList.remove("error");
      return true;
    }
}

// Lógica para mostrar/ocultar la contraseña
const claveInput = document.getElementById("clave");
const ojoSpan = document.getElementById("ojo");
const ojoIcon = ojoSpan.querySelector("i");

ojoSpan.addEventListener("click", function() {
  if (claveInput.type === "password") {
    claveInput.type = "text";
    ojoIcon.classList.remove("fa-eye");
    ojoIcon.classList.add("fa-eye-slash");
  } else {
    claveInput.type = "password";
    ojoIcon.classList.remove("fa-eye-slash");
    ojoIcon.classList.add("fa-eye");
  }
});

// Lógica para mostrar el tooltip
function showTooltip() {
    var tooltipElement = document.getElementById("tooltiptext");
    tooltipElement.classList.toggle("visible");
    // Ocultar el tooltip después de 3 segundos
    setTimeout(function() {
        tooltipElement.classList.remove("visible");
    }, 3000);
}

//Clikear botón continuar registro
const continueButton = document.getElementById("continuar_registro");
continueButton.addEventListener("click", function() {
    if (validarCorreo() && validarClave()) {
        //alert("¡Registro exitoso!");
        window.location.href = "registro_perfil.html";
    }
});