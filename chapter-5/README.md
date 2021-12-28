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
- Ao realizar um aluguel, o status do carro deverá ser alterado para indisponível.

# Devolução de um carro

**RF**
- Deve ser possível realizar a devolução de um carro

**RN**
- Se o carro for devolvido com menos de 24 horas, deverá ser cobrado diária completa.
- Ao realizar devolução, o carro deverá ser liberado para outro aluguel.
- Ao realizar devolução, o usuário deverá ser liberado para outro aluguel.
- Ao relizar devolução, deve ser calculado o total do aluguel.
- Caso o horário de devolução seja superior ao horário previsto de entrega, deverá ser cobrado multa proporcional aos dias de atraso.
- Caso haja multa, deverá ser somado ao total do aluguel.
- O usuário deve estar logado na aplicação.