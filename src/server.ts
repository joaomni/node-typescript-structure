import express from "express";

const app = express()

const APP_PORT = 3333

app.get('/', (request, response) => {
    return response.json({ message: 'Hello Wolrd' })
})

app.listen(APP_PORT, () => {
    console.log(`[*] Server running in http://localhost:${APP_PORT}`)
})