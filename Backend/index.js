const cors = require("cors");
const express = require("express")
const stripe = require("stripe")("sk_test_51HrHIXLrQoe7hPNzO6HrhkR6rHwzIxjgGLtBL3IpdoXTXewdj1acuZnNGlW6jPXDbqSnGQ3cbfs3CHfKFW8T4NWt0092lY4JBa")
const {v4 : uuidv4} = require('uuid');
// require('dotenv').config()



const app = express()



//middleware
app.use(express.json())
app.use(cors())


//routes
app.get("/", (req,res) => {
    res.send("APP IS WORKING!")
})

app.post("/payment", (req, res) => {

    const {cart, token} = req.body;
    console.log("PRODUCT", cart);
    console.log("PRICE", cart);
    const idempontencyKey = uuidv4();
    
    return stripe.customers
        .create({
            email: token.email,
            source: token.id
    })
        .then(customer => {
            stripe.charges.create({
                amount: cart.price * 100,
                currency: "usd",
                customer: customer.id,
                receipt_email: token.email,
                description: `purchase of product.name`
        }, {idempontencyKey})
    })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))
})


//listen
app.listen(8282, () => console.log("listening at port 8282"))