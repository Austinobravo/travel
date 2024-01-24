"use server"

import prisma from "@/lib/prisma"
export const getAllShipment = async () =>{
  
  try{
    if(typeof window === "undefined"){
      const allShipment = await prisma.customer.findMany({
          orderBy:{
              createdAt: "desc"
          }
      })
  
      return allShipment

    }else{
      throw new Error("prisma cannot be used")
    }

}catch(error){
    throw error
}
    
}
export const getUniqueShipment = async (id:number) =>{
    try{
    if (typeof window === 'undefined') {
        const allShipment = await prisma.customer.findUnique({
          where: {
            id: id,
          },
        });
        return [allShipment];
      } else {
        throw new Error('Prisma cannot be used in the browser environment.');
      }
    } catch (error) {
      throw error;
    }
}
export const getUniqueShipmentLocations = async (id:number) =>{
    try{
    if (typeof window === 'undefined') {
        const allLocation = await prisma.locations.findMany({
          where: {
            customerId: id,
          },
          // orderBy:{
          //   createdAt: "asc"
          // },
        });
        return allLocation;
      } else {
        throw new Error('Prisma cannot be used in the browser environment.');
      }
    } catch (error) {
      throw error;
    }
}

export const deleteUniqueShipment = async (id:number) =>{
  try{
  if (typeof window === 'undefined') {
      const allShipment = await prisma.customer.delete({
        where: {
          id: id,
        },
      });
      return [allShipment];
    } else {
      throw new Error('Prisma cannot be used in the browser environment.');
    }
  } catch (error) {
    throw error;
  }
}


export const getUsers = async () =>{
  try{
  if (typeof window === 'undefined') {
      const allUsers = await prisma.admin.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });
      return allUsers;
    } else {
      throw new Error('Prisma cannot be used in the browser environment.');
    }
  } catch (error) {
    throw error;
  }
}

export const getSearch = async (term:any) =>{
  try{
  if (typeof window === 'undefined') {
      const search = await prisma.customer.findUnique({
        where: {
          shipment_id: term,
        },
      });
      return search;
    } else {
      throw new Error('Prisma cannot be used in the browser environment.');
    }
  } catch (error) {
    throw error;
  }
}
