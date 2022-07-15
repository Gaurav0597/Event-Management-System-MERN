import express from "express"
import CourseSchema from "../models/CourseModel.js"
const router=express.Router()



router.get("/",async (req, res) => {
    try {
        const data = await CourseSchema.find({}).lean().exec()
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
})

router.post('', async (req, res) => {
    try {
      const data = await CourseSchema.create(req.body)
      res.send(data)
    } catch (error) {
      return res.status(500).send(error.message)
    }
  })

export default router