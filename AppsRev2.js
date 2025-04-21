
document.getElementById("dataForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    fetch("https://script.google.com/macros/s/AKfycby6a7S56_D5cMloEmS1vx5nU4KxygeLSkvcuibDANjg9RAWj_hZccYWLNZPPtHs3nUD/exec", {
        method: "POST",
        body: new URLSearchParams(formData)
    })
    .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error("Erro:", error));
});
    
document.getElementById("buscarDados").addEventListener("click", function() {
            const linha = 1;
            const coluna = 1;
            const numLinha = 35;
            const numColuna = 2;

            fetch(`https://script.google.com/macros/s/AKfycbwZsGuLh9Lv4vCzqc5n1wA4vHVrmZJZSO3cCySooq1nwB28N2oWaQrQbclRGUiQNoFw/exec?linha=${linha}&coluna=${coluna}&numLinha=${numLinha}&numColuna=${numColuna}`)
                .then(response => response.json())
                .then(data => {
                    let resultado = data.map(linha => linha.join(", ")).join("<br>");
                    document.getElementById("resultado").innerHTML = `Valores:<br>${resultado}`;
                })
               // .catch(error => console.error("Erro:", error));//
        });