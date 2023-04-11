const { Schema, model }= require("mongoose");

const PurchaseOrderSchema= new Schema(
    {
        nOrden: {
            type: String,
            required: true,
        }, 
        status: {
            type: Boolean,
            default:false,
            required: true,
        }, 
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        fullName:{
            type: String,
            required: true,
        },
        DNI:{
            type: Number,
            required: true
        },
        phone:{
            type: Number,
            required: true,
        },
        email:{
            type:String,
            require: true
        },
        department:{
            type: String,
            required: true
        },         
        city:{
            type: String,
            required: true
        }, 
        address:{
            type: String,
            required: false
        },  
        date:{
            type: Number,
            required: true,
        }, 
        totalPrice:{
            type: Number,
            required: true,
        },  
        paymentMethod:{
            type: String,
            required: true,
        },        
        products:{
            type: Array,
            required: true,
        },               
        instructions:{
            type: String,
            required: false
        },
      
    },
    { timestamps: true }
);

const PurchaseOrder = model("PurchaseOrder", PurchaseOrderSchema)

module.exports= PurchaseOrder;