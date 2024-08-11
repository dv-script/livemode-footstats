# Use a imagem base do Node.js 20
FROM node:20-slim

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todo o código da aplicação para o diretório de trabalho
COPY . .

# Compile o código TypeScript para JavaScript
RUN npm run build

# Verifique se o arquivo server.cjs foi gerado corretamente
RUN ls -la build/

# Exponha a porta em que a aplicação vai rodar
EXPOSE 3333

# Defina o comando para iniciar a aplicação
CMD ["npm", "start"]