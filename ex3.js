const fs = require('fs');
const path = require('path')

const lerFaturamento = () =>{
    try {
      const caminhoJson = path.join(__dirname, 'dados.json');
      const dados = fs.readFileSync(caminhoJson, 'utf-8'); 
      return JSON.parse(dados); 
    } catch (erro) {
      console.error('Erro ao ler o arquivo JSON:', erro);
      return [];
    }
  }

  const calcularMenorFaturamento = (dados) => {
    const diasComFaturamento = dados.filter((dia) => dia.valor > 0);
    const menorFaturamento = Math.min(...diasComFaturamento.map((dia) => dia.valor));
    const diaMenorFaturamento = diasComFaturamento.find((dia) => dia.valor === menorFaturamento);
    return { valor: menorFaturamento, dia: diaMenorFaturamento.dia };
  }
  
 
  const calcularMaiorFaturamento= (dados) => {
    const diasComFaturamento = dados.filter((dia) => dia.valor > 0);
    const maiorFaturamento = Math.max(...diasComFaturamento.map((dia) => dia.valor));
    const diaMaiorFaturamento = diasComFaturamento.find((dia) => dia.valor === maiorFaturamento);
    return { valor: maiorFaturamento, dia: diaMaiorFaturamento.dia };
  }
  
 
  const calcularMediaMensal = (dados) => {
    const diasComFaturamento = dados.filter((dia) => dia.valor > 0);
    const somaFaturamento = diasComFaturamento.reduce((total, dia) => total + dia.valor, 0);
    return somaFaturamento / diasComFaturamento.length;
  }
  
 
  function contarDiasSuperiorMedia(dados, media) {
    return dados.filter((dia) => dia.valor > media).map(dia => dia.dia);
  }
  
  // Executa o programa
  const faturamentoMensal = lerFaturamento();
  
  if (faturamentoMensal.length === 0) {
    console.log('Valor mensal igual a 0');
  } else {
    const { valor: menorFaturamento, dia: diaMenorFaturamento } = calcularMenorFaturamento(faturamentoMensal);
    const { valor: maiorFaturamento, dia: diaMaiorFaturamento } = calcularMaiorFaturamento(faturamentoMensal);
    const mediaMensal = calcularMediaMensal(faturamentoMensal);
    const diasSuperiorMedia = contarDiasSuperiorMedia(faturamentoMensal, mediaMensal);
  
    // Exibe os resultados
    console.log(`Menor faturamento ocorreu no dia ${diaMenorFaturamento} com valor de ${menorFaturamento.toFixed(2)}`);
    console.log(`Maior faturamento ocorreu no dia ${diaMaiorFaturamento} com valor de ${maiorFaturamento.toFixed(2)}`);
    console.log(`Número de dias com faturamento superior à média mensal: ${diasSuperiorMedia.length}`);
    console.log(`Dias com faturamento superior à média: ${diasSuperiorMedia.join(', ')}`);
  }