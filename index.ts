import CStone from "./app";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const cstone = new CStone({ key: process.env.TOKEN!, version: "v2" });

const run = async () => {
  const student = await cstone.students.create({
    firstName: "Mike",
    lastName: "White",
    schoolEmail: "mike.white@gmail.com",
    status: "Active",
    grade: 12,
  });
  console.log(student);
};

console.time("Request Time");
run().catch(console.error);
console.timeEnd("Request Time");
