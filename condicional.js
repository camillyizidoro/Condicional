function media(){
    var val1= document.getElementById("valor1").value;
    var val2= document.getElementById("valor2").value;
    var result=(parseInt(val1) + parseInt(val2))/2;
    
    if(result >6)
    alert ("Sua média foi: " + result + " você está aprovado");
    else if(result==10)
    alert ("Sua média foi:" + result + "Você é um gênio!");
    else
    alert ("Sua média foi: " + result + " você está Reprovado");


}

function comparacao(){
    var val1= document.getElementById("valor1").value;
    var val2= document.getElementById("valor2").value;
    
    
    if (val1==val2)
    alert ("Os valores são iguais");
    else if (val1>val2)
    alert("Valor 1 é maior que o 2");
     else
     alert ("Valor 2 é maior que o 1");

}  