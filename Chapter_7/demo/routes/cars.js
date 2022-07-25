// Step_3: Using model + express return API
// Viet code CRUD voi mongodb su dung mongoose
// create - Tao ra 1 cai oto
const express = require('express');
const router = express.Router();
const CarModel = require('../model/car.model');

// 1. API get all cars
router.get('/', (req, res) => {
   const carName = req.query.name;
   CarModel.find({ name: carName }).exec((err, cars) => {
       if (err) {
           res.send('Khong the lay thong tin car');
       } else {
           console.log('Lay thanh cong thong tin tat ca oto', cars);
           res.json(cars);
       }
   })
});

// 2. API get by ID
router.get('/:id', (req, res) => {
    CarModel.findOne({
        _id: req.params.id
    }).exec((err, car) => {
        if (err) {
            console.log('error: ', err);
            res.send('Co loi xay ra...');
        } else {
            res.json(car);
        }
    })
});

// 3. API update by ID
router.put('/:id', (req, res) => {
   CarModel.findOneAndUpdate({
       _id: req.params.id
   },
       {
            $set: { name: req.body.name }
       },
       { upsert: false },
       (error, car) => {
            if (error) {
                res.send('Co loi xay ra khi update');
            } else {
                res.send(car);
            }
       }
   )
});

// 4. API create new a car
router.post('/', (req, res) => {
    const car = new CarModel();
    car.name = req.body.name;
    car.manufacturer = req.body.manufacturer;
    car.price = req.body.price;

    car.save((err, carObject) => {
        if (err) {
            res.send('Loi luu thong tin oto');
        } else {
            console.log('Luu thong tin oto thanh cong', carObject);
            res.send(car);
        }
    })
});

module.exports = router;