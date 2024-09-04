const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  

  const calcularPercentuais = (faturamento) => {
    const valorTotal = Object.values(faturamento).reduce((total, valor) => total + valor, 0);
    const percentuais = {};
  
    for (const estado in faturamento) {
      const valorEstado = faturamento[estado];
      const percentual = (valorEstado / valorTotal) * 100;
      percentuais[estado] = percentual.toFixed(2); // Arredonda para 2 casas decimais
    }
  
    return percentuais;
  }
  
 
  const percentuais = calcularPercentuais(faturamentoPorEstado);
  
 
  console.log('Percentual de representação por estado:');
  for (const estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado]}%`);
  }

