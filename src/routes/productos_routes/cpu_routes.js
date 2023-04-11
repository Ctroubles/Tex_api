const { Router }= require("express");
const Procesadores = require("../../models/productos_models/procesadores.models.js");



const cpu_routes = Router();


cpu_routes.get("/", async (req, res) =>{
    const {name}= req.query;
    try {
        if(name){
            const compSearch = await findComp(name)
            if(!compSearch){ 
                throw new Error("No hay un procesador con ese nombre")
            }else{
                return res.status(200).send(compSearch)
            }
        }
        else {
            const respuesta = await Procesadores.find();
            return res.status(201).send(respuesta);
        }
    } catch (error) {
        return res.status(500).send({error: error.message})

    }
});

module.exports= cpu_routes;