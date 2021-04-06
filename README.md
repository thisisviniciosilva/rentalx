# RentX

## 1. Requisitos da Aplicação

---

### 1.1 Cadastro de Carros

#### 1.1.1 RF

- Deve ser possível cadastrar um novo carro
- Deve ser possível listar todas as categorias

#### 1.1.2 RN

- Não deve ser possível cadastrar um carro com uma placa já existente
- Não deve ser possível alterar a placa de um carro já cadastrado
- O carro deve ser cadastrado com disponibilidade por padrão
- O usuário responsável pelo cadastro de carros deve ser um usuário administrador

### 1.2 Listagem de Carros

#### 1.2.1 RF

- Deve ser possível listar todos os carros disponíveis
- Deve ser possível listar todos os carros disponíveis pelo nome do carro
- Deve ser possível listar todos os carros disponíveis pelo nome da marca do carro
- Deve ser possível listar todos os carros disponíveis pelo nome da categoria do carro

#### 1.2.2 RN

- O usuário não precisa fazer _login_ na aplicação para listar os carros disponíveis

### 1.3 Cadastro de Especificações do Carro

#### 1.3.1 RF

- Deve ser possível cadastrar uma especificação para um carro
- Deve ser possível listar todas as especificações
- Deve ser possível listar todos os carros

#### 1.3.2 RN

- Não deve ser possível cadastrar uma especificação para um carro não cadastrado
- Não deve ser possível cadastrar uma especificação já existente para um mesmo carro
- O usuário responsável pelo cadastro de especificações deve ser um usuário administrador

### 1.4 Cadastro de Imagens do Carro

#### 1.4.1 RF

- Deve ser possível cadastrar a imagem do carro
- Deve ser possível listar todos os carros

#### 1.4.2 RNF

- Utilizar o Multer para realizar o upload dos arquivos

#### 1.4.3 RN

- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro
- O usuário responsável pelo cadastro de imagens deve ser um usuário administrador

### 1.5 Aluguel de Carro

#### 1.5.1 RF

- Deve ser possível alugar um carro

#### 1.5.2 RN

- O aluguel deve ter duração mínima de 24 horas (um dia)
- Não deve ser possível alugar um carro que já tenha uma solicitação de aluguel em aberto
- Não deve ser possível que o usuário abra uma nova solicitação de aluguel caso este já tenha uma em aberto
