import CStone from "./app";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const cstone = new CStone({ key: process.env.TOKEN!, version: "v2" });

const run = async () => {
  const classes = await cstone.students.group();
  console.log(classes[12].students);
};

console.time("Request Time");
run().catch(console.error);
console.timeEnd("Request Time");
