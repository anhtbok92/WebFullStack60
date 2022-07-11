const express = require('express');
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
    const newManga = {
        id: `${mangas.length + 1}`,
        name: req.body.name,
    };
    mangas.push(newManga);
    res.send(mangas);
});

module.exports = mangaRouter;