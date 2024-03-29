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
                return Number(value) * 1.11;
            }
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