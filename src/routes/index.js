const { Router } = require('express');
const uploadRoutes = require('../controllers/cloudinaryPrueba');
const { findById,} = require("../controllers/component/getComponents.js");

const categoriesRoutes = require("./categories_routes")
const userRoutes= require("./userRoutes.js")
const reviewRoutes= require("./reviewRoutes.js");
const nodemailer = require('./nodemailer.js');
// const cpu_routes = require('./productos_routes/cpu_routes.js');
// const ram_routes = require('./productos_routes/ram_routes');

const purchase_order = require("./purchase_order/create_orders")
const peticiones_post = require("./peticiones_post/peticiones_post")
const purchase_orders = require("./purchase_order/create_orders.js")


const Almacenamiento = require('../models/productos_models/almacenamiento.models')
const Procesadores = require('../models/productos_models/procesadores.models')
const Ram = require('../models/productos_models/ram.models')
const Graficas = require('../models/productos_models/graficas.models.js')
const Fuentes = require('../models/productos_models/fuentes.models')
const Gabinetes = require('../models/productos_models/gabinetes.models.js');
const Teclados = require('../models/productos_models/teclados.model');
const Laptops = require('../models/productos_models/laptops.models');
const Impresoras = require('../models/productos_models/impresoras.model');
const ImpresoraSuministros = require("../models/productos_models/suministros_impresoras.model.js")



const router = Router();

router.get("/",async(req,res)=>{
    try {
        const [almacenamiento, procesadores, ram , graficas,fuentes, gabinetes,teclados, laptops,impresoras,impresoraSuministros] = await Promise.all([
            Almacenamiento.find(),
            Procesadores.find(),
            Ram.find(),
            Graficas.find(),
            Fuentes.find(),
            Gabinetes.find(),
            Teclados.find(),
            Laptops.find(),
            Impresoras.find(),
            ImpresoraSuministros.find()
        ]);
        res.json({graficas, almacenamiento, procesadores, ram,fuentes, gabinetes,teclados, laptops, impresoras, impresoraSuministros});
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
})
router.get("/id/:id", async(req, res)=>{
  const {id}= req.params
  try {
      const component = await findById(id)
      return res.status(200).send(component)
  } catch (error) {
      res.status(400).send(error)
  }
})

router.use("/category", categoriesRoutes)
router.use("/users", userRoutes)
// router.use("/review", reviewRoutes)
// router.use("/upload", uploadRoutes)
// router.use('/mailer', nodemailer);
// router.use('/cpu', cpu_routes);
// router.use('/ram', ram_routes);
router.use('/shopping', purchase_orders);
router.use('/insert', peticiones_post);





module.exports = router;
