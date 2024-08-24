/* Desenvolva seu código abaixo */

function playRockPaperScissor(player1, player2) {
  player1 = player1.toLowerCase();
  player2 = player2.toLowerCase();

  if (
    (player1 === "pedra" && player2 === "tesoura") ||
    (player1 === "papel" && player2 === "pedra") ||
    (player1 === "tesoura" && player2 === "papel")
  ) {
    return "Jogador 1 venceu!";
  } else if (
    (player2 === "pedra" && player1 === "tesoura") ||
    (player2 === "papel" && player1 === "pedra") ||
    (player2 === "tesoura" && player1 === "papel")
  ) {
    return "Jogador 2 venceu!";
  }
  return "Empate!";
}
console.log(playRockPaperScissor("Pedra", "Tesoura"));
