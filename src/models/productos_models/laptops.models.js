const { Schema, model }= require("mongoose");

const componentSchema= new Schema(
    {
        name:{
            type: String,
            required: true,
        },
        marca:{
            type: String,
            required: true,
        },
        img:{
            type: String,
            required: true
        },
        price:{
            type: Number,
            required: true,
            get: function (value) {
                const price = Number(value);
                if (price < 3000) {
                  return price + 300;
                } else if (price >= 3000 && price < 4000) {
                  return price * 1.1;
                } else {
                  return price * 1.11;
                }
              },
        },
        category:{
            type:String,
            require: true
        },
        stock:{
            type: Number,
            required: true
        },          
        pantalla:{
            type: String,
            required: true
        },         
        procesador:{
            type: String,
            required: true
        },      
        RAM:{
            type: String,
            required: true
        },      
        Almacenamiento:{
            type: String,
            required: true
        },      
        graphics:{
            type: String,
            required: true
        },          
        conectividad:{
            type: String,
            required: true
        },           
        tecladoBacklit:{
            type: String,
            required: true
        },            
        os:{
            type: String,
            required: true
        },          
        fingerPrint:{
            type: String,
            required: true
        },      
        cod:{
            type: String,
            required: true
        },         
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Laptops = model("Laptops", componentSchema)

module.exports= Laptops;