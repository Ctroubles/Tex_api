const Almacenamiento = require("../../models/productos_models/almacenamiento.models.js");
const Procesadores = require("../../models/productos_models/procesadores.models");
const Ram = require("../../models/productos_models/ram.models");
const Graficas = require("../../models/productos_models/graficas.models.js")
const Fuentes = require("../../models/productos_models/fuentes.models.js")
const Motherboards = require("../../models/productos_models/moterboard.model.js")
const Gabinetes = require("../../models/productos_models/gabinetes.models.js")
const Monitores = require("../../models/productos_models/monitores.model.js");
const Mouses = require("../../models/productos_models/mouses.model.js");
const Laptops = require("../../models/productos_models/laptops.models.js");


const findComp = async (name) => {
    const regExpName = new RegExp(name, 'i');
    const compByName = await Components.find({ name: regExpName });
    if (!compByName.length) throw 'No se han encontrado componentes con ese nombre';
    else return compByName;
}


const findById = async (id) => {

        const [almacenamiento, procesador, ram, grafica, fuentes, motherboards, gabinetes, monitores, mouse,laptop] = await Promise.all([
            Almacenamiento.findById(id),
            Procesadores.findById(id),
            Ram.findById(id),
            Graficas.findById(id),
            Fuentes.findById(id),
            Motherboards.findById(id),
            Gabinetes.findById(id),
            Monitores.findById(id),
            Mouses.findById(id),
            Laptops.findById(id),
        ]);
        if(procesador) return procesador;
        if(almacenamiento) return almacenamiento;
        if(ram) return ram;
        if(grafica) return grafica;
        if(fuentes) return fuentes;
        if(motherboards) return motherboards;
        if(gabinetes) return gabinetes;
        if(monitores) return monitores;
        if(mouse) return mouse;
        if(laptop) return laptop;
        else throw new Error("No se ha encontrado un componente con ese ID");
    
}

const findStock = async () => {
    try {
    const data = await allComps();
    const stockfinal = [];
    data.forEach(e => {
        if(e.stock){
        const found = stockfinal.find(x => x.category === e.category);
        if (!found) {
            stockfinal.push({
                category: e.category,
                stock: e.quantityStock
            });
        } else {
            found.stock += e.quantityStock;
        }
    }
    });
    return stockfinal;
} catch (error) {
        throw error
}
};

module.exports = {
    findComp,
    findById,
    findStock,
}