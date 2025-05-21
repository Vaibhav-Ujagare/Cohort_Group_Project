import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/dbConnect.js";

dotenv.config({
    path: "./.env",
});

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send("HELLO");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
