const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'randomDB';

// Create a new MongoClient
const client = new MongoClient(url, {
    useUnifiedTopology: true
});

// Use connect method to connect to the Server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    /* uncomment this to insert documents into DB and comment out findDocuments() 
    insertDocuments(db, function() {
        client.close();
    });
    */
    findDocuments(db, function () {
        client.close();
    });
});


const insertDocuments = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('random');
    // Insert some documents
    collection.insertMany([{
            name: "Coffee",
            sugar: "10gram",
            coffeePowder: "3gram",
            milk: 120
        },
        {
            name: "Tea",
            sugar: "15gram",
            tea: "5gram",
            milk: 70,
            water: 65
        }
    ], function (err, result) {
        assert.equal(err, null);
        assert.equal(2, result.result.n);
        assert.equal(2, result.ops.length);
        console.log("Inserted 2 documents into the collection");
        callback(result);
    });
}

const findDocuments = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('random');
    // Find some documents
    collection.find({}).toArray(function (err, random) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(random)
        callback(random);
    });
}