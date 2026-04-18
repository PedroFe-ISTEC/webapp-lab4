const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Laboratório 4 (Web App - Node.js)</h1>
    <p>Depois das alterações no GitHub</p>
    <p>Texto com as novas alterações e deployment feitos para Azure</p>
    <p>Obrigado, Pedro Fé - ISTEC LEI A Pós-Laboral</p>
  `);
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});