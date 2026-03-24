import express from "express";
import { db } from "./modelo/db.js"; // importa a conexão

const app = express();
const PORT = 3000;

app.use(express.json());

// Rota de cadastro
app.post("/cadastro", async(req, res) => {
    const { nome, email, senha } = req.body;
    try {
        await db.execute(
            "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)", [nome, email, senha]
        );
        res.send("Usuário cadastrado com sucesso 🚀");
    } catch (err) {
        console.log(err);
        res.status(500).send("Erro ao cadastrar usuário ❌");
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});