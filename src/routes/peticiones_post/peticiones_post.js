const { Router }= require("express");
const Ram = require("../../models/productos_models/ram.models");
const Fuentes = require("../../models/productos_models/fuentes.models");
const Motherboard = require("../../models/productos_models/motherboard.model");
const Gabinetes = require("../../models/productos_models/gabinetes.models.js");
const Monitores = require("../../models/productos_models/monitores.model.js");
const Teclados = require("../../models/productos_models/teclados.model");
const Mouses = require("../../models/productos_models/mouses.model");
const Audifonos = require("../../models/productos_models/audifonos.model");
const Laptops = require("../../models/productos_models/laptops.models");
const Impresoras = require("../../models/productos_models/impresoras.model");
const ImpresoraSuministros = require("../../models/productos_models/suministros_impresoras.model");


const post_peticiones = Router();

post_peticiones.post("/Ram", async (req, res) =>{
    const {name,marca,img,stock,price,category,capacity,ddr,bus,}= req.body;

    try {
        if(!name) throw new Error("Te falta un dato basura")
        if(!marca) throw new Error("Te falta un dato basura")
        if(!img) throw new Error("Te falta un dato basura")
        if(!stock) throw new Error("Te falta un dato basura")
        if(!price) throw new Error("Te falta un dato basura")
        if(!capacity) throw new Error("Te falta un dato basura")
        if(!ddr) throw new Error("Te falta un dato basura")
        if(!bus) throw new Error("Te falta un dato basura")
        if(!category) throw new Error("Te falta un dato basura")
        const newProduct = new Ram({
            name,
            marca,
            img,
            stock,
            price,
            category,
            capacity,
            ddr,
            bus,
            created_at: Date.now(),
            updated_at: Date.now()
          });
        
          const result = await newProduct.save()
         res.status(201).json(result);
    } catch (error) {
        return res.status(404).send(error.message)

    }
});
post_peticiones.post("/Fuentes", async (req, res) =>{
    const {name,marca,img,price,category,stock,potencia,formato,certification,conectores,cable,cod}= req.body;

    try {
        if(!name) throw new Error("Te falta un dato basura")
        if(!marca) throw new Error("Te falta un dato basura")
        if(!img) throw new Error("Te falta un dato basura")
        if(!price) throw new Error("Te falta un dato basura")
        if(!category) throw new Error("Te falta un dato basura")
        if(!stock) throw new Error("Te falta un dato basura")
        if(!potencia) throw new Error("Te falta un dato basura")
        if(!formato) throw new Error("Te falta un dato basura")
        if(!certification) throw new Error("Te falta un dato basura")
        if(!conectores) throw new Error("Te falta un dato basura")
        if(!cable) throw new Error("Te falta un dato basura")
        if(!cod) throw new Error("Te falta un dato basura")

        const newProduct = new Fuentes({
            name,
            marca,
            img,
            price,
            category,
            stock,
            potencia,
            formato,
            certification,
            conectores,
            cable,
            cod,
            created_at: Date.now(),
            updated_at: Date.now()
          });
        
          const result = await newProduct.save()
         res.status(201).json(result);
    } catch (error) {
        return res.status(401).send(error)

    }
});




post_peticiones.post("/Motherboards", async (req, res) =>{
    const {name,marca,img,price,category,stock,chipset,socket,ram,ramSlots,conectividad,mDos,factor,cod}= req.body;

    try {
        if(!name) throw new Error("Te falta un dato basura")
        if(!marca) throw new Error("Te falta un dato basura")
        if(!img) throw new Error("Te falta un dato basura")
        if(!price) throw new Error("Te falta un dato basura")
        if(!category) throw new Error("Te falta un dato basura")
        if(!stock) throw new Error("Te falta un dato basura")
        if(!chipset) throw new Error("Te falta un dato basura")
        if(!socket) throw new Error("Te falta un dato basura")
        if(!ram) throw new Error("Te falta un dato basura")
        if(!ramSlots) throw new Error("Te falta un dato basura")
        if(!conectividad) throw new Error("Te falta un dato basura")
        if(!mDos) throw new Error("Te falta un dato basura")
        if(!factor) throw new Error("Te falta un dato basura")
        if(!cod) throw new Error("Te falta un dato basura")
        const newProduct = new Motherboard({
            name,
            marca,
            img,
            price,
            category,
            stock,
            chipset,
            socket,
            ram,
            ramSlots,
            conectividad,
            mDos,
            factor,
            cod,
            created_at: Date.now(),
            updated_at: Date.now()
          });
        
          const result = await newProduct.save()
         res.status(201).json(result);
    } catch (error) {
        return res.status(402).send(error.message)

    }
});






post_peticiones.post("/Gabinetes", async (req, res) =>{
    const {name,marca,img,price,category,stock,factor,motherboards,dimensiones,fuente,ventiladores,cod}= req.body;

    try {
        if(!name) throw new Error("Te falta un dato basura")
        if(!marca) throw new Error("Te falta un dato basura")
        if(!img) throw new Error("Te falta un dato basura")
        if(!price) throw new Error("Te falta un dato basura")
        if(!category) throw new Error("Te falta un dato basura")
        if(!stock) throw new Error("Te falta un dato basura")
        if(!factor) throw new Error("Te falta un dato basura")
        if(!motherboards) throw new Error("Te falta un dato basura")
        if(!dimensiones) throw new Error("Te falta un dato basura")
        if(!fuente) throw new Error("Te falta un dato basura")
        if(!ventiladores) throw new Error("Te falta un dato basura")
        if(!cod) throw new Error("Te falta un dato basura")
        const newProduct = new Gabinetes({
            name,
            marca,
            img,
            price,
            category,
            stock,
            factor,
            motherboards,
            dimensiones,
            fuente,
            ventiladores,
            cod,
            created_at: Date.now(),
            updated_at: Date.now()
          });
        
          const result = await newProduct.save()
         res.status(201).json(result);
    } catch (error) {
        return res.status(402).send(error.message)

    }
});





post_peticiones.post("/Monitores", async (req, res) =>{
    const {name,marca,img,price,category,stock,tamaño,curvo,proportion,resolution,respuesta,refresco,entradas,screenType,cod}= req.body;

    try {
        if(!name) throw new Error("Te falta un dato basura")
        if(!marca) throw new Error("Te falta un dato basura")
        if(!img) throw new Error("Te falta un dato basura")
        if(!price) throw new Error("Te falta un dato basura")
        if(!category) throw new Error("Te falta un dato basura")
        if(!stock) throw new Error("Te falta un dato basura")
        if(!tamaño) throw new Error("Te falta un dato basura")
        if(!curvo) throw new Error("Te falta un dato basura")
        if(!proportion) throw new Error("Te falta un dato basura")
        if(!resolution) throw new Error("Te falta un dato basura")
        if(!respuesta) throw new Error("Te falta un dato basura")
        if(!refresco) throw new Error("Te falta un dato basura")
        if(!entradas) throw new Error("Te falta un dato basura")
        if(!screenType) throw new Error("Te falta un dato basura")
        if(!cod) throw new Error("Te falta un dato basura")
        const newProduct = new Monitores({
            name,
            marca,
            img,
            price,
            category,
            stock,
            tamaño,
            curvo,
            proportion,
            resolution,
            respuesta,
            refresco,
            entradas,
            screenType,
            cod,
            created_at: Date.now(),
            updated_at: Date.now()
          });
        
          const result = await newProduct.save()
         res.status(201).json(result);
    } catch (error) {
        return res.status(402).send(error.message)

    }
});





post_peticiones.post("/Teclados", async (req, res) =>{
    const {name,marca,img,price,category,stock,keyBoardType,switchType,conectividad,backlit,programable,cod}= req.body;

    try {
        if(!name) throw new Error("Te falta un dato basura")
        if(!marca) throw new Error("Te falta un dato basura")
        if(!img) throw new Error("Te falta un dato basura")
        if(!price) throw new Error("Te falta un dato basura")
        if(!category) throw new Error("Te falta un dato basura")
        if(!stock) throw new Error("Te falta un dato basura")
        if(!keyBoardType) throw new Error("Te falta un dato basura")
        if(!switchType) throw new Error("Te falta un dato basura")
        if(!conectividad) throw new Error("Te falta un dato basura")
        if(!backlit) throw new Error("Te falta un dato basura")
        if(!programable) throw new Error("Te falta un dato basura")
        if(!cod) throw new Error("Te falta un dato basura")
        const newProduct = new Teclados({
            name,
            marca,
            img,
            price,
            category,
            stock,
            keyBoardType,
            switchType,
            conectividad,
            backlit,
            programable,
            cod,
            created_at: Date.now(),
            updated_at: Date.now()
          });
        
          const result = await newProduct.save()
         res.status(201).json(result);
    } catch (error) {
        return res.status(402).send(error.message)

    }
});



post_peticiones.post("/Mouses", async (req, res) =>{
    const {name,marca,img,price,category,stock,botones,DPI,interfaz,RGB,programable,cod}= req.body;

    try {
        if(!name) throw new Error("Te falta un dato basura")
        if(!marca) throw new Error("Te falta un dato basura")
        if(!img) throw new Error("Te falta un dato basura")
        if(!price) throw new Error("Te falta un dato basura")
        if(!category) throw new Error("Te falta un dato basura")
        if(!stock) throw new Error("Te falta un dato basura")
        if(!botones) throw new Error("Te falta un dato basura")
        if(!DPI) throw new Error("Te falta un dato basura")
        if(!interfaz) throw new Error("Te falta un dato basura")
        if(!RGB) throw new Error("Te falta un dato basura")
        if(!programable) throw new Error("Te falta un dato basura")
        if(!cod) throw new Error("Te falta un dato basura")
        const newProduct = new Mouses({
            name,
            marca,
            img,
            price,
            category,
            stock,
            botones,
            DPI,
            interfaz,
            RGB,
            programable,
            cod,
            created_at: Date.now(),
            updated_at: Date.now()
          });
        
          const result = await newProduct.save()
         res.status(201).json(result);
    } catch (error) {
        return res.status(402).send(error.message)

    }
});





post_peticiones.post("/Audifonos", async (req, res) =>{

    const {name,marca,img,price,category,stock,audioSys,interfaz,conector,microfono,RGB,audifonosType,cod}= req.body;

    try {
        if(!name) throw new Error("Te falta un dato basura")
        if(!marca) throw new Error("Te falta un dato basura")
        if(!img) throw new Error("Te falta un dato basura")
        if(!price) throw new Error("Te falta un dato basura")
        if(!category) throw new Error("Te falta un dato basura")
        if(!stock) throw new Error("Te falta un dato basura")
        if(!audioSys) throw new Error("Te falta un dato basura")
        if(!interfaz) throw new Error("Te falta un dato basura")
        if(!conector) throw new Error("Te falta un dato basura")
        if(!microfono) throw new Error("Te falta un dato basura")
        if(!RGB) throw new Error("Te falta un dato basura")
        if(!audifonosType) throw new Error("Te falta un dato basura")
        if(!cod) throw new Error("Te falta un dato basura")
        const newProduct = new Audifonos({
            name,
            marca,
            img,
            price,
            category,
            stock,
            audioSys,
            interfaz,
            conector,
            microfono,
            RGB,
            audifonosType,
            cod,
            created_at: Date.now(),
            updated_at: Date.now()
          });
        
          const result = await newProduct.save()
         res.status(201).json(result);
    } catch (error) {
        return res.status(402).send(error.message)

    }
});




post_peticiones.post("/Laptops", async (req, res) =>{

    const {name,marca,img,price,category,stock,pantalla,procesador,RAM,Almacenamiento,graphics,conectividad,tecladoBacklit,os,fingerPrint,warranty,cod}= req.body;

    try {
        if(!name) throw new Error("Te falta un dato basura")
        if(!marca) throw new Error("Te falta un dato basura")
        if(!img) throw new Error("Te falta un dato basura")
        if(!price) throw new Error("Te falta un dato basura")
        if(!category) throw new Error("Te falta un dato basura")
        if(!stock) throw new Error("Te falta un dato basura")
        if(!pantalla) throw new Error("Te falta un dato basura")
        if(!procesador) throw new Error("Te falta un dato basura")
        if(!RAM) throw new Error("Te falta un dato basura")
        if(!Almacenamiento) throw new Error("Te falta un dato basura")
        if(!graphics) throw new Error("Te falta un dato basura")
        if(!conectividad) throw new Error("Te falta un dato basura")
        if(!tecladoBacklit) throw new Error("Te falta un dato basura")
        if(!os) throw new Error("Te falta un dato basura")
        if(!fingerPrint) throw new Error("Te falta un dato basura")
        if(!cod) throw new Error("Te falta un dato basura")
        if(!warranty) throw new Error("Te falta un dato basura")
        const newProduct = new Laptops({
            name,
            marca,
            img,
            price,
            category,
            stock,
            pantalla,
            procesador,
            RAM,
            Almacenamiento,
            graphics,
            conectividad,
            tecladoBacklit,
            os,
            fingerPrint,
            warranty,
            cod,
            created_at: Date.now(),
            updated_at: Date.now()
          });
        
          const result = await newProduct.save()
         res.status(201).json(result);
    } catch (error) {
        return res.status(402).send(error.message)

    }
});




post_peticiones.post("/Impresoras", async (req, res) =>{

    const {name,marca,img,price,category,stock,funciones,technology,conectividad,papel,tinta,cod}= req.body;

    try {
        if(!name) throw new Error("Te falta un dato basura")
        if(!marca) throw new Error("Te falta un dato basura")
        if(!img) throw new Error("Te falta un dato basura")
        if(!price) throw new Error("Te falta un dato basura")
        if(!category) throw new Error("Te falta un dato basura")
        if(!stock) throw new Error("Te falta un dato basura")
        if(!funciones) throw new Error("Te falta un dato basura")
        if(!technology) throw new Error("Te falta un dato basura")
        if(!conectividad) throw new Error("Te falta un dato basura")
        if(!papel) throw new Error("Te falta un dato basura")
        if(!tinta) throw new Error("Te falta un dato basura")
        if(!cod) throw new Error("Te falta un dato basura")
        const newProduct = new Impresoras({
            name,
            marca,
            img,
            price,
            category,
            stock,
            funciones,
            technology,
            conectividad,
            papel,
            tinta,
            cod,
            created_at: Date.now(),
            updated_at: Date.now()
          });
        
          const result = await newProduct.save()
         res.status(201).json(result);
    } catch (error) {
        return res.status(402).send(error.message)

    }
});




post_peticiones.post("/ImpresoraSuministros", async (req, res) =>{

    const {name,marca,img,price,category,stock,tipo,modelo,color,cantidad,compatibilidad,cod}= req.body;

    try {
        if(!name) throw new Error("Te falta un dato basura")
        if(!marca) throw new Error("Te falta un dato basura")
        if(!img) throw new Error("Te falta un dato basura")
        if(!price) throw new Error("Te falta un dato basura")
        if(!category) throw new Error("Te falta un dato basura")
        if(!stock) throw new Error("Te falta un dato basura")
        if(!tipo) throw new Error("Te falta un dato basura")
        if(!modelo) throw new Error("Te falta un dato basura")
        if(!color) throw new Error("Te falta un dato basura")
        if(!cantidad) throw new Error("Te falta un dato basura")
        if(!compatibilidad) throw new Error("Te falta un dato basura")
        if(!cod) throw new Error("Te falta un dato basura")
        const newProduct = new ImpresoraSuministros({
            name,
            marca,
            img,
            price,
            category,
            stock,
            tipo,
            modelo,
            color,
            cantidad,
            compatibilidad,
            cod,
            created_at: Date.now(),
            updated_at: Date.now()
          });
        
          const result = await newProduct.save()
         res.status(201).json(result);
    } catch (error) {
        return res.status(402).send(error.message)

    }
});




module.exports = post_peticiones;