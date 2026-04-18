const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Laboratório 4 (Web App - Node.js)</h1>
    <p>Antes das alterações no GitHub</p>
    <p>Obrigado, Pedro Fé - ISTEC LEI A Pós-Laboral</p>
  `);
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});