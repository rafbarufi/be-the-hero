const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

// Permitiria que apenas acesse o back-end através da origin especificada
// app.use(cors({
//     origin: 'https://meuenderecofront.com'
// }));

app.use(express.json());
app.use(routes);

app.listen(3333);