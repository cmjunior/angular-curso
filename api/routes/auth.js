const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Client = require('../models/client');

const authRouter = express.Router();

authRouter.post('/api/signup', async (req, res) => {
    const { name, email, password } = req.body;

    const exists = await User.findOne({email});

    if ( exists ) {
        return res.status(400).json({message: 'User with same email already exists'})
    }
    
    try {
        const hash = await bcryptjs.hash(password, 8);
        let user = new User({
            name, 
            email, 
            password: hash
        });

        user = await user.save();
        res.status(201).json({user});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

authRouter.post('/api/signin', async (req,res) => {
    try {    
        const { email, password } = req.body;        
    
        const client = await Client.findOne({email: email});
        if ( ! client ) {
            return res.status(400).json({erro: true, msg: "User with this email does not exists!"});
        }
    
        console.log(client.password);
        const isMatch = await bcryptjs.compare(password, client.password);
        if ( !isMatch ) {
            return res.status(400).json({erro: true, msg: "Password mismatch!"});
        }

        const userData = {...client._doc};
        delete userData.password;
        const token = jwt.sign({id: client._id}, "passwordKey");
        return res.json({token, ...userData});
    } catch (error) {
        return res.status(500).json({erro: true, error: error.message});
    }
});

module.exports = authRouter;