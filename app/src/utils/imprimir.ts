import { Imprimivel } from "./imprimivel.js";

export function imprimir(...objetos: Imprimivel[]) {
  for (let objeto of objetos) {
    console.log(objeto.paraTexto());
  }
}

//Polimorfismo, capacidade de um objeto ser referenciável de múltiplas formas
