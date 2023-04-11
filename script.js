function marcaColuna(e, col) {
  const coluna = document.getElementsByClassName(col);

  for (let i = 0; i < coluna.length; i++) {
    const celula = coluna.item(i);
    celula.classList.add("marcaCol");
  }
}

function desmarcaColuna(e, col) {
  const coluna = document.getElementsByClassName(col);

  for (let i = 0; i < coluna.length; i++) {
    const celula = coluna.item(i);
    celula.classList.remove("marcaCol");
  }
}

function clicou(e) {
  const cell = e.target;
  if (cell.textContent) {
    let nivel = "";
    if (cell.classList.contains("col4")) {
      nivel = "1";
    } else if (cell.classList.contains("col5")) {
      nivel = "2";
    } else if (cell.classList.contains("col6")) {
      nivel = "3";
    } else if (cell.classList.contains("col7")) {
      nivel = "4";
    }
    const out = document.getElementsByClassName("padraoDeVenvimento")[0];
    const step = cell.textContent.padStart(2, "0");
    out.innerHTML = `<span class="nivel">D</span><span class="capac">${nivel}</span><span class="padrao">${step}</span>`;
    console.log(out.innerHTML);
  }
}

function marcaCliques() {
  const table = document.getElementsByTagName("table")[0];
  const tds = document.getElementsByTagName("td");
  for (let i = 0; i < tds.length; i++) {
    const celula = tds.item(i);
    celula.addEventListener("click", clicou);
  }
}
