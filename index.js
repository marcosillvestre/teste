const express = require('express')
const app = express()
app.use(express.json())


app.get("/", (req, res) => {
    return res.json("hello world")
})

app.get("/abcd", (req, res) => {

    return res.json("é so la mesmo")
})



const port = process.env.PORT ?? 5050
app.listen(port, () => console.log(`Funcionando na porta ${port}`))
