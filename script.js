//While =  enquanto

/*var x = 10;

while(x < 30) {
    document.write("<br> O valor do X é: " + x);

    x++;
}*/

// For = PARA

/*var valor = 30;

for(a = 0; a < valor; a++) {
 // Oque tiver aqui dentro
 document.write("<br> Valor do A é:" + a);

 console.log(a + 10);
}*/


// Switch

function pedir() {
    var valor = prompt("Digite um valor de 1 a 4");

    switch(Number(valor)) {
        case 1: 
           alert("Você escolheu 1 = Suco");
        break;
        case 2:
            alert("Você escolheu 2 = Agua gelada");
        break;
        case 3:
            alert("Você escolheu 3 = Sorvete");
        break;
        case 4:
            alert("Você chamou o garçom!");
        break;
        default:
            alert("Escolha uma opção entre 1 a 4");
        break;
    }
}

