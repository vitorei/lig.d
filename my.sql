CREATE DATABASE projeto_cadastro;
USE projeto_cadastro;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    senha VARCHAR(255)
);