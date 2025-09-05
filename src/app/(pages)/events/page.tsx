"use client"
import { CalendarDemo } from "@/components/Calendar"
import Nav2 from "@/components/Nav2"



const Events = () => {

  return (
    <>
        <Nav2 />
        <main className="flex gap-1">  



            <section className={`mt-20 md:ml-0 ml-8 `}>
                <CalendarDemo />

                <div className="mt-4 text-center">
                    <h1>Ajouter un evenement</h1>

                    <form className="mt-2  ">
                        <input type="text" name="" id="" 
                        className="border-2 p-1"
                        placeholder="Nom de la personne"
                        />
                        <button className="border-2 h-9 w-7  cursor-pointer">+</button>
                    </form>

                </div>

            </section>
            {/* <section>
                    Le sidebar est actuellement: {state === "expanded" ? "ouvert" : "fermé"}
            </section> */}

        </main>
    </>
  )
}

export default Events