import CustomersController from "../Controllers/CustomersController.js";
import express from "express";
import passport from 'passport';
import '../config/passport.js';

const router = express.Router();

router.delete('/:id', passport.authenticate('jwt', {session: false}), CustomersController.delete);

export default router;