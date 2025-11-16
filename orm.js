/*--- Parte 3: Conexão via Framework (Prisma ORM)---*/
// 1. Importar o Cliente Prisma (que foi auto gerado)
const { PrismaClient } = require('@prisma/client');

// 2. Instanciar o prisma
// O Prisma gerencia a "pool" de conexões para você
const prisma = new PrismaClient();

// A função principal do nosso script
async function main(){
    try {
        /*--- OPERAÇÕES CRUD COM ABSTRAÇÃO  (Sem SQL)---*/

        // 1. CREATE (INSERIR) de novo usuário
        console.log("\n--- 1. CREATE (Usando ORM) ---")
        const novoUsuario = await prisma.usuarios.create(
            {data:
                {nome: 'Daniela Luz', email:'dani@email.com'},
            });
        console.log(`Novo usuário criado:`, novoUsuario)

        // 2. READ (LER) todos os usuários
        console.log("\n--- 2. READ (Usando  ORM) ---")
        const usuarios = await prisma.usuarios.findMany();
        console.log("Usuários cadastrados:");
        console.log(usuarios);
        
        // 3. UPDATE (ATUALIZAR) usuário
        console.log("\n-- 3. UPDATE (Usando ORM) ---")
        const usuarioAtualizado = await prisma.usuarios.update({
            where: {id: 2}, // Onde o id é 2
            data: {nome: 'Bruno Costa Oliveira'}, // O novo dados
        });
        console.log("Usuário ID 2 atualizado:", usuarioAtualizado);

        // 4. DELETE (DELETAR) usuário
        console.log("\n--- 4. DELETE (Usando ORM) ---")
        const usuarioDeletado = await prisma.usuarios.delete({
            where: {id: novoUsuario.id}, // Deletando o usuário que acabamos de criar
        });
        console.log(`Usuário ID ${novoUsuario.id} deletado`);

        // Verificação final - leitura dos registros restantes
        console.log("\n--- Verificação Final (READ) ---")
        const usuariosFinais = await prisma.usuarios.findMany();
        console.log(usuariosFinais);
        
    } catch (err){
        // Tratamento de erros
        console.error("Erro durante as operações com ORM:", err.message);
    } finally {
        // --- GERENCIAMENTO SIMPLIFICADO DA CONEXÃO ---
        console.log("\nDesconectando do prisma...");
        await prisma.$disconnect();
    }
}

// Executa a função principal
main();