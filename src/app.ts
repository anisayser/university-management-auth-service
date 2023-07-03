import express, {  Application, Request, Response } from 'express';
import cors from 'cors';
import userRoutes from "./app/modules/users/user.route";

const app: Application = express()
// const port = 3000;

//middlewares
app.use(cors())
//parser
app.use(express.json())


// Application Routes
app.use("/api/v1/users/", userRoutes);


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
