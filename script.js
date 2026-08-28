function calcularMedia() {
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);
  const nota4 = parseFloat(document.getElementById("nota4").value);

  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
    document.getElementById("resultado").value = "";
    return;
  }

  const media = (nota1 + nota2 + nota3 + nota4) / 4;
  document.getElementById("resultado").value = media.toFixed(2);
}

document.getElementById("nota1").addEventListener("input", calcularMedia);
document.getElementById("nota2").addEventListener("input", calcularMedia);
document.getElementById("nota3").addEventListener("input", calcularMedia);
document.getElementById("nota4").addEventListener("input", calcularMedia);

let nomeSalvo = "";

document.getElementById("btnresultado").addEventListener("click", function () {
  const media = document.getElementById("resultado").value;
  nomeSalvo = document.getElementById("nomeAluno").value.trim();

  if (media === "") {
    alert("Preencha todas as notas antes de continuar!");
    return;
  }

  localStorage.setItem("mediaFinal", media);
  window.location.href = "media.html";
});
