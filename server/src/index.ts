import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { Job } from "./entity/jobs";
import { Translate } from "./entity/Translate";
import express from "express";
import { createUserRouter } from "./routes/create_user";
import { createJobRouter } from "./routes/create_job";
import { createTranslateRouter } from "./routes/create_translate";
import { deleteJobRouter } from "./routes/delete_job";
import { fetchJobsRouter } from "./routes/fetch_jobs";
import { fetchUsersRouter } from "./routes/fetch_users";
import { updateJobRouter } from "./routes/update_job";
import { fetchOneJobRouter } from "./routes/fetch_one_job";

// const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');

const app = express();


// const users = [
//     { id: 1, username: 'alice', password: 'password1' },
//     { id: 2, username: 'bob', password: 'password2' }
//   ];

// app.post('/api/login', (req, res) => {
//     const { username, password } = req.body;
//     const user = users.find(u => u.username === username && u.password === password);
//     if (user) {
//       const token = jwt.sign({ sub: user.id }, 'secretkey');
//       res.json({ token });
//     } else {
//       res.status(401).send('Invalid username or password');
//     }
//   });


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // allow requests from any origin
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS"); // allow these HTTP methods
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // allow these headers
    next();
  });
  
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
    app.use(deleteJobRouter)
    app.use(fetchJobsRouter)
    app.use(fetchUsersRouter)
    app.use(updateJobRouter)
    app.use(fetchOneJobRouter)
    app.listen(8080, () => {
        console.log('Server started on port 8080')
    })
}
    catch (error) {
        console.log('Error connecting to database', error)
    }
}

main();