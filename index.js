const express = require('express');
const app = express();
const db = require('./models');
const port = process.env.PORT || 3000;
const apiRouter = require('./routes/api');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);
db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log("app listening on port " + port);
    })
})