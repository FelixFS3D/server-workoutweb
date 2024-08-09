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
// Routes authenticator
const authRouter = require("./auth.routes.js")
router.use("/auth", authRouter);
// Routes User
const userRouter = require("./user.routes.js")
router.use("/users", userRouter);
// Cloudinary
const uploadRoutes = require("./upload.routes.js")
router.use("/upload", uploadRoutes);

module.exports = router;
