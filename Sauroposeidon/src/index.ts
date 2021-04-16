import express, { Application, Request, Response } from "express"
import util from 'util'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT ?? 4000

const app = express()

import * as userService from './service/user-service'

app.get("/", (req: Request, res: Response) => {
  console.log("REQ : " + req)
  const users = userService.getUser();
  res.send(users)
})

app.listen(PORT, () => {
  console.log("-----------------------------------------")
  console.log("     Sauroposeidon WebServer Start       ")
  console.log(util.format("\t - PORT : %d", PORT))
  console.log("-----------------------------------------")
})
