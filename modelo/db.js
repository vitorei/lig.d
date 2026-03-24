import mysql from "mysql2/promise";

// Função para criar conexão com MySQL
export const db = await mysql.createConnection({
    host: "localhost",
    user: "root", // usuário do XAMPP
    password: "", // senha do XAMPP (vazia por padrão)
    database: "projeto_back_end" // nome do seu banco
});

console.log("Conexão com MySQL estabelecida ✅");