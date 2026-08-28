window.addEventListener("DOMContentLoaded", function () {
  const media = parseFloat(localStorage.getItem("mediaFinal"));
  const elemento = document.getElementById("aprovacao");

  if (isNaN(media)) {
    elemento.textContent = "Nenhum resultado encontrado";
    elemento.classList.add("alert-secondary");
    return;
  }

  let status = "";
  let corClasse = "";

  if (media >= 6) {
    status = "Aprovado";
    corClasse = "alert-success";
  } else if (media >= 2) {
    status = "Exame";
    corClasse = "alert-warning";
  } else {
    status = "Reprovado";
    corClasse = "alert-danger";
  }

  elemento.textContent = status;
  elemento.classList.add(corClasse);
});