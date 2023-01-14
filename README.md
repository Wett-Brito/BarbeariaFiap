# Barbearia com Minikube
Esse repositório faz parte do projeto de Barbearia usando Angular + Node como front-end e Java como back-end, juntamente com Postgres como banco de dados.

## Requisitos
* Docker
* Minikube
* Node
* Java / IntelliJ

## Microserviços
Primeiro clonamos os seguintes projetos:

* https://github.com/Wett-Brito/BabeariaFiap-microservice-Agendamento
* https://github.com/Wett-Brito/BabeariaFiap-microservice-unidade
* https://github.com/Wett-Brito/BabeariaFiap-microservice-servico
* https://github.com/Wett-Brito/BarbeariaFiapFront

## Minikube
É necessário criar uma instância / container do Minikube

```
minikube start
```

## Postgres
Antes de adicionar os microserviços, vamos subir o banco de dados. Dentro da pasta do microserviço de Agendamento:

```
kubectl apply -f .\postgres-secret.yaml
kubectl apply -f .\postgres.yaml 
```

O primeiro arquivo contém os dados de usuário e senha, que serão usados pelo Postgres e pelo microserviço de Agendamento, e o segundo arquivo é o Postgres em si. A imagem docker será baixada do Docker Hub.

## Microserviços back-end

Depois de inicializada a instância, mudamos o contexto do Docker para dentro do Minikube

```
minikube docker-env --shell powershell | Invoke-Expression
```

Para os 3 primeiros projetos de back-end, compilamos usando Maven e geramos um JAR que adicionaremos a uma imagem Docker. Entre em cada uma das pastas e rodamos os seguintes comandos:

```
mvn clean install -DskipTests
docker build -t <ms> .
kubectl apply -f .\minikube.yaml
```

Para cada microserviço `<ms>`, usamos um nome diferente que tem que bater com os que usaremos no Minikube (substituir `<ms>` por cada uma das aplicações):
* barbearia-agendamento
* barbearia-servico
* barbearia-unidade

Cada imagem será gerada no Docker e usamos a imagem para criar deploys do Minikube. Cada arquivo `minikube.yaml` contém as informações de porta, tag, imagem, réplicas etc.

## Microserviços front-end
Para o front-end, precisamos primeiro compilar o Angular num webpack, dentro da pasta `/my-app`.

```
npm install
npm run build
```

Voltamos a pasta do microserviço e criamos a imagem do front-end. Essa imagem serve o webpack criado pelo Angular, além como porta dos microserviços.

```
docker build -t barbearia-front .
kubectl apply -f .\minikube.yaml
```

## Rodando a aplicação

Para rodar o front-end, precisamos apenas criar um tunel entre o Minikube e o PC:

```
minikube service webapp-service
```

Isso irá abrir uma aba no navegador com a aplicação, para visualizar os agendamentos, basta entrar no mesmo IP e porta + `/appointments`.
