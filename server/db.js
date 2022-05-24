import mongoose from "mongoose";
import { MONGO_URI } from "./config.js";


export async function connectDB() {
	try {
		const db = await mongoose.connect(MONGO_URI)
		console.log('Connected to: ', db.connection.name)
	} catch (error) {
		console.log(error)
	}
}

