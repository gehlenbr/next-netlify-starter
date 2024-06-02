import Link from 'next/link';
import { useState } from 'react'; 
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Home() {
  const [valorConta, setValorConta] = useState(1500);
  const [parcelas, setParcelas] = useState(10);

  const handleValorContaChange = (e) => {
    const value = e.target.value.replace('R$', '').replace('.', '').replace(',', '.');
    setValorConta(parseFloat(value) || 0);
  };

  const handleParcelasChange = (e) => {
    setParcelas(parseInt(e.target.value) || 1);
  };

  const valorParcela = valorConta / parcelas;

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        valorConta: valorConta.toFixed(2),
        parcelas,
        valorParcela: valorParcela.toFixed(2),
        valorFinal: (valorParcela * parcelas).toFixed(2),
      }),
    });

    const session = await response.json();

    // Redireciona para o Checkout do Stripe
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <div className="container">
      <head>
        <title>Parcelamento</title>
        <style>{`
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          .container {
            width: 100%;
            max-width: 500px;
            margin: 20px;
            background-color: #fff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          h2 {
            font-size: 28px;
            margin-bottom: 20px;
            text-align: center;
            color: #333;
          }
          .field {
            margin-bottom: 20px;
          }
          .field label {
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
            color: #555;
          }
          .field input,
          .field select {
            width: 100%;
            padding: 12px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
            color: #333;
            box-sizing: border-box;
          }
          .field input:focus,
          .field select:focus {
            border-color: #0070f3;
            outline: none;
            box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.2);
          }
          .summary {
            background-color: #f5f5f5;
            padding: 20px;
            border-radius: 8px;
            margin-top: 20px;
            color: #333;
          }
          .summary p {
            margin: 0;
            line-height: 1.6;
          }
          .summary .final-value {
            font-size: 24px;
            font-weight: bold;
            margin-top: 10px;
          }
          .btn {
            display: block;
            width: 100%;
            padding: 15px;
            text-align: center;
            background-color: #0070f3;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-top: 20px;
            font-size: 18px;
            transition: background-color 0.3s ease;
          }
          .btn:hover {
            background-color: #005bb5;
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
          <button className="btn" onClick={handleCheckout}>CONTINUAR</button>
        </div>
      </body>
    </div>
  );
}
