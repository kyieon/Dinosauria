import { env } from "process"
import express, { Application, Request, Response } from "express"

const PORT = env.PORT ?? 4000

const app = express()

app.get("/", (req: Request, res: Response) => {
  console.log("REQ : " + req)

  res.send("response")
})

app.listen(PORT, () => {
  console.log("-----------------------------------------")
  console.log("      Sauroposeidon WebServer Start      ")
  console.log("-----------------------------------------")
})
