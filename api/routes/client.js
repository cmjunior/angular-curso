const express = require('express');
const bcryptjs = require('bcryptjs');
const Client = require('../models/client');

const clientRouter = express.Router();

clientRouter.post('/api/client', async (req, res) => {
    const { nome, documento, email, senha, cep, numero, complemento } = req.body;

    const exists = await Client.findOne({email});

    if ( exists ) {
        return res.status(400).json({message: 'Client with same email already exists'})
    }
    
    try {
        const hash = await bcryptjs.hash(senha, 8);
        let client = new Client({
            name: nome,
            document: documento, 
            email, 
            password: hash,
            zip: cep,
            number: numero,
            complement: complemento
        });

        client = await client.save();
        res.status(201).json({client});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

module.exports = clientRouter;