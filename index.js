const express = require('express')
const app = express()
app.use(express.json())


app.get("/", (req, res) => {
    return res.json("hello world")
})

const port = process.env.PORT ?? 5050
app.listen(port, () => console.log(`Funcionando na porta ${port}`))
