/* Parte 2: Conexão Nativa ("Crua")*/

// 1. Importar a biblioteca mysql2
const mysql2 = require('mysql2/promise');

// A função principal do nosso script
async function main(){
    
    let connection; // Variável para armazenar a conexão

    try {
        /*---GERENCIAMENTO MANUAL DA CONEXÃO---*/
        console.log("Conectando ao banco de dados...");
        connection = await mysql2.createConnection({
            host: 'localhost', // Onde o banco de dados está hospedado (XAMPP é localhost)
            user: 'root', // Usuário padrão do XAMPP
            password: '', // Senha padrão do XAMPP é vazia
            database: 'trabalho_bd' // O banco que criamos
        });
        console.log("Conexão bem sucedida!");

        /* --- OPERAÇÕES CRUD MANUAIS ---*/
        
        //1. CREATE (inserir um novo registro)
        console.log("\n--- 1. CREATE (inserir) ---");
        // Escrita manual da query SQL 
        const sqlInsert = "INSERT INTO usuarios (nome, email) VALUES (?, ?)";
        const [resultCreate] = await connection.execute(sqlInsert, ['Carlos Dias', 'carlos@email.com']);
        console.log(`Novo usuário inserido com ID: ${resultCreate.insertId}`);

        // 2. READ (ler registros)
        console.log("\n--- 2. READ (ler todos) ---");
        // Escrita manual da query SQL
        const sqlSelect = "SELECT * FROM usuarios";
        const [rows] = await connection.execute(sqlSelect);
        console.log("Usuários cadastrados: ");
        console.log(rows); // Mostra o resultado "cru" (array de objetos);

        // 3.UPDATE (Atualizar um registro)
        console.log("\n---3. UPDATE (atualizar) ---");
        // Vamos atualizar o 'Bruno Costa' (ID 2)
        // Escrita manual da query SQL
        const sqlUpdate = "UPDATE usuarios SET nome = ? WHERE id = ?";
        await connection.execute(sqlUpdate, ['Bruno Costa Silva', 2]);
        console.log("Usuário ID 2 atualizado.");

        // 4. DELETE (Deletar um registro)
        console.log("\n---4. DELETE (deletar) ---");
        // Vamos deletar o 'Carlos Dias' que acabamos de criar (usando id dinâmico)
        // Escrita manual da query SQL
        const sqlDelete = "DELETE FROM usuarios WHERE id = ?";
        await connection.execute(sqlDelete, [resultCreate.insertId]);
        console.log(`Usuário ID ${resultCreate.insertId} deletado.`);

        // Verificação final - leitura dos registros restantes
        console.log("\n---Verificação Final (READ) ---");
        const [rowsFinal] = await connection.execute(sqlSelect); // Reutilizando o sqlSelect
        console.log(rowsFinal);
    
    } catch (err){
        // Tratamento de erros
        console.error("ERRO: ", err.message);
    } finally {
        // --- GERENCIAMENTO MANUAL DA CONEXÃO ---
        // É crucial fechar a conexão para evitar vazamentos de memória
        if (connection) {
            console.log("\n Fechando conexão...");
            await connection.end();
        }
    }
}

// Executa a função principal
main();