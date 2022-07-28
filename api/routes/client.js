const express = require('express');
const bcryptjs = require('bcryptjs');
const Client = require('../models/client');

const clientRouter = express.Router();

clientRouter.post('/api/client', async (req, res) => {
    const { name, document, email, password, zip, number, complement } = req.body;

    const exists = await Client.findOne({email});

    if ( exists ) {
        return res.status(400).json({erro: true, message: 'Client with same email already exists'})
    }
    
    try {
        const hash = await bcryptjs.hash(password, 8);
        let client = new Client({
            name,
            document, 
            email, 
            password: hash,
            zip,
            number,
            complement
        });

        client = await client.save();
        res.status(201).json({client});
    } catch (err) {
        res.status(500).json({erro: true, error: err.message});
    }
});

module.exports = clientRouter;