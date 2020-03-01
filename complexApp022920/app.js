
const express = require('express')
const app = express()

/* we test the router */
/* we can use any name but for the const but we going to use require to use the newly create router file */
const router = require('./router')
console.log(router)


app.use(express.static('public'))
// the first parameter because it's an express option 
// the second argeument can be anything but because we name our folder views 
app.set('views', 'views')
// this will tell the view engine which engine to use. 
app.set('view engine', 'ejs')

// this will tell the new router file we just set up to use
// we going to use the .use method and it's gonna take in two argument
// the first argument is / which is going to be our base of our site and then
// the second argument is router 
app.use("/", router)


app.listen(3000)






















