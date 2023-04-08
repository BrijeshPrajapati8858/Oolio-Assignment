const express = require("express");
const router = new express.Router();
const {createEvent,deleteEvent,updateEvent,getEvent} = require("../controllers/eventControllers");

// Routes
router.route("/event/register").post(createEvent);
router.route("/event/:id").delete(deleteEvent);
router.route("/event/update/:id").put(updateEvent);
router.route("/event/:id").get(getEvent)


module.exports = router;
