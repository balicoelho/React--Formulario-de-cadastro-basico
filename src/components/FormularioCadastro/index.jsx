import { useState } from "react";
import "./FormularioCadastro.css";

function FormularioCadastro({ messageError, verificarCpf, aoSalvar }) {
  const [name, setName] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  let [erros, setErros] = useState(false);
  let [classe, setClasse] = useState(false);

  const aoSubmeter = (ev) => {
    ev.preventDefault();
    if (!erros) {
      aoSalvar({ name, sobrenome, cpf, promocoes, novidades });
    }
  };

  const eventoBlur = (ev) => {
    const valido = verificarCpf(cpf);
    setErros(valido);
    let classe = valido ? "bordaRed" : null;
    setClasse(classe);
  };

  return (
    <div className="container">
      <h1>Formulario cadastro</h1>
      <form onSubmit={aoSubmeter} className="container-form">
        <div className="inputs">
          <label>Nome</label>
          <input
            id="nome"
            onChange={(ev) => {
              setName(ev.target.value);
            }}
            value={name}
            required
          />
        </div>
        <div className="inputs">
          <label>Sobrenome</label>
          <input
            id="sobrenome"
            onChange={(ev) => {
              setSobrenome(ev.target.value);
            }}
            value={sobrenome}
            required
          />
        </div>
        <div className="inputs">
          <label>CPF</label>
          <input
            id="cpf"
            type="number"
            onChange={(ev) => {
              setCpf(ev.target.value);
            }}
            value={cpf}
            onBlur={eventoBlur}
            className={classe ? "bordaRed" : null}
            required
          />
          {erros ? <p>{messageError}</p> : null}
        </div>
        <div className="inputs">
          <label>Promoções</label>
          <input
            id="promocoes"
            type="checkbox"
            onChange={(ev) => {
              setPromocoes(ev.target.checked);
            }}
            checked={promocoes}
          />
        </div>
        <div className="inputs">
          <label>Novidades</label>
          <input
            id="novidades"
            type="checkbox"
            onChange={(ev) => {
              setNovidades(ev.target.checked);
            }}
            checked={novidades}
          />
        </div>

        <button>Enviar</button>
      </form>
    </div>
  );
}

export default FormularioCadastro;
