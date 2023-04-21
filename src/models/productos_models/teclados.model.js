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
            require: true,
            get: function (value) {
                let multiplier = 1.15;
                if (this.marca === 'CORSAIR') {
                    multiplier = 1.16; 
                } else if (this.marca === 'MICROSOFT') {
                    multiplier = 1.18; 
                }
                return Number(value) * multiplier;
            }
        },
        stock:{
            type: Number,
            required: true
        },        
        keyBoardType:{
            type: String,
            required: true
        },         
        switchType:{
            type: String,
            required: true
        },    
        conectividad:{
            type: String,
            required: true
        },       
        backlit:{
            type: String,
            required: true
        },         
        programable:{
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
    },
);

const Teclados = model("Teclados", componentSchema)

module.exports= Teclados;