import User from '../models/Users.js'

export const getAllUsers = async(req, res) => {
	try {
		const getAll = await User.find()
		return res.send(getAll)
	} catch (error) {
		return res.status(500).json({message: error.message})
	}
}

export const getUser = async(req, res) => {
	try {
		const getUser = await User.findById(req.params.id)
		if(!getUser) return res.status(404)
		return res.send(getUser)
	} catch (error) {
		return res.status(500).json({message: error.message})
	}
}

export const createUser = async(req, res) => {
	try {
		const newUser = await User.create(req.body)
		await newUser.save()
		return res.json(newUser)
	} catch (error) {
		return res.status(500).json({message: error.message})
	}
}

export const updateUser = async(req, res) => {
	try {
		const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
		return res.send(updatedUser)
	} catch (error) {
		return res.status(500).json({message: error.message})
	}
}

export const deleteUser = async(req, res) => {
	try {
		const deletedUser = await User.findByIdAndRemove(req.params.id)
		if(!deleteUser) return res.status(404)
		return res.sendStatus(204)
	} catch (error) {
		return res.status(500).json({message: error.message})
	}
}