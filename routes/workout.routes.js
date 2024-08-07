const express = require("express");
const router = express.Router();
const { tokenValidation, adminValidation } = require("../middlewares/auth.middlewares.js")

const Workout = require("../models/Workout.model");


// POST "/api/workouts"
router.post("/", tokenValidation, adminValidation, async (req, res, next) => {
    try {
        // destructuración
        const {
            workout,
            muscle,
            reps,
            videoDemo,
            imgWork
        } = req.body
    const response = await Workout.create({
        workout,
        muscle,
        reps,
        videoDemo,
        imgWork
    })
    res.status(201).json(response)
    } catch (error) {
    next(error)
    }
});
// GET "/api/workouts"
router.get("/", tokenValidation, adminValidation, async (req, res, next) => {
    try {
        const getAllWorkouts = await Workout.find()
        res.status(200).json(getAllWorkouts)
    } catch (error) {
        next(error)
    }
})
// GET "/api/workouts/:workoutId"
router.get("/:workoutId", tokenValidation, adminValidation, async (req, res, next) => {
    try {
        const getWorkoutById = await Workout.findById(req.params.workoutId)
        res.status(200).json(getWorkoutById)
    } catch (error) {
        next(error)
    }
})
// PUT "/api/workouts/:workoutId"
router.put("/:workoutId", tokenValidation, adminValidation, async (req, res, next) => {
    try {
        const editWorkout = await Workout.findByIdAndUpdate(req.params.workoutId)
        res.status(200).json(editWorkout)
    } catch (error) {
        next(error)
    }
})
// DELETE "/api/workouts/:workoutId"
router.delete("/:workoutId", tokenValidation, adminValidation, async (req, res, next) => {
    try {
        await Workout.findByIdAndDelete(req.params.workoutId)
        res.status(202)
    } catch (error) {
        next(error)
    }
})


module.exports = router