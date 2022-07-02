import express from 'express';

const app = express();

app.get('/', (_req, res) => res.json({ message: "Hello, Todo List!"}));

app.listen(3333);