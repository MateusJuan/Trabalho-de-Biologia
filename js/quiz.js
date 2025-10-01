const perguntas = [
  {
    pergunta: "Qual teoria defende que a vida veio do espaço?",
    opcoes: ["Panspermia", "Miller-Urey", "Sopa Primordial", "Criacionismo"],
    resposta: "Panspermia"
  },
  {
    pergunta: "Quem realizou o experimento que gerou aminoácidos em laboratório?",
    opcoes: ["Oparin e Haldane", "Miller e Urey", "Charles Darwin", "Einstein"],
    resposta: "Miller e Urey"
  },
  {
    pergunta: "Segundo o Criacionismo, quem criou a vida?",
    opcoes: ["O acaso", "Um Criador", "Experimento de laboratório", "A natureza"],
    resposta: "Um Criador"
  },
  // adicione mais perguntas aqui
];

let participante = "";
let pontuacao = 0;
let perguntaAtual = 0;
let tempoInicio;
let tempoFim;

function iniciarQuiz() {
  participante = document.getElementById("nome").value.trim();
  if(participante === "") {
    alert("Por favor, digite seu nome.");
    return;
  }
  document.getElementById("nomeContainer").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  tempoInicio = new Date();
  mostrarPergunta();
}

function mostrarPergunta() {
  const perguntaObj = perguntas[perguntaAtual];
  const container = document.getElementById("perguntaContainer");
  container.innerHTML = `<p>${perguntaObj.pergunta}</p>`;
  perguntaObj.opcoes.forEach(opcao => {
    const botao = document.createElement("button");
    botao.textContent = opcao;
    botao.onclick = () => responder(opcao);
    container.appendChild(botao);
  });
}

function responder(opcao) {
  if(opcao === perguntas[perguntaAtual].resposta) pontuacao++;
  // vai para a próxima pergunta
  perguntaAtual++;
  if(perguntaAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    finalizarQuiz();
  }
}

function proximaPergunta() {
  mostrarPergunta();
}

function finalizarQuiz() {
  tempoFim = new Date();
  const tempoTotal = ((tempoFim - tempoInicio)/1000).toFixed(2); // segundos
  document.getElementById("quiz").style.display = "none";
  const resultado = document.getElementById("resultado");
  resultado.style.display = "block";
  resultado.innerHTML = `Parabéns, ${participante}!<br>
                         Sua pontuação: ${pontuacao} de ${perguntas.length}<br>
                         Tempo total: ${tempoTotal} segundos`;
  // Aqui você pode enviar os dados para o servidor ou salvar localmente
  // ex: salvarResultado(participante, pontuacao, tempoTotal);
}
