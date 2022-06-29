import { Router } from "express";
import { CreateProductController } from "./controller/CreateProductController";

const router = Router();

const createProductController = new CreateProductController();

router.post("/product", createProductController.handle);

export { router };