import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [valorConta, setValorConta] = useState(1500);
  const [parcelas, setParcelas] = useState(10);

  const handleValorContaChange = (e) => {
    const value = e.target.value.replace('R$', '').replace(',', '.');
    setValorConta(parseFloat(value) || 0);
  };

  const handleParcelasChange = (e) => {
    setParcelas(parseInt(e.target.value) || 1);
  };

  const valorParcela = valorConta / parcelas;

  return (
    <div>
      <head>
        <title>Parcelamento</title>
        <style>{`
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
        `}</style>
      </head>
      <body>
        <div className="container">
          <h2>Parcelamento</h2>
          <div className="field">
            <label htmlFor="valor-conta">Valor da Conta</label>
            <input
              type="text"
              id="valor-conta"
              value={`R$ ${valorConta.toFixed(2).replace('.', ',')}`}
              onChange={handleValorContaChange}
            />
          </div>
          <div className="field">
            <label htmlFor="forma-pagamento">Forma de Pagamento</label>
            <select id="forma-pagamento">
              <option value="cartao">Cartão de Crédito</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="cupom-desconto">Cupom de Desconto</label>
            <input type="text" id="cupom-desconto" />
          </div>
          <div className="field">
            <label htmlFor="forma-parcelamento">Forma de Parcelamento</label>
            <select id="forma-parcelamento" value={parcelas} onChange={handleParcelasChange}>
              {[...Array(10).keys()].map((n) => (
                <option key={n + 1} value={n + 1}>
                  {n + 1}X R$ {(valorConta / (n + 1)).toFixed(2).replace('.', ',')}
                </option>
              ))}
            </select>
          </div>
          <div className="summary">
            <p><strong>RESUMO DA SUA COMPRA</strong></p>
            <p>Valor da sua conta: R$ {valorConta.toFixed(2).replace('.', ',')}</p>
            <p>Forma de Pagamento: Cartão de Crédito</p>
            <p>Parcelamento: {parcelas}X R$ {valorParcela.toFixed(2).replace('.', ',')}</p>
            <p className="final-value">VALOR FINAL: R$ {(valorParcela * parcelas).toFixed(2).replace('.', ',')}</p>
          </div>
          <Link href={{
            pathname: '/cadastro',
            query: {
              valorConta: valorConta.toFixed(2),
              parcelas,
              valorParcela: valorParcela.toFixed(2),
              valorFinal: (valorParcela * parcelas).toFixed(2),
            },
          }}>
            <button className="btn">CONTINUAR</button>
          </Link>
        </div>
      </body>
    </div>
  );
}
