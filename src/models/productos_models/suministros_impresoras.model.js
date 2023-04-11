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
        },
        category:{
            type:String,
            require: true
        },
        stock:{
            type: Number,
            required: true
        },         
        tipo:{
            type: String,
            required: true
        },         
        modelo:{
            type: String,
            required: true
        },        
        color:{
            type: String,
            required: true
        },        
        cantidad:{
            type: String,
            required: true
        },        
        compatibilidad:{
            type: String,
            required: true
        }, 
        cod:{
            type:String,
            required:true
        }
    },

);

const ImpresoraSuministros = model("ImpresoraSuministros", componentSchema)

module.exports= ImpresoraSuministros;