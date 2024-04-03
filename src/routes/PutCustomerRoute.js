import CustomersController from "../Controllers/CustomersController.js";
import express from "express";

const router = express.Router();

router.put('/:id', CustomersController.put);

export default router;