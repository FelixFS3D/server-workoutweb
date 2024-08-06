const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});
// Routes workout
const workoutRouter = require("./workout.routes.js");
router.use("/workouts", workoutRouter);
// Routes routines
const routineRouter = require("./routines.routes.js");
router.use("/routines", routineRouter);
// Routes users
const userRouter = require("./users.routes.js");
router.use("/users", userRouter);
// Routes authenticator
// const authRouter = require("./auth.routes.js")
// router.use("/auth", authRouter);

module.exports = router;
