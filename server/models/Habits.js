import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	userId: {
		type: mongoose.Types.ObjectId,
		require: true
	},
	priority: {
		type: Number,
		required: true
	}
})

export default mongoose.model('Habit', habitSchema)