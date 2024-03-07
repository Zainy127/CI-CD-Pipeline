const dotenv = require("dotenv").config();
const express = require("express");
const products = require("./data");


const app = express();


app.get("/products",(req,res) => {
    try
    {
        res.status(200).json({
            status:"success",
            data:{
                products
            }
        });
    }
    catch(error)
    {
        res.status(404).json({
            message:error.message
        })
    }
})

app.get("/products/:productId",(req,res)=>{
    try
    {
        const productId = req.params.productId;

        console.log("---------------------------------");
        console.log("Product id to get is : ",productId);
        console.log("---------------------------------");

        const product = products.find(()=>{
            return product.id == productId;
        })

        console.log("product found is : ",product);

        return res.status(200).json({
            status:"success",
            data:{
                product
            }
        })


    }
    catch(error)
    {
        res.status(404).json({
            message:error.message
        })
    }
})

app.post("/product",(req,res)=>{
    
    try
    {
        if(!id || !name || !description)
        {
           return res.status(404).json({
                message:"Please pass id,name,description in the body"
            })
        }

        console.log("Req.body : ",req.body);

    }
    catch(error)
    {
        res.status(404).json({
            message:error.message
        })
    }
})

const port = process.env.PORT || 3000;

app.listen(port,() => {
    console.log("************************************");
    console.log(`Server listening on the port ${port}`);
    console.log("************************************");
})