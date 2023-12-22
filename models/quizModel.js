const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
	id: { type: Number, unique: true },
	name: String,
	course: String,
	topic: String,
	dueDate: String,
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
