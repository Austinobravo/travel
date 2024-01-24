import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(request:Request ) {

  const body = await request.json()
  const {
    id,
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

      const allShipment = await prisma.customer.findUnique({
        where: {
          id:id
        },
      });

      if (!allShipment) {
        return NextResponse.json({"message": "No existing shipment"}, {status:500});
      }


    try {

      await prisma.$transaction(async(prismadb) => {

        const customerData = {
            sender_name:sender_name,
            sender_location: sender_location,
            receiver_name: receiver_name,
            receiver_location: receiver_location,
            receiver_email:receiver_email,
            receiver_phone:+receiver_phone,
            shipment_id:shipment_id,
            total_pieces:total_pieces,
            weight:weight,
            volume: volume,
            vessel_name:vessel,
            place_of_acceptance:place_of_acceptance,
            estimated_departure_date:new Date(estimated_departure_date),
            estimated_arrival_date:new Date(estimated_arrival_date),
            place_of_delivery: place_of_delivery,
        }
        
        const newCustomer = await prismadb.customer.update({
          where:{
            id: id
          },
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
      return NextResponse.json(allShipment);
    } catch (error) {
      
      return NextResponse.error();
    }
  }
  