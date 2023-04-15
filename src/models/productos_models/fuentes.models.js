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
                return Number(value) * 1.28;
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
        formato:{
            type: String,
            required: true
        },        
        certification:{
            type: String,
            required: true
        }, 
        potencia:{
            type: String,
            required: true
        },         
        conectores:{
            type: String,
            required: true
        },          
        cable:{
            type: Boolean,
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

const Fuentes = model("Fuentes", componentSchema)

module.exports= Fuentes;