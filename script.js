function calcular() {
    let precoAlcol = parseFloat(document.getElementById('precoAlcool').value);
    let consumoAlcool = parseFloat(document.getElementById('consumoAlcool').value);
    let precoGasolina = parseFloat(document.getElementById('precoGasolina').value);
    let consumoGasolina = parseFloat(document.getElementById('consumoGasolina').value);

    if (isNaN(precoAlcol) || isNaN(consumoAlcool) || isNaN(precoGasolina) || isNaN(consumoGasolina)) {
        alert('Preencha todos os campos corretamente');
        return;
    }

    let custoPorKmAlcool = (precoAlcol / consumoAlcool).toFixed(2);
    let custoPorKmGasolina = (precoGasolina / consumoGasolina).toFixed(2);

    let resultado = custoPorKmAlcool < custoPorKmGasolina ? 'vale mais a pena abastecer com Álcool, gastando R$' + custoPorKmAlcool + ' por km.': 'vale mais a pena abastecer com Gasolina R$'+ custoPorKmGasolina + ' por km.';
    document.getElementById('resultado').innerText = resultado;
}