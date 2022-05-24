import { Router } from "express";
const router = Router()

import {getAllHabits, getHabit, createHabit, updateHabit, deleteHabit} from '../controllers/habits.controller.js'

router.get('/', getAllHabits)
router.get('/:id', getHabit)
router.post('/', createHabit)
router.put('/:id', updateHabit)
router.delete('/:id', deleteHabit)

export default router