const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const conn = require('./db/conn')
const session = require('express-session')
const bodyParser = require('body-parser')



const User = require('./models/User')

const UserRoutes = require('./routes/userRoutes')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars' )

// LOGIN / REGISTRO 
app.use(session({
    secret:'asfsdgdsgadgh',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended:true}))

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use(express.static('public'))

app.use('/users', UserRoutes)

conn .sync() .then(() =>{
    app.listen(3000)
})
.catch((err) => console.log(err))