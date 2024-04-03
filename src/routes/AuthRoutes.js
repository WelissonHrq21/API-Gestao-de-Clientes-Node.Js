import express from "express";
import User from "../models/Users.js";
import jwt from 'jsonwebtoken';


const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = new User({ username, password });
        await user.save();

        res.status(201).json({message: 'Usuario criado com sucesso.'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({username});

        if(!user || !(await user.comparePassword(password))){
            return res.status(401).json({message: "Nome de usuário ou senha incorretos!"});
        }

        const payload = {id: user.id};
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });

        res.json({message: 'Autenticação realizada com sucesso!', token})
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

export default router;