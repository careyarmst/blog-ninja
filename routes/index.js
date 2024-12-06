const express = require("express");
const blogRoutes = require("./blogs");
const staticRoutes = require("./static");

const router = express.Router();

router.use("/", staticRoutes);
router.use("/blogs", blogRoutes);

module.exports = router;
