const Quiz = require("../models/quizModel");

async function getQuizById(req, res) {
	try {
		const quiz = await Quiz.findOne({ id: req.params.id }, { _id: 0 });
		if (!quiz) {
			return res.status(404).json({ message: "Quiz not found" });
		}
		res.json(quiz);
	} catch (error) {
		console.error("Error fetching quiz:", error);
		res.status(500).send("Internal Server Error");
	}
}

async function getAllQuizzes(req, res) {
	try {
		const quizzes = await Quiz.find({}, { _id: 0 });
		res.json(quizzes);
	} catch (error) {
		console.error("Error fetching quizzes:", error);
		res.status(500).send("Internal Server Error");
	}
}

async function createQuiz(req, res) {
	try {
		const nextId = await getNextQuizId();
		await Quiz.create({ id: nextId, ...req.body });
		res.json({ message: "Quiz created successfully" });
	} catch (error) {
		console.error("Error creating quiz:", error);
		res.status(500).send("Internal Server Error");
	}
}

async function updateQuiz(req, res) {
	try {
		const quiz = await Quiz.findOne({ id: req.params.id });
		if (!quiz) {
			return res.status(404).json({ message: "Quiz not found" });
		}
		await Quiz.findOneAndUpdate(
			{ id: req.params.id },
			{ $set: req.body },
			{ new: true }
		);
		res.json({ message: "Quiz updated successfully" });
	} catch (error) {
		console.error("Error updating quiz:", error);
		res.status(500).send("Internal Server Error");
	}
}

async function deleteQuiz(req, res) {
	try {
		const quiz = await Quiz.findOne({ id: req.params.id });
		if (!quiz) {
			return res.status(404).json({ message: "Quiz not found" });
		}
		await Quiz.findOneAndDelete({ id: req.params.id });
		res.json({ message: "Quiz deleted successfully" });
	} catch (error) {
		console.error("Error deleting quiz:", error);
		res.status(500).send("Internal Server Error");
	}
}

module.exports = {
	getQuizById,
	getAllQuizzes,
	createQuiz,
	updateQuiz,
	deleteQuiz,
};
