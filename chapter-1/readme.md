<h1 align="center">FinApi - Financeia</h1>

<p align="center">
  <a href="#">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">
</p>

## Requisitos

- [X] Deve ser possível criar umma conta
- [X] Deve ser possível buscar o extrato bancário do cliente
- [X] Deve ser possível realizar um depósito
- [X] Deve ser possível realizar um saque
- [X] Deve ser possível buscar o extrato bancário do cliente por data
- [X] Deve ser possível atualizar dados da conta do cliente
- [X] Deve ser possível obter dados da conta do cliente
- [X] Deve ser possível deletar uma conta

## Regras de negócio

- [X] Não deve ser possível cadastrar uma conta com CPF já existente
- [X] Não deve ser possível fazer depósito em uma conta não existente
- [X] Não deve ser possível buscar extrato em uma conta não existente
- [X] Não deve ser possível fazer saque em uma conta não existente
- [X] Não deve ser possível excluir uma conta não existente
- [X] Não deve ser possível fazer saque quando o saldo for insuficiente

## Iniciando a aplicação

```bash
# build
$ yarn build

# production mode
$ yarn start

# development
$ yarn start:dev

# tests 
$ yarn test
```

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---