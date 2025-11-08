function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj; 

  
  const clone = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    clone[key] = deepClone(obj[key]);
  }

  return clone;
}


const obj = { nome: "Ana", endereco: { cidade: "Luanda" } };
const copia = deepClone(obj);

copia.endereco.cidade = "Malanje";
console.log(obj.endereco.cidade); 
