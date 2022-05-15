import CStone from "./app";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const cstone = new CStone({ key: process.env.TOKEN!, version: "v2" });

const run = async () => {
  const students = await cstone.students.list({
    limit: 5,
    lastName: "Davis",
    sort: ["-grade"],
  });
  console.log(students.length);
};

console.time("Request Time");
run().catch(console.error);
console.timeEnd("Request Time");
