const { Router }= require("express");
const PurchaseOrder = require("../../models/purchase_models.js/purchase_order");
const User = require("../../models/users.models");
const  { generarNumeroOrden } = require("../../utils/shopping.utils");

const orders_routes = Router();


orders_routes.post("/create", async (req, res) =>{
    try {
        const {user,fullName,DNI,phone,email,department,city,date,totalPrice,products,address,paymentMethod,instructions}= req.body;
        const nOrden = generarNumeroOrden()
        const newOder = new PurchaseOrder({
            nOrden,
            date,
            user,
            fullName,
            DNI,
            phone,
            email,
            department,
            city,
            address,
            paymentMethod,
            totalPrice,
            products,
            instructions
        })
        const result = await newOder.save()
        if(user){ const usuariupdt= await User.findByIdAndUpdate(user, { $push: { purchaseOrders: result._id } })
            console.log(usuariupdt);
        }
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});



orders_routes.get("/pedidos/:norden/:idorden", async (req, res) =>{
    try {
        const { norden, idorden } = req.params;
        const orden = await PurchaseOrder.findById(idorden)
        if(norden===orden.nOrden){
            const now = new Date().getTime();
            const diff = now - orden.date;
            if (diff >= 7200000) {
                res.status(201).json({active:false,...orden.toJSON()});
            }else{
                res.status(201).json({active:true,...orden.toJSON()});
            }
        }
        else throw new Error("Params not equality valid")
        
    } catch (error) {
        res.status(400).json(error);
    }
});




module.exports = orders_routes;