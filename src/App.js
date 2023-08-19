import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro";

function App() {
  return (
    <FormularioCadastro
      verificarCpf={verificarCpf}
      messageError={"CPF invalido"}
      aoSalvar={aoSalvar}
    />
  );
}

const aoSalvar = (infos) => {
  console.log(infos);
};

const verificarCpf = (cpf) => {
  if (cpf.length !== 11) {
    return true;
  } else return false;
};

export default App;
