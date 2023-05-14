const { Router } = require('express');
const uploadRoutes = require('../controllers/cloudinaryPrueba');
const { findById,} = require("../controllers/component/getComponents.js");

const categoriesRoutes = require("./categories_routes")
const userRoutes= require("./userRoutes.js")
const reviewRoutes= require("./reviewRoutes.js");
const nodemailer = require('./nodemailer.js');


const payment_routes = require("./payment/payment_routes.js")
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
const ImpresoraSuministros = require("../models/productos_models/suministros_impresoras.model.js");
const Microfono = require('../models/productos_models/microfonos.model');
const Audifonos = require('../models/productos_models/audifonos.model');
const Monitores = require('../models/productos_models/monitores.model');
const Motherboard = require('../models/productos_models/motherboard.model');
const Mouses = require('../models/productos_models/mouses.model');



const router = Router();


router.get("/",async(req,res)=>{
    try {
        const [laptops, almacenamiento, procesadores, ram , graficas,fuentes, gabinetes,teclados, impresoras,microfonos,audifonos,monitores,motherboard,mouses,impresoraSuministros] = await Promise.all([
            Laptops.find(),
            Almacenamiento.find(),
            Procesadores.find(),
            Ram.find(),
            Graficas.find(),
            Fuentes.find(),
            Gabinetes.find(),
            Teclados.find(),
            Impresoras.find(),
            Microfono.find(),
            Audifonos.find(),
            Monitores.find(),
            Motherboard.find(),
            Mouses.find(),
            ImpresoraSuministros.find(),
        ]);
        res.json({laptops, graficas, almacenamiento, procesadores, ram, fuentes, gabinetes, teclados, impresoras, microfonos, audifonos, monitores, motherboard, mouses, impresoraSuministros});
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
router.use("/payment", payment_routes)
// router.use("/review", reviewRoutes)
// router.use("/upload", uploadRoutes)
// router.use('/mailer', nodemailer);
// router.use('/cpu', cpu_routes);
// router.use('/ram', ram_routes);
router.use('/shopping', purchase_orders);
router.use('/insert', peticiones_post);





module.exports = router;
