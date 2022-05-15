import CStone from "./app";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const cstone = new CStone({ key: process.env.TOKEN! });

const run = async () => {
  const student = await cstone.students.get({
    studentId: "5f43ba6edca18d644cbf6d87",
  });
  console.log(student);
};

run().catch(console.error);
