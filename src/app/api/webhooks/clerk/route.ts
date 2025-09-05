import { NextResponse } from 'next/server';
import { syncUser } from '@/app/lib/actions/user.action';
import { verifyWebhook } from '@clerk/nextjs/webhooks';
import { NextRequest } from 'next/server';
import UserModel from '@/app/lib/models/user.Model';

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);
    const { id } = evt.data;
    const eventType = evt.type;

    console.log(`Received webhook with ID ${id} and event type of ${eventType}`);
    console.log('Webhook payload:', evt.data);

    if (eventType === 'user.created') {
      const { id, first_name, last_name, image_url, email_addresses } = evt.data;
      const email = email_addresses[0].email_address;
      const username = `${first_name || ''} ${last_name || ''}`.trim();

      const newUser = {
        clerkId: id,
        username,
        email,
        image: image_url,
      };

      const existingUser = await UserModel.findOne({email: email}) ; 
      if(existingUser) return ; 

     const myUser =  await syncUser(newUser);

      return NextResponse.json({ message: 'User created successfully', myUser }, { status: 201 });
    }

    return NextResponse.json({ message: 'Event type not handled' }, { status: 200 });
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return NextResponse.json({ message: 'Error verifying webhook' }, { status: 400 });
  }
}
