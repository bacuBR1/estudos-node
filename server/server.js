const express = require("express");
const server = express();
const Bolsistas = require("../models/Bolsistas");

server.use(express.json());

server.post("/cadastro", function(req, res){
    Bolsistas.create({
        nome: req.body.nome,
        matricula: req.body.matricula,  
        email: req.body.email,      
        senha: req.body.senha
    }).then(() => res.send("cadastro feito com sucesso"))
      .catch((erro) => res.send("não foi possivel cadastrar: " + erro));
});

server.get("/", function(req, res){
    Bolsistas.findAll().then((bolsistas) => res.send({bolsistas: bolsistas}))
                       .catch((erro) => res.send("erro ao acessar os dados" + erro ));
});

server.get("/:matricula", function(req, res){
    Bolsistas.findAll({where: {"matricula": req.params.matricula}}).then((bolsistas) => res.send({bolsistas: bolsistas}))
                       .catch((erro) => res.send("erro ao acessar os dados" + erro ));
});

server.patch("/atualizar/:matricula", function(req, res){
    Bolsistas.update({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha},
        {where: {"matricula": req.params.matricula}}
    ).then(() => res.send("atualização feita com sucesso"))
     .catch((erro) => res.send("erro ao atualizar" + erro));
});

server.delete("/deletar/:matricula", function(req, res){
    Bolsistas.destroy({where: {"matricula": req.params.matricula}}).then(() => res.send("deletado com sucesso"))
                                                                   .catch((erro) => res.send("erro ao deletar" + erro));
});

const PORT = process.env.PORT || 8081;

server.listen(PORT, "0.0.0.0", function(){
    console.log("servidor está rodando");
});

