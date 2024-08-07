const mongoose = require("mongoose")
const Schema = mongoose.Schema

const routineSchema = new Schema ({

level: String,
series: Number,
rest: Number,
workouts:{
    type: [ mongoose.Schema.Types.ObjectId ],
    ref: "Workout"
},
})

const Routine = mongoose.model("Routine", routineSchema);
module.exports = Routine;