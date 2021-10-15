const express = require('express')
const app = express()
const ejs = require('ejs')
const data = require('./quotes.json')
const PORT = process.env.PORT || 3000
app.set('view engine','ejs')

app.use(express.static(__dirname +'/public'))

app.get(['/'], (req,res)=>{
    const shuffledData = data.quotes
    shuffle(shuffledData)
res.render('index',{data:shuffledData})
})

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = array[i];
        array[i] = array[j];
        array[j] = t;
    }
        
    return array;
    }
app.listen(PORT, ()=>{
    console.log(`Listening on port:${PORT}`)
})
