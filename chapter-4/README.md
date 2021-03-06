# Siglas

`RF`
     
    Requisitos funcionais.
`RNF`
     
    Requisistos não funcionais.
`RN`
    
    Regras de negócio.

# Cadastro de carro

**RF**
- Deve ser possível cadastrar um novo carro

**RN**
- Não deve ser possível cadastrar um carro com uma placa já existente.
- O carro deve ser cadastrado, por padrão, com disponibilidade.
* O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**RF**
- Deve ser possível listar todos os carros disponíveis.
- Deve ser possível listar todos os carros disponiveis pelo nome da categoria.
- Deve ser possível listar todos os carros disponiveis pelo nome da marca.
- Deve ser possível listar todos os carros disponiveis pelo nome do carro.

**RN**
- O usuário não precisa estar logado no sistema.

# Cadastro de especificação no carro

**RF**
- Deve ser possível cadastrar uma especificação para um carro.

**RN**
- Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

**RF**
- Deve ser possível cadastrar a imagem do carro

**RNF**
- Utilizar o multer para upload dos arquivos

**RN**
- Deve ser possível cadastrar mais de uma imagem para um mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carro
**RF**
- Deve ser possível cadastrar um aluguel.

**RN**
- O aluguel deve ter duração mínima de 24 horas.
- Não deve ser possível cadastar um novo aluguel caso já exista um aberto o mesmo usuário.
- Não deve ser possível cadastar um novo aluguel caso já exista um aberto o mesmo carro.
- O usuário deve estar logado na aplicação.