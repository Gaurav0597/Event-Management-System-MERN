import express from "express"

const router=express.Router()

import EventSchema from "../models/event.model.js"

router.get("/",async (req, res) => {
    try {
        const data = await EventSchema.find({}).lean().exec()
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
})

router.post('', async (req, res) => {
    try {
      const data = await EventSchema.create(req.body)
      res.send(data)
    } catch (error) {
      return res.status(500).send(err.message)
    }
  })
  
  router.get("/:id",async(req,res)=>{
    try{
         const data=await EventSchema.findById(req.params.id).lean().exec()
         return res.status(200).send(data);
    }
    catch(err){
        return res.status(500).send(err.message)
    }
  })