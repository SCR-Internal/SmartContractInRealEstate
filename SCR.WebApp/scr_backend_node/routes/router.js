import express from "express"
import UserController from "../controllers/UserController.js"

const router = express.Router()

router.get("/", (req, res) => res.send("hello"))
router.post("/add_user", UserController.index)

export default router
