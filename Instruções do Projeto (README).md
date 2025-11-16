Trabalho Prático: 

Conexão Nativa vs. Framework (ORM)

Este repositório é parte da avaliação da disciplina de Banco de Dados II (IFRS - Campus Vacaria).

O objetivo é comparar duas abordagens de conexão com um banco de dados MySQL usando Node.js:Conexão Nativa: Escrevendo SQL "cru" (vide nativo.js).
Conexão com ORM: Abstraindo o SQL com o Prisma (vide orm.js).

1. Tecnologias Utilizadas:
   Linguagem: JavaScript (Node.js)
   SGBD: MySQL (MariaDB)
   Driver Nativo (Parte 2): mysql2
   Framework ORM (Parte 3): Prisma2.
  
2. Como Executar o Projeto:
   1. Pré-requisitos
     Você precisará ter os seguintes softwares instalados: Node.js (v18 ou superior)
     NPM (geralmente instalado com o Node)
     Um servidor MySQL (como o XAMPP)
     Git
   2. Passo 1: Baixar (Clonar) o Repositório
      1.git clone [URL-DO-SEU-REPOSITORIO]
      2.cd trabalho-bd-conexao
   3. Passo 2: Instalar as Dependências
      1. Este comando lê o package.json e baixa todas as bibliotecas necessárias (como mysql2 e prisma).
      2. npm install
   4. Passo 3: Configurar o Banco de Dados
      1. Inicie seu servidor MySQL (ex: inicie o Apache e o MySQL no XAMPP).
      2. Acesse o http://localhost/phpmyadmin/.
      3. Vá até a aba "SQL".
      4. Copie o conteúdo do arquivo banco.sql deste repositório, cole na caixa de texto e execute.
   5. Passo 4: Executar os Scripts
      1.Para rodar a Parte 2 (Nativa):
        1.node nativo.js
   6. Para rodar a Parte 3 (ORM/Prisma):
      1. O Prisma precisa gerar o "Cliente" antes da primeira execução:
         1. npx prisma generate
   7. Agora, execute o script:
       1. node orm.js
