const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/randomDB",  { useNewUrlParser: true, useUnifiedTopology: true });

const coffeeSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, 'Kindly check name field, seems no name have been specified! :( ']
    },
    caffine: {
        type: Number,
        min: 12,
        max: 40
    },
    sugar: {
        type: Number,
        min: 0,
        max: 25
    },
    water: {
        type: Number,
        min: 0,
        max: 70
    },
    milk: {
        type: Number,
        min: 0,
        max: 60
    }
});

const Coffee = mongoose.model("Coffee", coffeeSchema);


const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    likesCoffee: coffeeSchema
});

const Person = mongoose.model("Person", personSchema);


const coffee = new Coffee({
    name: 'Capacino',
    caffine: '17',
    sugar: '15',
    water: '15',
    milk: '53'
});
// coffee.save();

const americano = new Coffee({
    name: 'Americano',
    caffine: '28',
    sugar: '16',
    water: '56',
    milk: '0'
});
// americano.save();

const anyCoffee = new Coffee({
    name: 'any Coffee',
    caffine: 24,
    sugar: 16,
    water: 60,
    milk: 0
});
// anyCoffee.save();

const person = new Person({
    name: 'Avinash',
    age: 60,
    likesCoffee: anyCoffee
});
// person.save();

const latte = new Coffee({
    name: 'Latte',
    caffine: 15,
    sugar: 18,
    water: 25,
    milk: 47
});

const espreso = new Coffee({
    name: 'Espreso',
    caffine: 28,
    sugar: 14,
    water: 30,
    milk: 28
});

const mocha = new Coffee({
    name: 'Mocha',
    caffine: 21,
    sugar: 20,
    water: 12,
    milk: 47
});

// insert all the items
// Coffee.insertMany([latte, espreso, mocha], function(err){
//     if(err) {
//         console.log(err);
//     }else {
//         console.log('Successfully saved all the variety of coffee into randomDB.');
//     }
// });

// return all the coffee variety
Coffee.find(function(err, coffees){
    if(err){
        console.log(err);
    } else {
        // console.log(coffees);
        mongoose.connection.close();

        coffees.forEach(element => {
            console.log(element.name + ' have Caffine of ' + element.caffine + '%');
        });
    }
});


// Coffee.updateOne({_id: '5eab46a69150350fd0ceb760'}, {caffine: 28}, function(err) {
//     if(err) {
//         console.log(err);
//     }else {
//         console.log('Successfully updated the document! :) ');
//     }    
// });


// Coffee.deleteOne({name: 'Americano'}, function(err){
//     if(err){
//         console.log(err);
//     } else {
//         console.log('Successfully deleted the document! :)');
//     }
// })


// Person.deleteMany({name: 'Roshan'}, function(err){
//     if(err){
//         console.log(err);
//     } else {
//         console.log('Successfully deleted all the document! :)');
//     }
// })