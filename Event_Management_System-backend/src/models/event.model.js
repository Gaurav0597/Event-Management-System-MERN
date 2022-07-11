import mongoose from 'mongoose'

const EventSchema = new mongoose.Schema(
  {
    EventName: { type: String, required: true },
    EventImage: { type: String, required: true },
    Introduction: { type: String, required: true },
    Date: { type: Date, required: true },
    Time: { type: Time, required: true },
    Platform: { type: String, required: true },
    Participant: { type: Number, required: true },
    Prize1: { type: Number, required: true },
    Prize2: { type: Number, required: true },
    Fees: { type: Number, required: true },
    Rule1: { type: String, required: true },
    Rule2: { type: String, required: true },
    Rule3: { type: String, required: true },
    Rule4: { type: String, required: true },
    Rule15: { type: String, required: true },
  },
  {
    timestamp: true,
    versionKey: false,
  },
)

module.export = mongoose.model("EventData",EventSchema)