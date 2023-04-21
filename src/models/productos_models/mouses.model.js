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
                let multiplier = 1.14; 
                if (this.marca === 'MICROSOFT') {
                    multiplier = 1.29; 
                } else if (this.marca === 'CORSAIR') {
                    multiplier = 1.15; 
                }else if(this.marca  ==="MSI"){
                    multiplier = 1.32; 
                }else if(this.marca === "LG"){
                    multiplier = 1.8; 
                }else if(this.marca === "LENOVO"){
                    multiplier = 1.60; 
                }else if(this.marca === "TEROS"){
                    multiplier = 1.50; 
                }
                return Number(value) * multiplier;
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
        botones:{
            type: Number,
            required: true
        },                 
        DPI:{
            type: String,
            required: true
        },       
        interfaz:{
            type: String,
            required: true
        },
        RGB:{
            type:String,
            required:true,
        },        
        programable:{
            type:String,
            required:true,
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
    },
);

const Mouses = model("Mouses", componentSchema)

module.exports= Mouses;