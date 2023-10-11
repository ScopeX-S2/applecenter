const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // Escolha a porta que desejar

// Define a pasta "public" como a pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para renderizar um arquivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/service-phone', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'service_phone.html'));
});

app.get('/service-desk', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'service_desk.html'));
});

app.get('/service-bga', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'service_bga.html'));
});

app.get('/thankyou', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'thankyou.html'));
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
