import express from 'express'
import itensRouter from './routers/itens-router'
import cors from 'cors'

// Porta do server
const PORT = process.env.PORT || 4000

// Host do server
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

// App express
const app = express()

// configurando express pra identificar o formato JSON.
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//  Endpoint raíz
app.get('/', (req, res) => {
    res.send('Bem-vindo!')
})

//  Cors
app.use(cors({
    origin: ['http://localhost:3000']
}))

// Rotas
app.use('/api', itensRouter)

// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
    res.status(404).json({mensagem: "Rota não encontrada."})
})

// Inicia o server.
app.listen(PORT, () => {
    console.log(`Server rodando com sucesso ${HOSTNAME}:${PORT}`)
})