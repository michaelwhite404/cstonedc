import CStone from "./app";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const cstone = new CStone({ key: process.env.TOKEN!, version: "v2" });

const run = async () => {
  const student = await cstone.students.get({
    studentId: "5f43ba6edca18d644cbf6c74",
  });
  console.log(student);
};

run().catch(console.error);
