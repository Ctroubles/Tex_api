const { Router }= require("express");
const Ram = require("../../models/productos_models/ram.models");



const cpu_routes = Router();


cpu_routes.get("/", async (req, res) =>{
    const {name}= req.query;
    try {
        if(name){
            const compSearch = await findComp(name)
            if(!compSearch){ 
                throw new Error("No hay una ram con ese nombre")
            }else{
                return res.status(200).send(compSearch)
            }
        }
        else {
            const respuesta = await Ram.find();
            return res.status(201).send(respuesta);
        }
    } catch (error) {
        return res.status(500).send({error: error.message})

    }
});

module.exports= cpu_routes;