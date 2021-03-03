// ANCHOR -- Require Modules --
const express = require("express");
const viewsController = require("../controllers/viewsController");
// const authController = require('../controllers/authController');

// ANCHOR -- Initialize View Router --
const router = express.Router();

// ANCHOR -- use alerts --
// router.use(viewsController.alerts);

// ANCHOR -- View Routes --
router.get("/", viewsController.getOverview);

// ANCHOR -- Export Router --
module.exports = router;