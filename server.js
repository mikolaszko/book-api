const express = require('express')
const app = express()
const PORT = 8000

const books = {
    'frankenstein': {
        'author':'Mary Wolf',
        'genre':'Horror'
    },
    'the book of cairo':{
        'authors':'Various',
        'genre':'Short-stories'
    },
    'unknown':{
        'author':'unknown',
        'genre':'unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:book', (req, res) => {
    const bookTitle = req.params.book.toLowerCase()
    if(books[bookTitle]){
        res.json(books[bookTitle])
    } else {
        res.json(books['unknown'])
    }
    
})

app.listen(PORT, () =>{
    console.log(`The server is running on port ${PORT}!`)
})