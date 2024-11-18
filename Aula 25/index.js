function realizarCalculo() {
 
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacao = document.getElementById('operation').value;

    let resultado;


    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, insira dois números válidos.');
        return;
    }

    switch (operacao) {
        case 'soma':
            resultado = num1 + num2;
            break;
        case 'subtracao':
            resultado = num1 - num2;
            break;
        case 'multiplicacao':
            resultado = num1 * num2;
            break;
        case 'divisao':
            if (num2 === 0) {
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            alert('Operação inválida.');
            return;
    }


    document.getElementById('resultado').innerText = resultado;
}
