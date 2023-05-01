<div align="center" style="margin: 20px; text-align: center">

![Alt text](assets/cover.png?raw=true "Capa Segurança de APIs com Node.js")

[Roger Felipe Nsk 🌐💻📱🛠️](https://linkedin.com/in/rogerfelipensk)
</div>

<!-- <div align="center" style="margin: 20px; text-align: center">
  <p align="center">
    <a href="#Baixar-e-instalar-as-dependências">Instalando dependências</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#Estrutura-do-projeto">Estrutura do projeto</a>&nbsp;&nbsp;&nbsp;
  </p>
</div> -->

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=git,ts,aws,nodejs,dynamodb,jest" />
  </a>
</p>

## Implementação de sistema de autenticação com AWS Cognito, DynamoDB e Serverless Framework
A implementação para este sistema, foi realizado com TypeScript e é executado no ambiente do Node.js v18. O AWS SDK versão 3 é utilizado para acessar e interagir com os serviços da AWS, como o AWS Cognito, DynamoDB e gerenciamento de credenciais de forma segura.

Uma das principais vantagens de usar a versão 3 do AWS SDK é a sua modularidade. Em vez de incluir todos os serviços da AWS em um único pacote, o SDK versão 3 permite que você instale apenas os módulos necessários para o seu aplicativo. Isso resulta em um menor tamanho do pacote e um tempo de inicialização mais rápido.

O Serverless Framework é utilizado para configurar e implantar a infraestrutura do aplicativo na AWS. Ele permite que você defina as funções, eventos, recursos e permissões do aplicativo em um arquivo serverless.yml. Com o Serverless Framework, é possível criar um ambiente escalável e seguro para o aplicativo, configurando facilmente o número de instâncias da função, o tempo limite de execução, o acesso aos recursos e muito mais.

O processo de implantação é gerenciado pelo Serverless Framework, que utiliza o AWS CloudFormation para criar e atualizar os recursos do aplicativo na AWS. O CloudFormation é uma ferramenta poderosa que permite que você crie e gerencie a infraestrutura como código. Ele também pode ser usado para criar e atualizar outros recursos na AWS, como buckets do S3, grupos de segurança do EC2 e muito mais.

Algumas configurações avançadas de Serverless podem ser usadas para melhorar a segurança, escalabilidade e desempenho do aplicativo. Por exemplo, você pode configurar o Lambda para usar o VPC, o que permite que ele acesse recursos em uma rede privada, ou definir políticas de controle de acesso baseadas em função para restringir o acesso aos recursos do aplicativo.

Por fim, após a implantação bem-sucedida do aplicativo, ele estará pronto para ser usado pelos usuários. Com o sistema de autenticação seguro e escalável, os usuários poderão se autenticar com suas credenciais do AWS Cognito e realizar operações CRUD em uma tabela do DynamoDB usando uma API REST.

## Arquitetura
A arquitetura do sistema consiste em um conjunto de funções Lambda que são acionadas por eventos do API Gateway. A API Gateway é configurada como o gatilho das funções Lambda, que por sua vez executam as operações CRUD na tabela do DynamoDB.

As funções Lambda são escritas em TypeScript e utilizam a biblioteca Middy para realizar o roteamento e validar configurações extras de segurança, como verificar se o usuário está incluído no grupo que pode realizar as operações. Além disso, as funções Lambda são protegidas pelo AWS Cognito como authorizer da API Gateway, o que adiciona uma camada extra de segurança e facilita a manutenção.

A tabela do DynamoDB é criada automaticamente através do plugin serverless-lift no formato single-table-design. Isso garante um design escalável e eficiente para a tabela, permitindo que todas as consultas sejam realizadas com baixa latência e alta disponibilidade.

A API REST possui rotas privadas que são protegidas com um API Key que é salvo no repositório de parâmetros da AWS. Isso é feito para garantir a segurança da das chaves da API e evitar acessos não autorizados. Para fazer o deploy, é necessário criar esses parâmetros na AWS Parameter Store e padronizá-los como está no arquivo /yml/custom.yml dentro dos objetos parameters e apiKeys. O objeto salvo na Parameter Store está no formato JSON.

## Pré requisitos
- Conta na AWS
- Node.js 18.x ou superior
- AWS-CLI
- Configuração serverless.yml

## Como usar

#### Baixar e instalar as dependências

- Instale as dependências do projeto

|         Com Yarn          |       Com Npm              |
|---------------------------|----------------------------|
|``` yarn install```    |``` npm install ```     |

#### Configurar as credenciais da AWS
- Crie um usuário na AWS com permissões de administrador e guarde as credenciais de acesso: Access Key ID e Secret Access Key
- Crie um profile com o nome "serverless" e configure as credenciais na sua máquina através do comando:
```aws configure --profile serverless```

#### Cognito
##### Criar um grupo de usuários no AWS Cognito
<div align="center" style="margin: 20px; text-align: center">
<table>

#### 01
![Alt text](assets/cognito/01.png?raw=true "Etapa cognito 1") 
#### 02
![Alt text](assets/cognito/02.png?raw=true "Etapa cognito 2")
#### 03
![Alt text](assets/cognito/03.png?raw=true "Etapa cognito 3")
#### 04
![Alt text](assets/cognito/04.png?raw=true "Etapa cognito 4")
#### 05
![Alt text](assets/cognito/05.png?raw=true "Etapa cognito 5")
#### 06
![Alt text](assets/cognito/06.png?raw=true "Etapa cognito 6")
#### 07
![Alt text](assets/cognito/07.png?raw=true "Etapa cognito 7")
#### 08
![Alt text](assets/cognito/08.png?raw=true "Etapa cognito 8")
#### 09
![Alt text](assets/cognito/09.png?raw=true "Etapa cognito 9")
#### 10
![Alt text](assets/cognito/10.png?raw=true "Etapa cognito 10")
#### 11. Você deve escolher um domínio que será utilizado para fazer login com o usuário criado no próximo passo
![Alt text](assets/cognito/11.png?raw=true "Etapa cognito 11")
#### 12
![Alt text](assets/cognito/12.png?raw=true "Etapa cognito 12")
#### 13. É importante cadastrar a url de redirecionamento como https://example.com, pois o domínio que será utilizado para fazer login é fictício e não existe
![Alt text](assets/cognito/13.png?raw=true "Etapa cognito 13")
#### 14
![Alt text](assets/cognito/14.png?raw=true "Etapa cognito 14")
</table>
</div>

##### Criar um usuário no AWS Cognito
<div align="center" style="margin: 20px; text-align: center">

#### 01 - Aperte em "Criar usuário"
![Alt text](assets/cognito/u01.png?raw=true "Etapa cognito u01")
#### 02 - Preencha os dados e clique em "Criar usuário"
![Alt text](assets/cognito/u02.png?raw=true "Etapa cognito u02")

</div>

#### Após criar o usuário, é necessário realizar o login com email e senha criados anteriormente, esse login é necessário pois no primeiro acesso será solicitado a troca de senha. Após trocar a senha, o usuário estará pronto para ser utilizado.
#### * Fazendo login
<div align="center" style="margin: 20px; text-align: center">

##### 1. Para realizar o login, é necessário alguns dados que são mostrados conforme imagens abaixo:
![Alt text](assets/cognito/login01.png?raw=true "Etapa cognito login01")
![Alt text](assets/cognito/login02.png?raw=true "Etapa cognito login02")

##### 2. Mude os dados da url abaixo para os dados que você obteve no passo anterior e acesse a url no navegador:
https://<DOMINIO_AQUI>/login?response_type=code&client_id=<ID_DO_CLIENTE>&redirect_uri=https%3A%2F%2Fexample.com

##### 3. Após acessar a url, você será redirecionado para a página de login do cognito, preencha os dados e clique em "Entrar" ou "Sign in", ele vai pedir para você criar a sua senha, guarde bem a senha que você criou, pois ela será utilizada para gerar o token de acesso da API.
![Alt text](assets/cognito/login03.png?raw=true "Etapa cognito login03")
</div>

#### Criar parametros na AWS Parameter Store
- Com as credenciais configuradas você pode facilmente criar os parâmetros na AWS Parameter Store
OBS: Lembre de trocar os dados no comando para os dados da sua configuração
- Para isso, basta executar o comando abaixo:

```bash
aws ssm put-parameter --region us-east-1 --profile serverless --name '/cursos/api-keys' --value '{"security-aws-cognito-api-gateway": "<API_KEY>","usagePlan": "<NOME_USAGE_PLAN>", "cognitoArn":"<COGNITO_ARN>"}'  --type SecureString
```

-  O comando acima irá criar um parâmetro na AWS Parameter Store com o nome/caminho "/cursos/api-keys" e o valor do parâmetro será um JSON com as chaves "security-aws-cognito-api-gateway" e "usagePlan". O valor da chave "security-aws-cognito-api-gateway" é o API Key que será usado para proteger as rotas privadas da API. O valor da chave "usagePlan" é o nome do plano de uso da API que será criado automaticamente pelo Serverless Framework.
- Obs 01: Você pode criar com o nome que desejar, só não pode esquecer de trocar a referência no arquivo /yml/custom.yml
- Obs 02: As configurações do serverless utilizam o nome do projeto para definir a variável da api key que é salva no Parameter Store. Por isso, é importante que o nome do projeto seja o mesmo que está no arquivo serverless.ts no item service.

#### Configurar o arquivo de variáveis de ambiente
- Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente conforme o arquivo .env.example
- O arquivo .env vai servir para carregar as variáveis de ambiente no ambiente local para testar as funções Lambda
- Obs: É necessário fazer o deploy primeiro para que seja criada a tabela do DynamoDB e as configurações do projeto para que possa testar as funções localmente

#### * Terminando de configurar o serverless
- Após ter criado o grupo de usuários e o usuário, é necessário configurar a Api Gateway para que ela utilize o Cognito para fazer a autenticação dos usuários.

- Vá na pasta /yml/custom.yml e altere os dados conforme o exemplo abaixo:
```yml
variables:
    ...
    deploy:
        cognitoArn: "arn da função"
    ...
```

#### Fazer o deploy do projeto
- No arquivo serverless.ts, no nível de provider, defina o profile conforme você configurou as credenciais do AWS CLI
- Pronto, agora já é possível realizar o deploy do projeto, basta executar o comando abaixo:

|         Com Yarn          |       Com Npm              |
|---------------------------|----------------------------|
|``` yarn deploy```    |``` npm run deploy ```     |

- Após o deploy, será criada a tabela no Dynamodb para que possamos finalmente testar localmente a API, vai ser criada a API Gateway, a função lambda, o cognito vai ser adicionado na API Gateway para autenticar os usuários, vai ser criada a chave privada das rotas na AWS e será associada ao API Gateway.
Na imagem abaixo você poderá ver os endpoints e o nome da tabela criada para poder adicionar no arquivo .env para testar localmente
<div align="center" style="margin: 20px; text-align: center">

#### 01 - Depois do deploy, você vai ver os endpoints criados e o nome da tabela criada
![Alt text](assets/deploy.png?raw=true "Etapa cognito u01")

</div>

## Testando as funções localmente
- Primeiro inicie o servidor através do comando:

|         Com Yarn          |       Com Npm              |
|---------------------------|----------------------------|
|``` yarn dev```    |``` npm run dev ```     |

- Assim que o servidor iniciar, você poderá ver as rotas e a chave da x-api-key para poder testar localmente
<div align="center" style="margin: 20px; text-align: center">

##### - Servidor rodando
![Alt text](assets/server-running.png?raw=true "Etapa cognito u01")

</div>
- Para testar localmente é bem simples, basta executar o comando abaixo para adicionar um item na tabela: Obs: Você também pode utilizar o Postman ou Insomnia para testar as funções.

```curl
curl --request POST \
  --url http://localhost:3001/ \
  --header 'Content-Type: application/json' \
  --header 'x-api-key: d41d8cd98f00b204e9800998ecf8427e' \
  --data '{
	"PK": "dio_curso",
	"user_id":"af46b54",
	"order_id":"ab18"
}'
```

<div align="center" style="margin: 20px; text-align: center">

#### 01 - Veja com ficou
![Alt text](assets/dynamo-created.png?raw=true "Etapa cognito u01")

</div>

- Legal, agora que testamos localmente, vamos testar na AWS, mas pra isso vamos precisar de um token de acesso, para gerar o token de acesso, vamos utilizar o usuário que criamos no cognito, para isso, execute o comando abaixo:

## Testando as funções na AWS
- Para facilitar, vamos criar um arquivo de configuração que permite você executar os comandos de forma mais simples, para isso, crie um arquivo chamado auth.json na raiz do projeto e adicione o conteúdo abaixo, e não esqueça de preencher corretamente os dados, se tiver dúvidas, veja as imagens anteriores para saber como obter os dados.
OBS: Não se preocupe, o arquivo já está no .gitignore, então não será enviado para o repositório.

```json
{
  "UserPoolId": "user_pool_id",
  "ClientId": "client_id",
  "AuthFlow": "ADMIN_NO_SRP_AUTH",
  "AuthParameters": {
    "USERNAME": "email@mail.com",
    "PASSWORD": "senha"
  }
}
```

- Agora vamos executar o comando abaixo para gerar o token de acesso:
*OBS*: Não esqueça de alterar o profile conforme você configurou as credenciais do AWS CLI

```bash
aws cognito-idp admin-initiate-auth --profile serverless --region us-east-1 --cli-input-json file://auth.json
```

- Ao executar o comando ele dará um retorno parecido com os dados baixo, nele irá conter os tokens de autenticação:

```json
{
    "ChallengeParameters": {},
    "AuthenticationResult": {
        "AccessToken": "<ACCESS_TOKEN>",
        "ExpiresIn": 3600,
        "TokenType": "Bearer",
        "RefreshToken": "<REFRESH_TOKEN>",
        "IdToken": "<ID_TOKEN>"
    }
}
```

- Agora com os dados de autenticação vamos fazer o teste na AWS, para isso, execute o comando abaixo:
<b>OBS</b>: Não esqueça de trocar os dados conforme o seu ambiente e as configurações da AWS: endpoint, token, api-key e o id do item que foi criado anteriormente.
```curl
curl --request PUT \
  --url <ENDPOINT_REQUEST>/deploy \
  --header 'Authorization: Bearer <TOKEN_AQUI>' \
  --header 'Content-Type: application/json' \
  --header 'x-api-key: <API_KEY_CADASTRADA>' \
  --data '{
	"PK": "dio_curso",
	"SK": "<ID_DO_ITEM_CRIADO_ANTERIORMENTE>",
	"user_id":"af46b54",
	"order_id":"ab15"
}'
```
- Oh não, o que aconteceu? recebi um não autorizado......
<div align="center" style="margin: 20px; text-align: center">

#### 😅
![Alt text](assets/forbidden.png?raw=true "Etapa cognito u01")

</div>

Calma, não tem nada de errado, o que aconteceu aqui foi o seguinte, ainda temos uma outra validação que é feita através dos Grupos do Cognito, ou seja, como não criamos ainda os Grupos e não adicionamos o usuário neles, a validação ainda irá falhar, mas é simples de resolver, vamos lá:

#### Criando os grupos no Cognito e adicionando o usuário
<div align="center" style="margin: 20px; text-align: center">

##### Acesse o seu grupo de usuários no Cognito e na aba grupos crie os dois grupos com os nomes iguais aos da imagem
![Alt text](assets/cognito/grupo01.png?raw=true "Etapa cognito u01")
##### Agora na abá usuário, acesse o usuário
![Alt text](assets/cognito/grupo02.png?raw=true "Etapa cognito u01")
##### E adicione o usuário aos 2 grupos que criamos anteriormente
![Alt text](assets/cognito/grupo03.png?raw=true "Etapa cognito u01")
</div>

- Agora vamos testar novamente, mas para atualizar o item que tinhamos criado anteriormente no DynamoDB, para isso, execute o comando abaixo:

```curl
curl --request PUT \
  --url <ENDPOINT_REQUEST>/deploy \
  --header 'Authorization: Bearer <TOKEN_AQUI>' \
  --header 'Content-Type: application/json' \
  --header 'x-api-key: <API_KEY_CADASTRADA>' \
  --data '{
	"PK": "dio_curso",
	"SK": "<ID_DO_ITEM_CRIADO_ANTERIORMENTE>",
	"user_id":"af46b54",
	"order_id":"ab15"
}'
```

<div align="center" style="margin: 20px; text-align: center">

##### Pronto, agora recebemos o evento de sucesso
![Alt text](assets/cognito/success.png?raw=true "Etapa cognito u01")
</div>

### Conclusão

Neste artigo vimos como criar um usuário no Cognito, como criar um grupo de usuários, como adicionar o usuário ao grupo, como criar uma API Gateway com autenticação Cognito e como testar a API localmente e na AWS.
Implementamos a solução pensando em uma arquitetura serverless escalável, segura e que possa ser de facil manutenção.
A segurança é um fator muito importante e sempre devemos previnir de deixar no repositório as chaves de acesso, por isso, sempre utilize o .gitignore para não enviar arquivos sensíveis para o repositório.

### todos
- [ ] Adicionar os métodos de DELETE, GET e LIST