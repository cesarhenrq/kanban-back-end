import mongoose from "mongoose";

/* title -> string[Required]
content -> string[Required]
status -> string[Required] Pendente, Fazendo, Concluido
user -> ObjectId */

export interface ITask extends mongoose.Document {
  title: string;
  content: string;
  status: "Pendente" | "Fazendo" | "Concluido";
  user: string;
}

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    status: { type: String, required: true, default: "Pendente" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const Task = mongoose.model<ITask>("Task", taskSchema);

export default Task;
