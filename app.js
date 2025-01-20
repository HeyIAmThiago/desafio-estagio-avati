const submitForm = document.querySelector(".submitForm");
const [emailInputBox, passwordInputBox] =
  document.querySelectorAll(".inputForm");

const form = document.querySelector("form");
const dictErrors = {
  empty_email: "O endereço de email não pode ser vazio!",
  empty_password: "O campo de senha não pode ser vazio!",
  invalid_email: "O sistema aceita apenas e-mails válidos!",
  invalid_password: "Não use senhas pequenas!",
};

const [emailErrorBox, passwordErrorBox] =
  document.querySelectorAll(".errorForm");

submitForm.addEventListener("click", (event) => {
  event.preventDefault();

  const isEmailInvalid = !validarEmail(emailInputBox.value.trim());

  const isPasswordLengthLessThan6Chars =
    passwordInputBox.value.trim().length <= 6;
  const isPasswordLengthAtLeastOneChar =
    passwordInputBox.value.trim().length >= 1;
  const isEmailBoxEmpty = !emailInputBox.value.trim();
  const isPasswordBoxEmpty = !passwordInputBox.value.trim();
  const isPasswordLengthAtLeastSixChars =
    passwordInputBox.value.trim().length > 6;
  const isEmailValid = validarEmail(emailInputBox.value.trim());
  emailErrorBox.textContent = "";
  passwordErrorBox.textContent = "";

  if (isEmailInvalid) {
    emailErrorBox.textContent = dictErrors.invalid_email;
  }

  if (isPasswordLengthLessThan6Chars && isPasswordLengthAtLeastOneChar) {
    passwordErrorBox.textContent = dictErrors.invalid_password;
  }
  if (isEmailBoxEmpty) {
    emailErrorBox.textContent = dictErrors.empty_email;
  }

  if (isPasswordBoxEmpty) {
    passwordErrorBox.textContent = dictErrors.empty_password;
  }

  if (isPasswordLengthAtLeastSixChars && isEmailValid) {
    form.innerHTML = HTMLTemplateRestrictedArea;
  }
});

// regex para validar um e-mail (reutilizado)
function validarEmail(email) {
  const regex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

const HTMLTemplateRestrictedArea = `
<p class="congratsForm">Seja bem-vindo!</p>


<button class="returnForm">Voltar</button>

`;

emailInputBox.addEventListener("keydown", () => {
  emailErrorBox.textContent = "";
});

passwordInputBox.addEventListener("keydown", () => {
  passwordErrorBox.textContent = "";
});
