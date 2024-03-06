const axios = require("axios")


const initializePayment = (req, res) => {

    console.log("4")
    // redirect url when payment is successful
    const CALLBACK_URL = "http://localhost:3000"
    res.json({res: "message", url: CALLBACK_URL})

}

const verifyPayment = (req, res) => {

    // test payment id
    const testid = 3733030
    res.json({message: "response", param: testid})
}

module.exports = { initializePayment, verifyPayment }