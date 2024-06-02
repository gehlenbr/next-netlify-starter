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
</head>
<body>
    <div class="container">
        <h2>Parcelamento</h2>
        <div class="field">
            <label for="valor-conta">Valor da Conta</label>
            <input type="text" id="valor-conta" value="R$ 1.500,00" disabled>
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
            <select id="forma-parcelamento">
                <option value="10x">10X R$ 199,02</option>
            </select>
        </div>
        <div class="summary">
            <p><strong>RESUMO DA SUA COMPRA</strong></p>
            <p>Valor da sua conta: R$ 1.500,00</p>
            <p>Forma de Pagamento: Cartão de Crédito</p>
            <p>Parcelamento: 10X R$ 199,02</p>
            <p class="final-value">VALOR FINAL: R$ 1.990,20</p>
        </div>
        <button class="btn">CONTINUAR</button>
    </div>
</body>
</html>

