# clone-tabs

Projeto feito durante o curso.dev do Filipe Deschamps. Clone do https://www.tabnews.com.br

## Docker

- [Instalação Docker](https://balta.io/blog/docker-instalacao-configuracao-e-primeiros-passos)
- [Instalação wsl2](https://www.youtube.com/watch?v=k9MF9rMJnTE)

`docker compose up` → sobe uma Imagem com base no compose.yaml.
`docker compose down` → destrói um container criado
`docker ps` → lista todos os Process List (por isso ps) rodando.
`docker ps -a` → lista todos os Process List, seja rodando ou não.
`docker compose up -d` → roda o Docker em modo detached, ou seja, no background, permitindo utilizar o terminal para outras tarefas.
`docker compose up -d --force-recreate` → uma forma rápida de dar docker compose down e up em uma só instrução com as informações mais atualizadas do seu compose.yaml.
`docker compose -f infra/compose.yaml up` → para usar o compose com a configuração em outro lugar que não seja o root do projeto.
