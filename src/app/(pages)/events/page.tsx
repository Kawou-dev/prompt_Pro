"use client"

import * as React from "react"
import { useTransition } from "react"
import { Calendar } from "@/components/ui/calendar"
import Nav2 from "@/components/Nav2"
import { addEvent, getEvents } from "@/app/lib/actions/events.action"

export default function Events() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [events, setEvents] = React.useState<any[]>([])
  const [isPending, startTransition] = useTransition()

  // Charger les événements au montage
  React.useEffect(() => {
    (async () => {
      const data = await getEvents()
      setEvents(data)
    })()
  }, [])

  async function handleSubmit(formData: FormData) {
    formData.append("date", date?.toISOString() || "")
    const res = await addEvent(formData)

    if (res.success) {
      startTransition(async () => {
        const updated = await getEvents()
        setEvents(updated)
      })
    } else {
      alert(res.message)
    }
  }

  return (
    <>
      {/* <Nav2 /> */}
      <main className="flex flex-col items-center mt-20 gap-6">
        <section>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow-sm"
            captionLayout="dropdown"
          />
        </section>

        <form
          action={handleSubmit}
          className="flex gap-2 items-center mt-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Nom de l'événement"
            className="border rounded-md p-2"
            required
          />
          <button
            type="submit"
            disabled={isPending}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            {isPending ? "Ajout..." : "Ajouter"}
          </button>
        </form>

        <section className="mt-10 w-full max-w-md border-t pt-4">
          <h2 className="text-lg font-semibold mb-3 text-center">📅 Événements à venir</h2>
          <ul className="space-y-2">
            {events.length === 0 && (
              <p className="text-gray-500 text-center">Aucun événement pour le moment.</p>
            )}
            {events.map((ev) => (
              <li
                key={ev._id}
                className="border p-2 rounded-md flex justify-between items-center"
              >
                <span>{ev.name}</span>
                <span className="text-gray-500 text-sm">
                  {new Date(ev.date).toLocaleDateString()}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}
