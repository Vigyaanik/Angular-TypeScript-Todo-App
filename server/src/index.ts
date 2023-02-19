import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { Job } from "./entity/jobs";
import { Translate } from "./entity/Translate";
import express from "express";
import { createUserRouter } from "./routes/create_user";
import { createJobRouter } from "./routes/create_job";
import { createTranslateRouter } from "./routes/create_translate";

const app = express();

const main = async () => {
    try {
        await createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "2080",
        database: "users",
        entities: [User, Job, Translate],
        synchronize: true,
    })
    console.log('Connected to database')

    app.use(express.json());
    app.use(createUserRouter)
    app.use(createJobRouter)
    app.use(createTranslateRouter)
    app.listen(8080, () => {
        console.log('Server started on port 8080')
    })
}
    catch (error) {
        console.log('Error connecting to database', error)
    }
}

main();