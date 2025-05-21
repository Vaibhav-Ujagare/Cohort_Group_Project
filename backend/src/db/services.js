import { pool } from "./databaseConfig.js";


const db = async () => {
    try {
        const result = await pool.query(
            "SELECT * FROM cohort_group_portal.user_details",
        );
        console.log("Connected");
    } catch (err) {
        console.error(err);
        res.status(500).send("Database connection error");
    }
};
