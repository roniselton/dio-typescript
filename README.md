# dio-typescript

Iniciando um projeto Node
npm init -y

Instalando somente no projeto sem enviar para produção.
npm install typescript -D

Criar arquivos ts
Executar o node com o cmd abaixo:
node src/index.ts

transpilar (Compilar + translate) o typescript
npx tsc src/index.ts


Configuração do Typescript
npx tsc --init

Configurar o diretorio src e o outdir Ex: para build
Ao executar o comando abaixo compila tudo.
npx tsc


No arquivo package.json adicionar os comando para executar o script de uma vez
"start": "npx tsc && node build/index.js",

E após isso executar o projeto com 
npm run start

Permite executar uma classe especifica sem ter que compila-la.
npm install ts-node-dev -D
