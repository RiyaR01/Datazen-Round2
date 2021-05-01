const mongoose = require('mongoose');
const Personality = require('../models/personality');

mongoose.connect('mongodb://localhost:27017/Personality', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedDB = async () => {

    var personality = new Personality({ question: "Could you be described as reserved or private?", answer: "No" ,category:"I"});
    await personality.save();
    var personality = new Personality({ question: "Do you tend to think inside your head?", answer: "No" ,category:"I"});
    await personality.save();
    var personality = new Personality({ question: "Do you prefer to think quietly inside your head?", answer: "No" ,category:"I"});
    await personality.save();
    var personality = new Personality({ question: "Do you always see the bigger picture?", answer: "No" ,category:"N"});
    await personality.save();
    var personality = new Personality({ question: "Do you like to imagine the possibilities of how things could be?", answer: "No" ,category:"N"});
    await personality.save();
    var personality = new Personality({ question: "Do you enjoy ideas or concept that may not seem practical?", answer: "No" ,category:"N"});
    await personality.save();
    var personality = new Personality({ question: "Do you think you are warm or empathetic?", answer: "No" ,category:"F"});
    await personality.save();
    var personality = new Personality({ question: "Do you value harmony and peace?", answer: "No" ,category:"F"});
    await personality.save();
    var personality = new Personality({ question: "Do you usually take a decision based on your feelings alone?", answer: "No" ,category:"F"});
    await personality.save();
    var personality = new Personality({ question: "Would you like to adapt to a new way of life?", answer: "No" ,category:"P"});
    await personality.save();
    var personality = new Personality({ question: "Do you like to keep your options open ?", answer: "No" ,category:"P"});
    await personality.save();
    var personality = new Personality({ question: "Are you spontaneous in making your decisions?", answer: "No" ,category:"P"});
    await personality.save();
}

seedDB().then(() => {
    mongoose.connection.close();
})