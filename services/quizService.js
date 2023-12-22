const Quiz = require("../models/quizModel");

async function getNextQuizId() {
	const latestQuiz = await Quiz.findOne({}, {}, { sort: { id: -1 } });
	return latestQuiz ? latestQuiz.id + 1 : 1;
}

module.exports = {
	getNextQuizId,
};
