var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQlite database.')
        db.run(`CREATE TABLE customer (
            customerId INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            address text,
            email text,
            dateOfBirth text,
            gender text,       
            age INTEGER,
            cardHolderName text,
            cardNumber INTEGER,
            expiryDate text,
            cvv INTERGER,
            timeStamp text
            )`, (err) => {
            if (err) {
                // Table already created
            } else {
                // Table just created, creating some rows
                var insert = 'INSERT INTO customer (name, address, email, dateOfBirth, gender, age, cardHolderName, cardNumber, expiryDate, cvv,timeStamp) VALUES (?,?,?,?,?,?,?,?,?,?,?)'
                db.run(insert, ["Jayantha De Silva", "345, Galle Road, Colombo 4", "customer2022@gmail.com", "2000.04.14", "Male", 22, "Laxshman Perera", 102030405060, "12/2023",888,"2022-12-31 23:59:59"])
            }
        })

    }
})

module.exports = db

