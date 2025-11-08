async function executarFila(funcoes) {
  for (const fn of funcoes) {
    const resultado = await fn();
    console.log(resultado);
  }
}


async function teste() {
  const f1 = () => new Promise(r => setTimeout(() => r("Primeira"), 1000));
  const f2 = () => new Promise(r => setTimeout(() => r("Segunda"), 500));

  await executarFila([f1, f2]);
}
teste();
