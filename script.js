document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    status.textContent = "Confira os campos destacados e tente novamente.";
    status.className = "mt-3 mb-0 text-danger";
    return;
  }
  status.textContent = "Mensagem validada! Este portfólio é estático e não envia mensagens; configure um serviço de formulário ou e-mail para receber contatos.";
  status.className = "mt-3 mb-0 text-success";
  form.classList.add("was-validated");
});
