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
            min: -2147483648,
            max: 2147483647,
        },
        price:{
            type: Number,            
            required: true,
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
    }
);

const Ram = model("Ram", componentSchema)

module.exports= Ram;