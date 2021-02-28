const db = require("../models");
// const Workout = require("../models/Workout");
const router = require("express").Router();

router.get("/api/workouts", (req, res) =>{
    db.sum.aggregate( [
        {
            $addFields: {
                totalWorkout: { $sum: "$workouts"}
            }
        }
    ])
db.Workout.find({}) 
.then((workouts)=>{
    res.json(workouts);
})
.catch( err =>{
    res.json(err);
})
}); 

router.put("/api/workouts/:id", (req, res) =>{
    db.Workout.findOneAndUpdate(
        { 
            _id: req.params.id
        },
        { 
            $push: { 
                exercises: req.body 
            }
        },
        {
            new: true
        }
    )
    .then ((workouts) => {
        res.json(workouts);
    })
    .catch( err => {
        res.json(err);
    })
})

router.post("/api/workouts", (req, res) =>{
    db.Workout.create({})
    .then(workouts => {
      res.json(workouts);
    })
    .catch( err => {
      res.json(err);
    });
})

router.get("/api/workouts/range", (req, res) =>{
db.Workout.find({})
.then((workouts)=>{
    res.json(workouts);
})
.catch(err =>{
    res.json(err);
});
});

module.exports = router;