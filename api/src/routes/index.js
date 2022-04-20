const { Router } = require("express");
const playersRoute = require("./players");
const teamsRoute = require("./teams");

const router = Router();

router.use("/teams", teamsRoute);
router.use("/players", playersRoute);

module.exports = router;
