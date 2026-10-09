// Exercicio 6: criar uma lista de textos e percorrer seus itens.
const linguagens: string[] = ["HTML", "CSS", "JavaScript"];
linguagens.push("TypeScript");

for (const linguagem of linguagens) {
  console.log(`Estou estudando: ${linguagem}`);
}

console.log("Total de itens:", linguagens.length);

// Mantem as variaveis deste arquivo separadas dos outros exemplos.
export {};
