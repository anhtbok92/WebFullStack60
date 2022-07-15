const express = require('express');
const Joi = require('joi');
const mangaRouter = express.Router();

// create danh sach truyen manga
const mangas = [
    { id: 1, name: 'Bay vien ngoc rong' },
    { id: 2, name: 'Meo may doraemon' },
    { id: 3, name: 'Tham tu lung danh connan' },
];

mangaRouter.get('/', function (req, res) {
   res.send(mangas);
});

mangaRouter.post('/', function (req, res) {
    const { error } = validateMangas(req.body);
    console.log('error: ', error);
    if (error) return res.status(400).send(error.details[0].message);
    const newManga = {
        id: `${mangas.length + 1}`,
        name: req.body.name,
    };
    mangas.push(newManga);
    res.send(mangas);
});

function validateMangas(manga) {
    const schema = Joi.object({
       name: Joi.string().min(5).required()
    });
    return schema.validate(manga);
}

module.exports = mangaRouter;