**RF** => requisitos funcionais
**RNF** => Requisitos nao funcionais
**RN** => Regra de negocio



# cadastro de carros


**RF** 
Deve ser possivel cadastrar um novo carro 
deve ser possivel listar todas as categorias

**RNF** =

**RN** 
nao deve ser possicel cadastrar um carro com uma placa ja existente
nao deve ser possivel alterar a placa de um carro ja cadastrado
o carro devev ser cadastrado com disponibilidade por padrao
o usuario reponsavel pelo cadastro deve ser administrador

# listagem de carros
 
**RF** 
deve ser posssivel listar todos os carros disponiveis
deve ser possivel listar todos os carros disponibilidade por categoria
deve ser possivel listar todos os carros disponibilidade por marca
deve ser possivel listar todos os carros disponibilidade por carro

**RN** 
o usuario nao precisa estar logado no sistema

# cadastro de especificação mo carro

**RF** 
deve ser possivel cadastrar uma nova especificaçao para um carro 
deve ser possivel listar todas as especificaçao
deve ser possivel listar todos os carros 

**RN** 
nao deve ser possivel cadastrar uma especificaçao para um carro nao cadastrado
nao deve ser possivel cadastrar uma especificaçao ja existente para o mesmo carro
o usuario reponssavel pelo cadastro deve ser administrador


# cadastro de imagens carros

**RF** 
deve ser possivel cadastrar a imagem do carro

**RNF**
utiliazar o multer para upload dos arquivos

**RN**
o usuario deve poder cadastrar mais de uma imagem para o mesmo carro
o usuario reponsavel pelo cadastro deve ser administrador


# aluguel carro

**RF**
deve ser possivel cadastrar um aluguel

**RNF**

**RN**
o alugel deve ter duraçao minima de 24 horas
nao deve ser possivel cadastrar um aluguel caso ja exista um aberto para o mesmo usuario
nao deve ser possivel cadastrar um aluguel caso ja exista um aberto para o mesmo carro

