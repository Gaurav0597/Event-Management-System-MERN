import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  techEvent: [{ type: mongoose.Schema.Types.ObjectId, ref: 'EventData' }],
  nontechEvent: [{ type: mongoose.Schema.Types.ObjectId, ref: 'NonTechEventData' }]
})
const User = new mongoose.model('User', userSchema)

export default User
