import CustomersController from "../Controllers/CustomersController.js";
import express from "express";
import passport from 'passport';
import '../config/passport.js';

const router = express.Router();

router.post('/', passport.authenticate('jwt', {session: false}), CustomersController.post);

export default router;