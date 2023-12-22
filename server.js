const express = require("express");
const cors = require("cors");
const connectToDB = require("./config/connectToDB");

connectToDB();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const announcementRoutes = require("./routes/announcementRoutes");
const quizRoutes = require("./routes/quizRoutes");

app.use("/api/announcements", announcementRoutes);
app.use("/api/quizzes", quizRoutes);

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
