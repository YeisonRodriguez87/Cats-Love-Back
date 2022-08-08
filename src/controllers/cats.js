const { Cat } = require("../db");

const postCat = async (req, res) => {
  const {
    nombre,
    sexo,
    altura,
    peso,
    edad,
    ciudad,
    descripcion,
    telefono,
    imagen,
  } = req.body;
  if (
    !nombre ||
    !sexo ||
    !altura ||
    !peso ||
    !edad ||
    !ciudad ||
    !descripcion ||
    !telefono
  ) {
    res.send("Falta información del Michi");
  } else {
    try {
      const newCat = await Cat.create({
        nombre,
        sexo,
        altura,
        peso,
        edad,
        ciudad,
        descripcion,
        telefono,
        imagen,
      });
      if (newCat) {
        res.send("Michi publicado correctamente!");
      } else {
        res.send("No se pudo publicar el Michi");
      }
    } catch (error) {
      res.send(error);
    }
  }
};

const getAllCats = async (req, res) => {
  try {
    const dbCatInfo = await Cat.findAll({
      attributes: ["id", "imagen", "nombre", "edad", "ciudad"],
    });
    res.send(dbCatInfo);
  } catch (error) {
    res.status(404).send({ message: "No se puede encontrar la infomación requerida!" });
  }
};

const getIdCat = async (req, res) => {
  const { id } = req.params;
  try {
    let catId = await Cat.findByPk(id, {
      attributes: [
        "id",
        "imagen",
        "nombre",
        "edad",
        "sexo",
        "ciudad",
        "altura",
        "peso",
        "telefono",
        "descripcion",
      ],
    });
    console.log({ id });
    catId
      ? res.send(catId)
      : res.status(404).send({ message: "Michi no encontrado" });
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  postCat,
  getAllCats,
  getIdCat,
};
