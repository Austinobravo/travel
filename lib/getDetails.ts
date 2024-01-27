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
        const allShipment = await prisma.customer.findMany({
          where: {
            id: id,
          },
          include:{
            locations: true
          }
        });
        return allShipment;
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
export const deleteUniqueLocation = async (id:number) =>{
  try{
  if (typeof window === 'undefined') {

      const lastShipment = await prisma.locations.findMany({
        where: {
          id:id,
          final_destination: true,
        },
      });
      
      if(lastShipment.length > 0){
        throw new Error("You can't delete the final destination")
      }else{
        const allShipment = await prisma.locations.delete({
          where: {
            id: id,
          },
        });
        return [allShipment];
      }
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

export const getSearch = async (term:string) =>{
  try{
  if (typeof window === 'undefined') {
    const search = await prisma.customer.findMany({
      where: {
        shipment_id: {
                contains: term,
              },
          
        },
        include:{
          locations: true
        }
      });
      return search;
    } else {
      throw new Error('Prisma cannot be used in the browser environment.');
    }
  } catch (error) {
    throw error;
  }
}


export const getSupport = async () =>{
  try{
  if (typeof window === 'undefined') {
      const allSupport = await prisma.support.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });
      return allSupport;
    } else {
      throw new Error('Prisma cannot be used in the browser environment.');
    }
  } catch (error) {
    throw error;
  }
}

export const deleteUniqueSupport = async (id:number) =>{
  try{
  if (typeof window === 'undefined') {
      const support = await prisma.support.delete({
        where: {
          id: id,
        },
      });
      return [support];
    } else {
      throw new Error('Prisma cannot be used in the browser environment.');
    }
  } catch (error) {
    throw error;
  }
}



export const getUniqueSupport = async (id:number) =>{
    try{
    if (typeof window === 'undefined') {
        const support = await prisma.support.findMany({
          where: {
            id: id,
          },
        });
        return support;
      } else {
        throw new Error('Prisma cannot be used in the browser environment.');
      }
    } catch (error) {
      throw error;
    }
}