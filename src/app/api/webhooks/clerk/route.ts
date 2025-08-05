import { NextResponse } from 'next/server';
import { syncUser } from '@/app/lib/actions/user.action';
import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req)

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data
    const eventType = evt.type
    console.log(`Received webhook with ID ${id} and event type of ${eventType}`)
    console.log('Webhook payload:', evt.data)

    if(eventType === "user.created"){

        const { id, first_name, last_name, image_url, email_addresses } = evt.data;

        const email = email_addresses[0].email_address;

        const username = `${first_name || ""} ${last_name || ""}`.trim();

        try {
            
            const newUser = {
                clerkId : id , 
                username : username , 
                email : email , 
                image : image_url
            }
            console.log(newUser)  ; 
            if(!newUser) return ; 

            await syncUser(newUser) ; 
 
        } catch (error) {
            console.log("Erreur lors de la création api endpoint" , error) ; 
        }


    }


    return NextResponse.json({message : "User created successfully"} , {status : 500})   ; 
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error verifying webhook', { status: 400 })
  }
}