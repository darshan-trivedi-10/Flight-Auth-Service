const bodyParser = require('body-parser');
const express = require('express');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./router/index');

const { User, Role } = require('./models/index');

const app = express();

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', apiRoutes);

    app.listen(PORT, async() => {
        console.log(`Server Started on Port ${PORT}`);
        if (process.env.DB_SYNC) {
            db.sequelize.sync({ alert: true });
        }
    })
}

prepareAndStartServer();