const { Router } = require("express");
const { Team, Player } = require("../db.js");
const router = Router();
const {Op} = require("sequelize")

router.get("/", async (req, res, next) => {
  try {
    let teams = await Team.findAll({
      include: Player
    });
    res.send(teams);
  } catch (error) {
    next(error);
  }
});

router.get("/search", async (req, res, next) => {
  let {name} = req.query
  try {
    name = name.toLowerCase().replace(/ /g, "_");
    let team = await Team.findAll({
      include: Player,
      where: {
        slug: {
          [Op.substring]: name,
        },
      }
    })
    res.send(team)
  } catch(error){
    next(error)
  }
})

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    let team = await Team.findByPk(id,{
      include: Player
    });
    res.send(team);
  } catch (error) {
    next(error);
  }
});

router.post("/", (req, res, next) => {
  const { name, league, country } = req.body;
  let slug = name.toLowerCase().replace(/ /g, "_");
  Team.create({
    name,
    slug,
    league,
    country,
  })
    .then((ress) => res.send(ress))
    .catch((error) => next(error));
});

router.post("/:teamId/player/:playerId", async (req, res, next) => {
  try {
    const { playerId, teamId } = req.params;
    const team = await Team.findByPk(teamId);
    await team.addPlayer(playerId);
    res.send(200);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", (req, res, next) => {
  const { id } = req.params;
  const { name, league, country } = req.body;
  let slug;
  if(name) slug=name.toLowerCase().replace(/ /g, "_");
  Team.update(
    { name, slug, league, country },
    {
      where: {
        id,
      },
    }
  )
    .then(() => res.send("Team actualizado"))
    .catch((error) => next(error));
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    await Team.destroy({
      where: {
        id,
      },
    }).then(() => res.send(200));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
