// Import Express module
import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express'
import resourceController from "./routes/resourceRoute"

// Khởi tạo ứng dụng Express
const app = express()
app.use(express.json())

app.use("/", resourceController)

app.use((error: any, _req: Request, res: Response, _next: NextFunction) => {
    res.status(500).json({error})
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
