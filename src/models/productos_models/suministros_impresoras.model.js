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
                let multiplier = 1.25; 
                if (this.tipo === 'Cartucho') {
                    multiplier = 1.25; 
                }else if (this.tipo === 'Líquida') {
                    multiplier = 1.29; 
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
    {
        toJSON: {
            getters: true
        }
    },
);

const ImpresoraSuministros = model("ImpresoraSuministros", componentSchema)

module.exports= ImpresoraSuministros;