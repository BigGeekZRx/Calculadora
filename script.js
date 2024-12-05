// display
const display = document.getElementById('display')
//numero atual que o usuaro esta digitando 
let currentInput = ''
//botao e clicado
function buttonClick(value) {
    if (value === 'C') {
//limpa tudo 
        currentInput = ''
        display.textContent = '0'
    } else if (value === '=') {
//calcula o resultado 
        try {
            currentInput = eval(currentInput) // calcula a expressao 
            display.textContent = currentInput // mostra o resultado 
        } catch {
            display.textContent = 'erro' //mostra "Erro" se algo esta errado 
        }
    } else {
        // adiciona o numero ou operador ao input 
        currentInput += value
        display.textContent = currentInput
    }
}