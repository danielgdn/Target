const contrario = (text) =>{
    let texto = "";
    for (let i = text.length -1; i >=0; i--){

        texto += text[i];
    }
       
      return console.log(texto)
        
    }

const frase = "Teste Target";

contrario(frase);