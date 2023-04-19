const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('API para captura de leads');
});

const leads = [];

app.post('/leads', (req, res) => {
    const {name, email, cpf, phone } = req.body; 
    const created_at = new Date();
    const existingLead = leads.find((lead) => lead.email === email);
    if (existingLead) {
    return res.status(409).send('Este email já foi cadastrado.');
    }
    const newLead = { id: leads.length + 1, name, email, cpf, phone, created_at };
    leads.push(newLead);

    console.log(`Novo lead capturado: ${name}, ${email}, ${cpf}, ${phone}, ${created_at}`);
    
    res.send('Lead capturado com sucesso!');
  });
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
