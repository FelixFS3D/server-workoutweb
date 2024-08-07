const { Schema, model, default: mongoose } = require("mongoose");
const { tokenValidation, adminValidation } = require("../middlewares/auth.middlewares")


const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    name: String,
    imgUser: String,
    routines: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Routine" // apunta SIEMPRE hacia module.exports = Routine
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
