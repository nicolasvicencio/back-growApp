import Habit from '../models/Habits.js'

export const getAllHabits = async(req, res) => {
	try {
		const allHabits = await Habit.find()
		return res.send(allHabits).send("List of Habits")
	} catch (error) {
		return res.status(500).json({message: error.message})
	}
}

export const getHabit = async(req, res) => {
	try {
		const habit = await Habit.findById(req.params.id)
		if(!habit) return res.sendStatus(404)
		return res.send(habit)
	} catch (error) {
		return res.status(500).json({message: error.message})
	}
}

export const createHabit = async(req, res) => {
	try {
		const newHabit = await Habit.create(req.body)
		await newHabit.save()
		return res.json(newHabit)
	} catch (error) {
		return res.status(500).json({message: error.message})
	}
}

export const updateHabit = async(req, res) => {
	try {
		const updatedHabit = await Habit.findByIdAndUpdate(req.params.id, req.body, {new: true})
		return res.send(updatedHabit)
	} catch (error) {
		return res.status(500).json({message: error.message})
	}
}

export const deleteHabit = async(req, res) => {
	try {
		const deletedHabit = await Habit.findByIdAndRemove(req.params.id)
		if(!deleteHabit) return res.status(404)
		return res.sendStatus(204)
	} catch (error) {
		return res.send(500).json({message: error.message})
	}
}

