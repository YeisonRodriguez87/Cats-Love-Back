const { Cat } = require('../db');


const postCat = async (req, res) => {    
    const { nombre, sexo, altura, peso, edad, ciudad, descripcion, imagen } = req.body;
    if (!nombre || !sexo || !altura || !peso || !edad || !ciudad || !descripcion) {
        res.send('Falta información del Michi');
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
                 imagen
            });
            if (newCat) {
                res.send('Michi publicado correctamente!');
            } else {
                res.send('No se pudo publicar el Michi')
            }                         
         } catch (error) {
            res.send(error);
         }
    }    
};


const getAllCats = async (req, res) => {
    try {
        const dbCatInfo = await Cat.findAll({
            attributes: ['imagen', 'nombre', 'edad', 'sexo', 'ciudad'],                      
        })
        res.send(dbCatInfo);               
    } catch (error) {
        res.json({message: 'No se puede encontrar la infomación requerida!'});
    }
};

/*
const getIdCat = async (req, res) => {
    try {
        const { id } = req.params;
        let catId = await Cat.findByPk(id.toUpperCase(),{    
            attributes: ['imagen', 'nombre', 'edad', 'sexo', 'ciudad', 'altura', 'peso', 'descripcion'],
        })
        catId ? res.send(catId): res.send('El michi seleccionado no existe.');
    } catch (error) {
        res.send(error);
    }
};
*/

module.exports = {
    postCat,
    getAllCats,
    //getIdCat
}