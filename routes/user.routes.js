const express = require("express");
const router = express.Router();
const { tokenValidation, adminValidation } = require("../middlewares/auth.middlewares.js")
const User = require("../models/User.model.js");

//PATCH "/api/users/routine"
router.patch("/routine-add", tokenValidation, async (req, res, next) => {
    try {
       const {routineId} = req.body
       const response = await User.findByIdAndUpdate(req.payload._id, {$addToSet:{routines: routineId}}, {new: true})
       res.status(201).json(response)
    } catch (error) {
        next(error)
    }
})
//PATCH "/api/users/routine"
router.patch("/routine-delete", tokenValidation, async (req, res, next) => {
    try {
       const {routineId} = req.body
       const response = await User.findByIdAndUpdate(req.payload._id, {$pull:{routines: routineId}}, {new: true})
       res.status(201).json(response)
    } catch (error) {
        next(error)
    }
})
//PUT "/api/users/:usersId"
router.put("/:usersId", tokenValidation, async (req, res, next) => {
    try {
         // destructuración
         const {
            name,
            routines,
            password,
            imgUser
        } = req.body
        const response = await User.findByIdAndUpdate(req.params.usersId, {
            name,
            routines,
            password,
            imgUser
        }, {new: true})
        res.status(201).json(response)
    } catch (error) {
        next(error)
    }
})
// GET "/api/users/own"
router.get("/own", tokenValidation, async (req, res, next) => {
    try {
        const userData = await User.findById(req.payload._id)
            .populate({
                path: 'routines',
                model: 'Routine',
                populate: {
                    path: 'workouts',
                    model: 'Workout',
                    select: 'reps workout'
                }
            });

        res.status(200).json(userData);
    } catch (error) {
        next(error);
    }
});
module.exports = router