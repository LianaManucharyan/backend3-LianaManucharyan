import { Router } from "express";
import mocksController from "../controllers/mocks.controller.js";

const router = Router();

// Endpoint para generar mascotas ficticias
router.get("/mockingpets", mocksController.createPets);

// Endpoint para generar usuarios ficticios
router.get("/mockingusers", mocksController.createUsers);

// Endpoint para generar y agregar datos a la base de datos
router.post("/generateData", mocksController.generateData);

export default router;
