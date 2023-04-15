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
        stock:{
            type: Number,
            required: true,
        },
        price:{
            type: Number,            
            required: true,
            get: function (value) {
                return Number(value) * 1.27;
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
        ddr:{
            type: String,
            enum: ['DDR3', 'DDR4', 'DDR5'],
            required: true,
        },        
        bus:{
            type: String,
            required: true,
        },
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Ram = model("Ram", componentSchema)

module.exports= Ram;