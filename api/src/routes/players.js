const { Router } = require("express");
const { Player, Team } = require("../db");
const router = Router();

router.get("/", async (req, res, next) => {
  
  try {
    let players = await Player.findAll({
      include: Team,
    });
    res.send(players);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    let player = await Player.findByPk(id, {
      include: Team,
    });
    res.send(player);
  } catch (error) {
    next(error);
  }
});

router.post("/", (req, res, next) => {
  const { name, age, squad_number, position, nationality } = req.body;
  let slug = name.toLowerCase();
  return Player.create({
    name,
    slug,
    age,
    squad_number,
    position,
    nationality,
  })
    .then((ress) => res.status(200).send(ress))
    .catch((error) => next(error));
});

router.put("/:id", (req, res, next) => {
  const { name, age, squad_number, position, nationality } = req.body;
  const { id } = req.params;

  if (name) slug = name.toLowerCase();
  return Player.update(
    { name, slug, age, squad_number, position, nationality },
    {
      where: {
        id: id,
      },
    }
  )
    .then(() => res.send("Jugador actualizado"))
    .catch((error) => next(error));
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    await Player.destroy({
      where: {
        id: id,
      },
    });
    res.send("Jugador eliminado");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
