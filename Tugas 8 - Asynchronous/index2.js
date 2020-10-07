var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
function ask() {
    readBooksPromise(10000, books[0])
        .then(function (fulfilled) {

        readBooksPromise(fulfilled, books[1])
            .then(function (fulfilled) {
                
                readBooksPromise(fulfilled, books[2])
                .then(function (fulfilled) {
                    
                })
                .catch(function (error) {
    
                    console.log(error.message);
    
                });
            })
            .catch(function (error) {

                console.log(error.message);

            });
        })
        .catch(function (error) {

            console.log(error.message);

        });
}
ask(); 