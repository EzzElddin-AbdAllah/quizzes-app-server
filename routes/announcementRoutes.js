const express = require("express");
const router = express.Router();
const announcementController = require("../controllers/announcementController");

router.get("/:id", announcementController.getAnnouncementById);
router.get("/", announcementController.getAllAnnouncements);
router.post("/", announcementController.createAnnouncement);
router.patch("/:id", announcementController.updateAnnouncement);
router.delete("/:id", announcementController.deleteAnnouncement);

module.exports = router;
