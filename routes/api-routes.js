const db = require("../models");
const router = require("express").Router();

// add exercise
router.get("/api/workouts", (req, res) =>{
db.Workout.find({}) 
.then((workouts)=>{
    res.json(workouts);
})
.catch( err =>{
    res.json(err);
})
}); 

router.put("/api/workouts/:id", (req, res) =>{

})

router.post("/api/workouts", (req, res) =>{
    db.Workout.create({})
    .then(dbExample => {
      res.json(dbExample);
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