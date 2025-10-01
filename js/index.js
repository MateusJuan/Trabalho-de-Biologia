    function abrirPainel(titulo, texto, link) {
      document.getElementById("tituloPainel").innerText = titulo;
      document.getElementById("textoPainel").innerText = texto;

      const btnSaibaMais = document.getElementById("btnSaibaMais");
      btnSaibaMais.onclick = () => {
        window.location.href = link; // abre a página específica
      };

      document.getElementById("overlay").style.display = "block";
      document.getElementById("painel").style.display = "block";
    }

    function fecharPainel() {
      document.getElementById("overlay").style.display = "none";
      document.getElementById("painel").style.display = "none";
    }


    function responder(correto){
      let res = document.getElementById("resultado");
      if(correto){
        res.innerHTML = "✅ Correto! A vida poderia ter vindo do espaço.";
        res.style.color = "lightgreen";
      } else {
        res.innerHTML = "❌ Ops! Essa não é a resposta certa.";
        res.style.color = "red";
      }
    }

    function rolarCarrossel(direcao) {
        const carrossel = document.getElementById("meuCarrossel");
        const larguraCard = 320; // largura aproximada do card + gap
        carrossel.scrollBy({
            left: direcao * larguraCard,
            behavior: "smooth"
        });
    }
