const Announcement = require("../models/announcementModel");

async function getNextAnnouncementId() {
	const latestAnnouncement = await Announcement.findOne(
		{},
		{},
		{ sort: { id: -1 } }
	);
	return latestAnnouncement ? latestAnnouncement.id + 1 : 1;
}

module.exports = getNextAnnouncementId;
