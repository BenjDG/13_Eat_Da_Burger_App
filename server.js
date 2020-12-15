const express = require('express');


const PORT = process.env.PORT || 443;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const routes = require('./controllers/burgers_controller.js');

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server started on port:` + PORT);
});