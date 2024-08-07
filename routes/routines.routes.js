const express = require("express");
const router = express.Router();

const Routine = require("../models/Routine.model");
const { tokenValidation, adminValidation } = require("../middlewares/auth.middlewares");


// POST "/api/routines"
router.post("/", tokenValidation, adminValidation, async (req, res, next) => {
    try {
        //destructuración
        const { level, series, rest, workouts } = req.body
        const response = await Routine.create({
            level,
            series,
            rest,
            workouts
        })
        res.status(201).json(response)
    } catch (error) {
        next(error)
    }
})
// GET "/api/routines"
router.get("/", tokenValidation, adminValidation, async (req, res, next) => {
    try {
        const getAllRoutines = await Routine.find()
        res.status(200).json(getAllRoutines)
    } catch (error) {
        next(error)
    }
})
// GET "/api/routines/:routinesId"
router.get("/", tokenValidation, adminValidation, async (req, res, next) => {
    try {
        const getRoutineById = await Routine.findById(req.params.routinesId)
        res.status(200).json(getRoutineById)
    } catch (error) {
        next(error)
    }
})
// PUT "/api/routines/:routinesId"
router.put("/", tokenValidation, adminValidation, async (req, res, next) => {
    try {
        const editRoutine = await Routine.findByIdAndUpdate(req.params.routinesId)
        res.status(200).json(editRoutine)
    } catch (error) {
        next(error)
    }
})
// DELETE "/api/routines/:routinesId"
router.delete("/", tokenValidation, adminValidation, async (req, res, next) => {
    try {
        await Routine.findByIdAndDelete(req.params.routinesId)
        res.status(202)
    } catch (error) {
        next(error)
    }
})

module.exports = router