// pages/cadastro.js
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Cadastro() {
  const router = useRouter();
  const { valorConta, parcelas, valorParcela, valorFinal } = router.query;

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    dataNascimento: '',
    cpf: '',
    telefone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <head>
        <title>Cadastro</title>
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
          .field input {
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
            display: inline-block;
            width: 48%;
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
          .btn-secondary {
            background-color: #ccc;
          }
        `}</style>
      </head>
      <body>
        <div className="container">
          <h2>Parcelamento</h2>
          <div className="field">
            <label htmlFor="nome">Nome Completo</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="email">Seu E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="dataNascimento">Data de Nascimento</label>
            <input
              type="date"
              id="dataNascimento"
              name="dataNascimento"
              value={formData.dataNascimento}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="cpf">Seu CPF</label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="telefone">Número de Telefone</label>
            <input
              type="text"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
            />
          </div>
          <div className="summary">
            <p><strong>RESUMO DA SUA COMPRA</strong></p>
            <p>Valor da sua conta: R$ {valorConta}</p>
            <p>Forma de Pagamento: Cartão de Crédito</p>
            <p>Parcelamento: {parcelas}X R$ {valorParcela}</p>
            <p className="final-value">VALOR FINAL: R$ {valorFinal}</p>
          </div>
          <div>
            <button className="btn">CONTINUAR</button>
            <button className="btn btn-secondary" onClick={() => router.back()}>VOLTAR</button>
          </div>
        </div>
      </body>
    </div>
  );
}
