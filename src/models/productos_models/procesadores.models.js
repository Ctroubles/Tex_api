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
        socket:{
            type: String,
            required: true,
        },    
        ram:{
            type: String,
            required: true
        },  
        cooler:{
            type: Boolean,
            required: true
        },         
        graphics:{
            type: String,
            required: false
        },    
           
        stock:{
            type: Number,
            required: true
        },
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Procesadores = model("Procesadores", componentSchema)

module.exports= Procesadores