const db = require("../models");
const router = require("express").Router();

router.get("/api/workouts", (req, res) =>{
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" },
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
        {   $inc: {
            totalDuration: req.body.totalDuration
            },
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
db.Workout.aggregate([
    {
        $addFields: {
            totalDuration: { $sum: "$exercises.duration" }
        }
    }
]).sort( { "_id": 1, "day": 1 } )
.limit(7)
.then((workouts)=>{
    res.json(workouts);
})
.catch(err =>{
    res.json(err);
});
});

module.exports = router;