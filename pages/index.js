<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parcelamento</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f7f7f7;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 400px;
            margin: 50px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .container h2 {
            font-size: 24px;
            margin-bottom: 20px;
            text-align: center;
        }
        .field {
            margin-bottom: 20px;
        }
        .field label {
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
        }
        .field input,
        .field select {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        .summary {
            background-color: #ff7f50;
            color: #fff;
            padding: 15px;
            border-radius: 8px;
            margin-top: 20px;
        }
        .summary p {
            margin: 0;
            line-height: 1.6;
        }
        .summary .final-value {
            font-size: 20px;
            font-weight: bold;
            margin-top: 10px;
        }
        .btn {
            display: block;
            width: 100%;
            padding: 10px;
            text-align: center;
            background-color: #000;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-top: 20px;
            font-size: 16px;
        }
    </style>
    <script>
        function updateSummary() {
            const valorConta = parseFloat(document.getElementById('valor-conta').value.replace('R$', '').replace(',', '.')) || 0;
            const parcelas = parseFloat(document.getElementById('forma-parcelamento').value) || 0;
            const valorParcela = valorConta / parcelas;

            document.getElementById('resumo-valor-conta').textContent = `R$ ${valorConta.toFixed(2).replace('.', ',')}`;
            document.getElementById('resumo-parcelamento').textContent = `${parcelas}X R$ ${valorParcela.toFixed(2).replace('.', ',')}`;
            document.getElementById('valor-final').textContent = `R$ ${(valorParcela * parcelas).toFixed(2).replace('.', ',')}`;
        }
    </script>
</head>
<body>
    <div class="container">
        <h2>Parcelamento</h2>
        <div class="field">
            <label for="valor-conta">Valor da Conta</label>
            <input type="text" id="valor-conta" placeholder="R$ 0,00" oninput="updateSummary()">
        </div>
        <div class="field">
            <label for="forma-pagamento">Forma de Pagamento</label>
            <select id="forma-pagamento">
                <option value="cartao">Cartão de Crédito</option>
            </select>
        </div>
        <div class="field">
            <label for="cupom-desconto">Cupom de Desconto</label>
            <input type="text" id="cupom-desconto">
        </div>
        <div class="field">
            <label for="forma-parcelamento">Forma de Parcelamento</label>
            <select id="forma-parcelamento" onchange="updateSummary()">
                <option value="1">1X</option>
                <option value="2">2X</option>
                <option value="3">3
