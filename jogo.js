function obterEscolhaUsuario() {
  const opcao = prompt("Escolha: pedra, papel ou tesoura (ou 'sair' para encerrar):").toLowerCase();
  const opcoesValidas = ["pedra", "papel", "tesoura", "sair"];
  if (!opcoesValidas.includes(opcao)) {
    alert("Escolha inválida. Tente novamente.");
    return obterEscolhaUsuario();
  }
  return opcao;
}

function gerarEscolhaComputador() {
  const opcoes = ["pedra", "papel", "tesoura"];
  const indice = Math.floor(Math.random() * 3);
  return opcoes[indice];
}

function determinarVencedor(usuario, computador) {
  if (usuario === computador) {
    return "Empate!";
  }

  if (
    (usuario === "pedra" && computador === "tesoura") ||
    (usuario === "tesoura" && computador === "papel") ||
    (usuario === "papel" && computador === "pedra")
  ) {
    return "Você venceu!";
  } else {
    return "O computador venceu!";
  }
}

function jogarRodada() {
  const usuario = obterEscolhaUsuario();
  if (usuario === "sair") {
    alert("Jogo encerrado. Até a próxima!");
    return false; // para parar o jogo
  }

  const computador = gerarEscolhaComputador();
  alert(`Você escolheu: ${usuario}\nO computador escolheu: ${computador}`);
  alert(determinarVencedor(usuario, computador));

  return true; // para continuar o jogo
}

function iniciarJogo() {
  alert("Bem-vindo ao Pedra, Papel e Tesoura!");
  while (jogarRodada()) {
    // continua jogando enquanto o usuário não digitar "sair"
  }
}

iniciarJogo();
