const mongoose = require("mongoose");

async function connectToDB() {
	try {
		await mongoose.connect("mongodb://0.0.0.0:27017/quizzes_app");
		console.log("MongoDB connected");
	} catch (error) {
		console.error("Error connecting to MongoDB:", error.message);
	}
}

module.exports = connectToDB;
