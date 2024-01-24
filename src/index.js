import * as dotenv from "dotenv";
import { app } from "./app.js";
import { connectdb } from "./db/index.js";

dotenv.config({ path: "../.env" });

connectdb();

app.listen(process.env.PORT, () => {
  console.log("server is running on the port ", process.env.PORT);
});
