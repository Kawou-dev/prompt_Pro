"use server"

import { connectDB } from "../config/mongoDB"
import EventModel from "../models/event.Model"


export async function addEvent(formData: FormData) {
  const name = formData.get("name") as string
  const date = formData.get("date") as string

  if (!name || !date) return { success: false, message: "Champs requis manquants" }

  try {
    await connectDB()
    await EventModel.create({ name, date })
    return { success: true }
  } catch (err) {
    console.error("Erreur lors de l'ajout de l'événement:", err)
    return { success: false, message: "Erreur serveur" }
  }
}

export async function getEvents() {
  try {
    await connectDB()
    const events = await EventModel.find({}).sort({ date: 1 })
    return JSON.parse(JSON.stringify(events))
  } catch (err) {
    console.error(err)
    return []
  }
}
