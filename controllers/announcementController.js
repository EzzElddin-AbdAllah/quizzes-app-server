const Announcement = require("../models/announcementModel");
const getNextAnnouncementId = require("../services/announcementService");

async function getAnnouncementById(req, res) {
	try {
		const announcement = await Announcement.findOne(
			{ id: req.params.id },
			{ _id: 0 }
		);
		if (!announcement) {
			return res.status(404).json({ message: "Announcement not found" });
		}
		res.json(announcement);
	} catch (error) {
		console.error("Error fetching announcement:", error);
		res.status(500).send("Internal Server Error");
	}
}

async function getAllAnnouncements(req, res) {
	try {
		const announcements = await Announcement.find({}, { _id: 0 });
		res.json(announcements);
	} catch (error) {
		console.error("Error fetching announcements:", error);
		res.status(500).send("Internal Server Error");
	}
}

async function createAnnouncement(req, res) {
	try {
		const nextId = await getNextAnnouncementId();
		await Announcement.create({
			id: nextId,
			...req.body,
		});
		res.json({ message: "Announcement created successfully" });
	} catch (error) {
		console.error("Error creating announcement:", error);
		res.status(500).send("Internal Server Error");
	}
}

async function updateAnnouncement(req, res) {
	try {
		const announcement = await Announcement.findOne({ id: req.params.id });
		if (!announcement) {
			return res.status(404).json({ message: "Announcement not found" });
		}
		await Announcement.findOneAndUpdate(
			{ id: req.params.id },
			{ $set: req.body },
			{ new: true }
		);
		res.json({ message: "Announcement updated successfully" });
	} catch (error) {
		console.error("Error updating announcement:", error);
		res.status(500).send("Internal Server Error");
	}
}

async function deleteAnnouncement(req, res) {
	try {
		const announcement = await Announcement.findOne({ id: req.params.id });
		if (!announcement) {
			return res.status(404).json({ message: "Announcement not found" });
		}
		await Announcement.findOneAndDelete({ id: req.params.id });
		res.json({ message: "Announcement deleted successfully" });
	} catch (error) {
		console.error("Error deleting announcement:", error);
		res.status(500).send("Internal Server Error");
	}
}

module.exports = {
	getAnnouncementById,
	getAllAnnouncements,
	createAnnouncement,
	updateAnnouncement,
	deleteAnnouncement,
};
