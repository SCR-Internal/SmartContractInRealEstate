import express from "express"
import {} from "dotenv/config"
import bodyParser from "body-parser"
import cors from "cors"
import router from "./routes/router.js"

const app = express()
const port = process.env.PORT
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors({ origin: "*" }))
// api
app.use(router)
// app.get("/", (req, res) => {
//   res.send("Hello world")
// })

app.listen(port, () => console.log("server listen on", port))
