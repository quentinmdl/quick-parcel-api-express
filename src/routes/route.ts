// Imports
import { Router } from "express";
import CalculatriceController from '../controllers/controller';

// Initialize variables 
const router = Router();

// Calculatrice
router.post("/add", CalculatriceController.addition)
router.post("/sub", CalculatriceController.substraction)
router.post("/multi", CalculatriceController.multiplication)


module.exports = router;
