# Usa a imagem "node" na versão 6.9.1 como base.
# A imagem já contém o node/npm instalados
FROM node:6.9.1

# Instala o http-server globalmente no container novo
RUN npm install -g http-server

# Cria um diretório chamado www no container novo
#   - O diretório poderia ter qualquer outro nome!
#     O que importa é garantir que os arquvios
#     estejam todos lá, de preferência em uma pasta
#     só deles.
RUN mkdir -p /www

# Copia TODOS os arquivos do projeto para a pasta www
COPY . /www/

# Inicia o http-server, servindo a pasta www na porta
# definida na variável de ambiente $PORT
CMD http-server /www -p $PORT



# COMO RODAR ESSA IMAGEM:
#   - BUILD:
#           docker build -t innvent .
#   - RUN:
#           docker run -p 3000:3000 -e PORT=3000 --name innvent innvent
# 
# Abra http://localhost:3000 no seu navegador