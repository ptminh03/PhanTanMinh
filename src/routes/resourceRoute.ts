import express from "express"
import * as resourceController from "../controllers/resourceController"

const router = express.Router()

router.get("/resources", resourceController.list)
router.post("/resources", resourceController.create)
router.get("/resources", resourceController.list)
router.get("/resources/:id", resourceController.detail)
router.put("/resources/:id", resourceController.update)
router.delete("/resources/:id", resourceController.remove)

export default router
