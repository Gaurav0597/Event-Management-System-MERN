import express from "express"
import NonTechEventSchema from "../models/nontechevent.model.js"
import User from '../models/Auth.model.js'
const router=express.Router()



router.get("/",async (req, res) => {
    try {
        const data = await NonTechEventSchema.find({}).lean().exec()
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
})

router.post('', async (req, res) => {
    try {
      const data = await NonTechEventSchema.create(req.body)
      res.send(data)
    } catch (error) {
      return res.status(500).send(error.message)
    }
  })
  
  router.get("/:id",async(req,res)=>{
    try{
         const data=await NonTechEventSchema.findById(req.params.id).lean().exec()
         return res.status(200).send(data);
    }
    catch(err){
        return res.status(500).send(err.message)
    }
  })
  router.post('/:id', async (req, res) => {
    console.log(req.body.userId)
    try {
      const data = await User.findByIdAndUpdate(
        req.body.userId,
        { $addToSet: { nontechEvent: { $each: [req.body._id] } } },
        { new: true },
      )
      res.status(200).json(data)
    } catch (err) {
      res.status(400).json(err)
    }
  })
export default router