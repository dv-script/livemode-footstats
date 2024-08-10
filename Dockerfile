# Usar uma imagem base oficial do Node.js com suporte a TypeScript
FROM node:20

# Definir o diretório de trabalho dentro do container
WORKDIR ./

# Copiar o package.json e o package-lock.json
COPY package*.json ./

# Instalar as dependências, incluindo as devDependencies, porque você precisa compilar o TypeScript
RUN npm install

# Copiar o restante da aplicação para o diretório de trabalho no container
COPY . .

# Compilar o código TypeScript
RUN npm run build

# Expor a porta que a aplicação irá utilizar
EXPOSE 3333

# Comando para rodar a aplicação
CMD ["npm", "start"]
