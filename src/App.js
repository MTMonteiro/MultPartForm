import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import "fontsource-roboto";

import { Container, Typography } from "@material-ui/core";

import { validarCPF, validarSenha } from "./models/cadastro";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de cadastro
        </Typography>

        <ValidacoesCadastro.Provider
          value={{ cpf: validarCPF, senha: validarSenha }} // podemos passar o default no context
        >
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>

        <Typography variant="h3" component="h1" align="center">
          Formulário de cadastro sem Provider
        </Typography>
        {/* utilizando dados default passados pelo context */}
          <FormularioCadastro aoEnviar={aoEnviarForm} />
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
