import express from "express"
import UserController from "../controllers/UserController.js"

const router = express.Router()

router.get("/", (req, res) => res.send("hello"))
router.post("/add_user", UserController.index)
router.post("/add_contract", UserController.addContract)

export default router
