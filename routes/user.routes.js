const express = require("express");
const router = express.Router();
const { tokenValidation, adminValidation } = require("../middlewares/auth.middlewares.js")

const User = require("../models/User.model.js");

//PUT "/api/users/:usersId" 
router.put("/:usersId", tokenValidation, async (req, res, next) => {
    try {
         // destructuración
         const {
            name,
            routines,
        } = req.body
        const response = await User.findByIdAndUpdate(req.params.usersId, {
            name,
            routines,
        }, {new: true})
        res.status(201).json(response)
    } catch (error) {
        next(error)
    }
})
// GET "/api/users/:usersId" 
// esta ruta permite obtener por id cada una de las rutinas creadas anteriormente
router.get("/:usersId", tokenValidation, async (req, res, next) => {
    try {
        const getUserstById = await User.findById(req.params.usersId)
        res.status(200).json(getUserstById)
    } catch (error) {
        next(error)
    }
})
module.exports = router