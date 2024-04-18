import { DataSource } from "typeorm"

export const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 3308,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    entities: ['./src/entities/*.ts'],
    logging: true,
    synchronize: false,
})

myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })
