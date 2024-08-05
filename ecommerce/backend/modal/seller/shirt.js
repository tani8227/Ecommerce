import mongoose from "mongoose";
const shirtSchema= new mongoose.SchemaType(
    {
       companyName:
       {
        type:String,
        required:true,
       },
       
        productName:
        {
            type:String,
            required:true
        },
        size:
        {
            type:String,
            required:true
        },
        imgUrl:
        [
            {
                type:String,
                required:true
            }
        ]


    },
    {
        timestamp:true,
    })

    const Shirt= mongoose.model('Shirt', shirtSchema);
    export default Shirt;