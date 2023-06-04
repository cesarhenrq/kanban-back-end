import mongoose from "mongoose";

const url = process.env.DATABASE_URL as string;

async function initializeDatabase() {
  mongoose.connection
    .on("error", (error) => {
      console.log("ERROR: connection to mongo failed: ", error);
    })
    .on("close", () => {
      console.log("Connection to mongo ended");
    })
    .once("open", () => {
      console.log("Connected to mongo");
    });

  await mongoose.connect(url);
}

export default initializeDatabase;
