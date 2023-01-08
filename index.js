import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import router from './Router/router.js'
import Connectmongo from './connectdb.js';
const app = express()
const port = process.env.PORT;
const URI = process.env.URI
Connectmongo(URI)
app.use(express.urlencoded({ extended: false }))

app.use(express.static('staticfiles'))

app.set('view engine', 'ejs')
app.set('views', './view')
app.use('/', router)

app.listen(port, () => {
    console.log(`The server is listning on http://localhost:${port}`);
})