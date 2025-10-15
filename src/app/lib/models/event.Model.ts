import mongoose, { Schema, models } from "mongoose"

const eventSchema = new Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
})

const EventModel = models.Event || mongoose.model("Event", eventSchema)

export default EventModel
