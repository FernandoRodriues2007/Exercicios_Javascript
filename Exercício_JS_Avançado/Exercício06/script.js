const cartas = ["A", "A", "B", "B", "C", "C", "D", "D"];
cartas.sort(() => Math.random() - 0.5);

let viradas = [];
let tentativas = 0;

function virarCarta(indice) {
  if (viradas.includes(indice)) return;
  viradas.push(indice);
  console.log(`Carta ${indice}: ${cartas[indice]}`);

  if (viradas.length === 2) {
    tentativas++;
    const [a, b] = viradas;
    if (cartas[a] === cartas[b]) {
      console.log(" Par encontrado!");
    } else {
      console.log(" Errado! Virando novamente...");
    }
    viradas = [];
  }
}
