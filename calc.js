function insert(num)
// função para inserir números no campo "resultado"
{
   let numero = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numero + num;
}
function clean()
// limpa o paragrafo "resultado"
{
   document.getElementById('resultado').innerHTML = "";
}
function back()
// pega o número inteiro e diminui 1 caracter
{
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0 , resultado.length-1);
}
function calculate()
// função para calcular valores digitados no campo "resultado" incluindo sinais utilizando "eval"
{
    let resultado = document.getElementById('resultado').innerHTML;
     //if calcula caso haja uma equação digitada e ELSE mostra uma mensagem pedindo para inserir uma operação
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Insira uma operação";
    }

}