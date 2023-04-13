const { Router }= require("express");
const { findComp, findStock} = require("../controllers/component/getComponents.js");
const {deleteComponent, activateComponent} = require('../controllers/component/deleteComponent.js');
const updateComponents = require('../controllers/component/updateComponents.js');
const Almacenamiento = require("../models/productos_models/almacenamiento.models");
const Procesadores = require("../models/productos_models/procesadores.models");
const Ram = require("../models/productos_models/ram.models");
const Graficas = require("../models/productos_models/graficas.models.js");
const Fuentes = require("../models/productos_models/fuentes.models");
const Motherboards = require("../models/productos_models/moterboard.model");
const Gabinetes = require("../models/productos_models/gabinetes.models.js");
const Monitores = require("../models/productos_models/monitores.model.js");
const Teclados = require("../models/productos_models/teclados.model.js");
const Mouses = require("../models/productos_models/mouses.model.js");
const Audifonos = require("../models/productos_models/audifonos.model.js");
const Laptops = require("../models/productos_models/laptops.models.js");
const Impresoras = require("../models/productos_models/impresoras.model.js");



const componentsRoutes= Router();

componentsRoutes.get("/", async (req, res) =>{
    const {name}= req.query;
    try {
        if(name){
            const compSearch = await findComp(name)
            if(!compSearch){ 
                return res.status(400).send({error:"No such component found"})
            }else{
                return res.status(200).send(compSearch)
            }
        }
        else {
            console.log("buscandoo");
            const respuesta = await allComps();
            console.log(respuesta);
            return res.status(201).send(respuesta)
        }
    } catch (error) {
        return res.status(500).send({error: error.message})

    }
});

componentsRoutes.get("/Procesadores", async(req, res)=>{
    try {
        const result = await Procesadores.find();
        ;
        res.status(200).send(result);
    } catch (error) {
        res.status(404).send(error)
    }
});
componentsRoutes.get("/Almacenamiento", async(req, res)=>{
    try {
        const result = await Almacenamiento.find();
        res.status(200).send(result);
    } catch (error) {
        res.status(404).send(error)
    }
});
componentsRoutes.get("/Ram", async(req, res)=>{
    try {
        const result = await Ram.find();
        res.status(200).send(result);
    } catch (error) {
        res.status(404).send(error)
    }
});

componentsRoutes.get("/Graficas", async(req, res)=>{
    try {
        const result = await Graficas.find();
        res.status(200).send(result);
    } catch (error) {
        res.status(404).send(error)
    }
});

componentsRoutes.get("/Fuentes", async(req, res)=>{
    try {
        const result = await Fuentes.find();
        res.status(200).send(result);
    } catch (error) {
        res.status(404).send(error)
    }
});


componentsRoutes.get("/Motherboards", async(req, res)=>{
    try {
        const result = await Motherboards.find();
        res.status(200).send(result);
    } catch (error) {
        res.status(404).send(error)
    }
});


componentsRoutes.get("/Gabinetes", async(req, res)=>{
    try {
        const result = await Gabinetes.find();
        res.status(200).send(result);
    } catch (error) {
        res.status(404).send(error)
    }
});


componentsRoutes.get("/Monitores", async(req, res)=>{
    try {
        const result = await Monitores.find();
        res.status(200).send(result);
    } catch (error) {
        res.status(404).send(error)
    }
});




componentsRoutes.get("/Teclados", async(req, res)=>{
    try {
        const result = await Teclados.find();
        res.status(200).send(result);
    } catch (error) {
        res.status(404).send(error)
    }
});



componentsRoutes.get("/Mouses", async(req, res)=>{
    try {
        const result = await Mouses.find();
        res.status(200).send(result);
    } catch (error) {
        res.status(404).send(error)
    }
});


componentsRoutes.get("/Audifonos", async(req, res)=>{
    try {
        const result = await Audifonos.find();
        res.status(200).send(result);
    } catch (error) {
        res.status(404).send(error)
    }
});



componentsRoutes.get("/Laptops", async(req, res)=>{
    try {
        const result = await Laptops.find();
        res.status(200).send(result);
    } catch (error) {
        res.status(404).send(error)
    }
});


componentsRoutes.get("/Impresoras", async(req, res)=>{
    try {
        const result = await Impresoras.find();
        res.status(200).send(result);
    } catch (error) {
        res.status(404).send(error)
    }
});



componentsRoutes.get("/Microfonos", async(req, res)=>{
    try {
        const result = await Impresoras.find();
        res.status(200).send(result);
    } catch (error) {
        res.status(404).send(error)
    }
});













///////////////////


componentsRoutes.put('/delete/:id', async(req, res) => {
    try {
        const {id} = req.params;
        await deleteComponent(id);
        res.status(201).send({status: 'Registro eliminado con éxito'});
    } catch (error) {
        res.status(404).send({error});
    }
})

componentsRoutes.put('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const data = req.body;
        const resultPut= await updateComponents(id, data)
        return res.status(200).send("Componente actualizado: " + resultPut)
    } catch (error) {
        res.status(400).send({error})
    }
})

componentsRoutes.get("/stock/all", async(req, res)=>{
    try {
        return res.status(200).send(await findStock())
    } catch (error) {

    }
})

componentsRoutes.put('/activate/:id', async(req, res) => {
    try {
        const {id} = req.params;
        await activateComponent(id);
        res.status(201).send({status: 'Registro reactivado con éxito'});
    } catch (error) {
        res.status(404).send({error});
    }
})

module.exports= componentsRoutes;