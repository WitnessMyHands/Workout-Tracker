const db = require('../models');
const router = require('express').Router();

// GET Workouts
router.get('/api/workouts', (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
        dbWorkout.forEach(workout => {
            var total = 0;
            workout.exercises.forEach(e => {
                total += e.duration;
            });
            workout.totalDuration = total;
        });
        res.json(dbWorkout);
    }).catch(err => {
    res.json(err);
    });
});

// ADD Exercise(s)
router.put('/api/workouts/:id', (req, res) => {
    db.Workout.findOneAndUpdate(
        { _id: req.params.id },
        {
            $inc: { totalDuration: req.body.duration },
            $push: { exercises: req.body }
        },
        { new: true }).then(dbWorkout => {
            res.json(dbWorkout);
    }).catch(err => {
    res.json(err);
    });

});

// CREATE Workout
router.post('/api/workouts', ({ body }, res) => {
    db.Workout.create(body).then((dbWorkout => {
        res.json(dbWorkout);
    })).catch(err => {
    res.json(err);
    });
});

// Show Workout Range
router.get('/api/workouts/range', (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
        console.log("Showing All Workouts");
        console.log(dbWorkout);
        res.json(dbWorkout);
    }).catch(err => {
    res.json(err);
    });
});

module.exports = router;