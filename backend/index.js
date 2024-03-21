const express               = require('express');
const path                  = require('path');
const app                   = express();
const port                  = 3000;
const bodyParser            = require('body-parser'); //body parser para evitar erros ao receber body da requisicao
const cors                  = require('cors'); //cors para nao dar erro nas requisicoes

const db                    = require('./DB/connection.js'); //importando conexao
const { verifyLogin }       = require('./modules/Verification/Auth.js');
const { insertUser }        = require('./modules/Actions/InsertUser.js');

const { listEventsUser }    = require('./modules/Actions/ListEventsUser.js');
const { insertEvent }       = require('./modules/Actions/InsertEvent.js');
const { deleteEvent }       = require('./modules/Actions/DeleteEvent.js');
const { editEvent }         = require('./modules/Actions/EditEvent.js');
const { loadEvent }         = require('./modules/Actions/LoadEvent.js');

app.use(cors());
app.use(bodyParser.json());


// Defina o diretório de onde o frontend será servido
app.use(express.static(path.join(__dirname, '../frontend')));


app.post('/login', (req, res) => {
    verifyLogin(db, req.body.email, req.body.password, (err, user) => {
        if (err) {
            res.status(401).send(err);
        } else {
            req.user = user;
            res.status(200).json(user);
        }
    });
});

app.post('/userRegister', (req, res) => {
      const userData = req.body;

    insertUser(db, userData)
    .then(result => {

      res.status(200).send('Usuário registrado com sucesso');

    })
    .catch(error => {

      console.error('Erro ao inserir usuário:', error.message);
      res.status(500).send(error.message);

    });
});

app.post('/eventList', (req, res) => {

    listEventsUser(db, req.body.user_id, (err, events) => {
        if (err) {
            res.status(401).send(err);
        } else {
            req.events = events;
            res.status(200).json(events);
        }
    });
});

app.post('/eventRegister', (req, res) => {
    const eventData = req.body;

  insertEvent(db, eventData)
  .then(result => {

    res.status(200).send('Evento registrado com sucesso');

  })
  .catch(error => {

    console.error('Erro ao inserir evento:', error.message);
    res.status(500).send(error.message);

  });
});

app.post('/eventDelete', (req, res) => {
    console.log("caiu 2")

    deleteEvent(db, req.body.event_id)
    .then(result => {

      res.status(200).send('Evento deletado com sucesso');

    })
    .catch(error => {

      console.error('Erro ao deletar evento:', error.message);
      res.status(500).send(error.message);

    });
});

app.post('/eventLoad', (req, res) => {

    loadEvent(db, req.body.event_id, (err, event) => {
        if (err) {
            res.status(401).send(err);
        } else {
            req.event = event;
            res.status(200).json(event);
        }
    });

});

app.post('/eventEdit', (req, res) => {

    console.log("caiu aqui")
    const eventData = req.body;

    editEvent(db, eventData)
    .then(result => {

      res.status(200).send('Evento editado com sucesso');

    })
    .catch(error => {

      console.error('Erro ao editar evento:', error.message);
      res.status(500).send(error.message);

    });
});


// Inicie o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});




