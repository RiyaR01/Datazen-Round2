const mongoose = require('mongoose');
const Code = require('../models/code');

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

    var code = new Code({ code: "ISTJ", per: "You are hardworking,trustworthy with sound practical judgment."});
    await code.save();
    var code = new Code({ code: "ISFJ", per: "You are a devoted caretaker who enjoys being helpful to others."});
    await code.save();
    var code = new Code({ code: "INFJ", per: "You are a compassionate and idealistic person who seeks harmony and cooperation."});
    await code.save();
    var code = new Code({ code: "INTJ", per: "You are driven by your own original ,strategic ideas to achieve insightful improvements."});
    await code.save();
    var code = new Code({ code: "ISTP", per: "You are an action-oriented ,spontaneous and understanding person."});
    await code.save();
    var code = new Code({ code: "ISFP", per: "You are nurturing,helpful and realistic in life."});
    await code.save();
    var code = new Code({ code: "INFP", per: "You are very caring and loyal. you like to focus on your dreams ans explore all possibilities in life."});
    await code.save();
    var code = new Code({ code: "INTP", per: "You are precise,imaginative and usually enjoy speculating a situation."});
    await code.save();
    var code = new Code({ code: "ESTP", per: "You are spontaneous , action-oriented person with a creative problem solving ability."});
    await code.save();
    var code = new Code({ code: "ESFP", per: "You are tactful,flexible and have a strong common sense."});
    await code.save();
    var code = new Code({ code: "ENFP", per: "You are optimistic,supportive and value inspiration."});
    await code.save();
    var code = new Code({ code: "ENTP", per: "You enjoy new ideas and challenges."});
    await code.save();
    var code = new Code({ code: "ESTJ", per: "You are dependable and like to run the show and get things done."});
    await code.save();
    var code = new Code({ code: "ESFJ", per: "You get things done in an orderly fashion."});
    await code.save();
    var code = new Code({ code: "ENFJ", per: "You are friendly,outgoing and organized."});
    await code.save();
    var code = new Code({ code: "ENTJ", per: "You are responsible,caring and have an idealisitc approach towards life."});
    await code.save();
}

seedDB().then(() => {
    mongoose.connection.close();
})