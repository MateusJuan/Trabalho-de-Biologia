    function abrirPainel(titulo, texto){
      document.getElementById("tituloPainel").innerText = titulo;
      document.getElementById("textoPainel").innerText = texto;
      document.getElementById("painel").style.display = "block";
      document.getElementById("overlay").style.display = "block";
    }

    function fecharPainel(){
      document.getElementById("painel").style.display = "none";
      document.getElementById("overlay").style.display = "none";
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