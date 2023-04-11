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
                return Number(value) + 50;
              }
        },
        category:{
            type:String,
            require: true
        },       
        stock:{
            type: Number,
            required: true
        },         
        factor:{
            type: String,
            required: true
        },         
        motherboards :{
            type: String,
            required: true
        },         
        dimensiones :{
            type: String,
            required: true
        },         
        fuente :{
            type: String,
            required: true
        },         
        ventiladores :{
            type: String,
            required: true
        }, 
        cod:{
            type: String,
            required: true,
        }
    }
);

const Gabinetes = model("Gabinetes", componentSchema)

module.exports= Gabinetes;