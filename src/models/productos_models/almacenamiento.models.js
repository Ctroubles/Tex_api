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
                return Number(value) * 1.24;
              }
        },
        category:{
            type:String,
            require: true
        },
        capacity:{
            type: String,
            required: true,
        },        
        interfaz:{
            type: String,
            required: true,
        },       
        speed:{
            type: String,
            required: true
        },
        stock:{
            type: Number,
            required: true
        }, 
        cod:{
            type:String,
            required:true
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Almacemiento = model("Almacemiento", componentSchema)

module.exports= Almacemiento;