import  prisma  from '@/lib/prisma';
import { getCurrentUser } from '@/lib/session';
import { NextResponse } from "next/server";
export async function GET(){

    try{
        const allShipment = await prisma.customer.findMany({
            orderBy:{
                createdAt: "desc"
            }
        })

        return NextResponse.json(allShipment)

    }catch(error){
        return NextResponse.error()
    }
}
export async function POST(request: Request){
    const user = await getCurrentUser()

    const existingUser = await prisma.admin.findUnique({
        where:{
            id: user?.id
        }
    })

    if(!existingUser){
        return 
    }
    const body = await request.json()

    const {
        sender_name,
        sender_location, 
        receiver_name,
        receiver_location,
        receiver_email,
        receiver_phone,
        shipment_id,
        total_pieces,
        weight,
        volume,
        vessel,
        place_of_acceptance,
        estimated_departure_date,
        estimated_arrival_date,
        place_of_delivery,
        current_location,
        info_on_shipment,
        final_destination
    } =  body

    try{
        await prisma.$transaction(async(prismadb) => {
            const customerData = {
                sender_name:sender_name,
                sender_location: sender_location,
                receiver_name: receiver_name,
                receiver_location: receiver_location,
                receiver_email:receiver_email,
                receiver_phone:+receiver_phone,
                shipment_id:shipment_id.toUpperCase(),
                total_pieces:total_pieces,
                weight:weight,
                volume: volume,
                vessel_name:vessel,
                place_of_acceptance:place_of_acceptance,
                estimated_departure_date:new Date(estimated_departure_date),
                estimated_arrival_date:new Date(estimated_arrival_date),
                place_of_delivery: place_of_delivery,
            }
            const newCustomer = await prismadb.customer.create({
                data:customerData
            })

            const LocationData = {
                current_location:current_location,
                info_on_current_location: info_on_shipment,
                final_destination:final_destination,
                customerId: newCustomer.id
            }
            await prismadb.locations.create({data:LocationData})
        })

        return NextResponse.json(shipment_id, {status:200})

    }catch(error){
        console.log("error", error)
        return NextResponse.error()
    }
}