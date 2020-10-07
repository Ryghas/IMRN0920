var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
var i = 0;

readBooks(10000, books[0], function(check){
    readBooks(check, books[1], function(check){
        readBooks(check, books[2], function(check){})
    })
})