const express = require("express"),
    app = express(),
    port = 2025;

const bodyParser = require("body-parser");

const Avaliacoes = require("./models/Avaliacoes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static(__dirname + '/public'));


app.get("/", (req, res) => {
    res.sendFile(__dirname.concat("/html/index.html"));
})

app.get("/style.css", (req, res) => {
    res.sendfile(__dirname.concat("/html/style.css"))
})

app.get("/script.js", (req, res) => {
    res.sendFile(__dirname + "/html/script.js")
})


app.post("/send", (req, res) => {

    Avaliacoes.create({
        Ruim: req.body.ruim,
        Bom: req.body.bom,
        Otimo: req.body.otimo,
    }).then(() => {
        res.send('Opinião registrada com sucesso!')
    }).catch((erro) => {
        res.send(`Ocorreu um erro ao registrar sua opinião ${erro}`)
    })

})

app.listen(port, () => {
    console.log(`The server is already running at http://localhost:${port}/`)
})