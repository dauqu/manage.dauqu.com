const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.post("/", async (req, res) => {

    cloudflare_url = "https://api.cloudflare.com/client/v4/zones/" + process.env.CLOUDFLARE_ZONE + "/dns_records";

    //Check all fields are filled
    if (!req.body.name || !req.body.content) {
        return res.status(400).json({
            message: "All fields are required.",
            status: "warning"
        });
    }

    //Post request to cloudflare
    await axios.post(cloudflare_url, {
        type: "A",
        name: req.body.name,
        content: req.body.content,
        ttl: 300,
        proxied: true
    }, {
        headers: {
            "X-Auth-Email": process.env.X_AUTH_EMAIL,
            "X-Auth-Key": process.env.X_AUTH_KEY,
            "Authorization": "Bearer " + process.env.AUTHORIZATION,
        }
    }).then((response) => {
        res.status(200).json({
            message: "DNS record created successfully.",
            status: "success"
        });
    }).catch((error) => {
        res.status(500).json({
            message: error.message,
            status: "error"
        });
    });
});

module.exports = router;