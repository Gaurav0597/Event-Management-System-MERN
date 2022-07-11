import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    Cart:[{type: mongoose.Schema.Types.ObjectId , ref:"MensData",required: false}],
  })
  const User = new mongoose.model('User', userSchema)

  module.export=User