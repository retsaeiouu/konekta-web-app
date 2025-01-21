dotenv.config({ path: `../../.env.${process.env.NODE_ENV}` });

import app from "./app";
import dotenv from "dotenv";

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log("Server is listening on port", PORT);
});
