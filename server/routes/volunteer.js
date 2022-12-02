const express = require("express");
const router = express.Router();
const {
  viewAllVolunteers,
  createNewVolunteer,
  removeVolunteer,
  updateVolunteer,
} = require("../controllers/volunteerController");

router.get("/read", viewAllVolunteers);
router.post("/create", createNewVolunteer);
router.delete("/delete/:emailAddress", removeVolunteer);
router.put("/update", updateVolunteer);

module.exports = router;
