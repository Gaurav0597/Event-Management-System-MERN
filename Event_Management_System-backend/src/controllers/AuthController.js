import express from 'express'
const router = express.Router()
import User from '../models/Auth.model.js'

router.post('/login', (req, res) => {
  const { email, password } = req.body
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: 'login succesfully', user: user })
      } else {
        res.send({ message: 'Password didnt match' })
      }
    } else {
      res.send({ message: 'User not Regiter' })
    }
  })
})
router.post('/register', (req, res) => {
  console.log(req.body)
  const { name, email, password } = req.body
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: 'USer already Registered' })
    } else {
      const user = new User({
        name,
        email,
        password,
      })
      user.save((err) => {
        if (err) {
          res.send(err)
        } else {
          res.send({ message: 'Successfully Registerd' })
        }
      })
    }
  })
})

router.get('/user/:id', async (req, res) => {
  console.log(req.params.id, 'hello')
  try {
    console.log('hello2S')
    const event = await User.findById(req.params.id)
      .populate({
        path: 'techEvent',
        model: 'EventData',
      }).populate({
        path: 'nontechEvent',
        model: 'NonTechEventData',
      })
      .lean()
      .exec()
    res.status(200).json(event)
  } catch (err) {
    res.status(400).json(err)
  }
})
//-------------------get request for all user------------------------------------

router.get('/getuser', async (req, res) => {
  try {
    const data = await User.find({}).lean().exec()
    res.status(200).json(data)
  } catch (error) {
    console.log(error)
  }
})
router.delete('/:id',async (req, res) => {
  console.log(req.params.id)
  User.deleteOne({_id:req.params.id}).then(()=>{
   res.send("user deleted")
  }).catch((err) => {
   res.send("An error Occured")
  })
})
export default router
