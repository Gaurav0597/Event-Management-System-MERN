import express from "express"
import NonTechEventSchema from "../models/nontechevent.model.js"
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

export default router