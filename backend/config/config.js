import dotenv from "dotenv";
dotenv.config();

export const hostname = process.env.APP_HOSTNAME || "localhost"
export const port = process.env.APP_PORT || 3000