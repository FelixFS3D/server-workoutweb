const mongoose = require("mongoose")
const Schema = mongoose.Schema

const workoutSchema = new Schema ({

workout: String,
muscle: [String],
reps: Number,
videoDemo: String,
imgWork: String,

})

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout; 