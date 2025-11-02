"use server"
// import {auth} from "@clerk/nextjs/server"
//   auth ---> to get UserID only

import { connectDB } from "../config/mongoDB"
import EventModel from "../models/event.Model"


import { currentUser } from "@clerk/nextjs/server";


export async function addEvent(formData: FormData) {
  const name = formData.get("name") as string
  const date = formData.get("date") as string

  const user = await currentUser();
  const userId = user?.id;
  const email = user?.emailAddresses?.[0]?.emailAddress;

  if (!name || !date || !userId  || !email) return { success: false, message: "Champs requis manquants" }

  try {
    await connectDB()
    await EventModel.create({ name, date, userId, email })
    return { success: true }
  } catch (err) {
    console.error("Erreur lors de l'ajout de l'événement:", err)
    return { success: false, message: "Erreur serveur" }
  }
}

export async function getEvents() {

  const user = await currentUser();
  const userId = user?.id;
  const email = user?.emailAddresses?.[0]?.emailAddress;

  try {
    await connectDB()
    const events = await EventModel.find({ userId, email }).sort({ date: 1 })
    return JSON.parse(JSON.stringify(events))
  } catch (err) {
    console.error(err)
    return []
  }
}
