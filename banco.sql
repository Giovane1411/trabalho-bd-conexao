/*Parte 1: O Banco de Dados*/
/*Script de criação e inserção*/

CREATE DATABASE IF NOT EXISTS trabalho_bd;
USE trabalho_bd;

/*Tabela 1: Usuarios*/
CREATE TABLE usuarios(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100),
	email VARCHAR(100) UNIQUE
);

/* Tabela 2: Tarefas (com relacionamento) */
CREATE TABLE tarefas (
	id INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(255),
	id_usuario INT,
	FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
		ON DELETE CASCADE /*Opcional: deleta tarefas se o usuário for deletado*/
);

/*Inserção de Dados de exemplo*/
INSERT INTO usuarios (nome, email) VALUES
('Ana Silva', 'ana@email.com'),
('Bruno Costa', 'bruno@email.com');

INSERT INTO tarefas (descricao, id_usuario) VALUES
('Fazer a Parte 1 do trabalho', 1),
('Estudar Node.js', 1),
('Fazer a parte 2', 2);

