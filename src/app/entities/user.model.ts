import mongoose from "mongoose";

/* name -> string[Required, minLength(3)]
email -> string[Unique, Required] */

export interface IUser extends mongoose.Document {
  name: string;
  email: string;
}

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minLength: 3 },
    email: { type: String, required: true, unique: true },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;
