const fibonacci = (numero) => {
    if (numero < 0) return false; // Números negativos não fazem parte da sequência de Fibonacci.
  
    let primeiro = 0; 
    let segundo = 1; 
  
    if (numero === primeiro || numero === segundo) return true; // 0 e 1 estão na sequência.
  
    let proximoNumero = primeiro + segundo;
  
    // Calcular a sequência de Fibonacci até que o próximo número seja maior ou igual ao número informado.
    while (proximoNumero <= numero) {
      if (proximoNumero === numero) return true; // Se o número informado for encontrado na sequência e sai do loop.
      primeiro = segundo;
      segundo = proximoNumero;
      proximoNumero = primeiro + segundo;
    }
  
    return false; // Se o loop terminar sem encontrar o número, ele não está na sequência.
  }

  //Número pré-determinado usado para o teste, altere este valor para testar com outros números

  const numeroFibonacci = 16; 
  
  if (fibonacci(numeroFibonacci)) {
    console.log(`${numeroFibonacci} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${numeroFibonacci} NÃO pertence à sequência de Fibonacci.`);
  }