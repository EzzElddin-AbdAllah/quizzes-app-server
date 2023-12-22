const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema({
	id: { type: Number, unique: true },
	announcer: String,
	date: String,
	content: String,
});

const Announcement = mongoose.model("Announcement", announcementSchema);

module.exports = Announcement;
