import express from 'express'
import EventSchema from '../models/event.model.js'
import User from '../models/Auth.model.js'
const router = express.Router()

router.get('/', async (req, res) => {
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
    return res.status(500).send(error.message)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const data = await EventSchema.findById(req.params.id).lean().exec()
    return res.status(200).send(data)
  } catch (err) {
    return res.status(500).send(err.message)
  }
})

router.delete('/:id',async (req, res) => {
   console.log(req.params.id)
   EventSchema.deleteOne({_id:req.params.id}).then(()=>{
    res.send("Event deleted")
   }).catch((err) => {
    res.send("An error Occured")
   })
})

router.post('/:id', async (req, res) => {
  console.log(req.body.userId)
  try {
    const data = await User.findByIdAndUpdate(
      req.body.userId,
      { $addToSet: { techEvent: { $each: [req.body._id] } } },
      { new: true },
    )
    res.status(200).json(data)
  } catch (err) {
    res.status(400).json(err)
  }
})

router.delete("/:id/:eventid" , async(req, res) =>{

  try{
    await User.updateOne({_id: req.params.id } , {'$pull' : {"techEvent" : req.params.eventid}} ,{ new : true})
    
    res.send({ error : false , message : "product delete"})
  }catch(err){
    console.log(err)
  }

})
export default router
