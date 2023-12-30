
import { prisma } from "@/lib/db/prisma";
import { NextResponse } from "next/server";



export  async function  POST(req:any) {
    //data from the frontend
    const body = await  req.json();


    //geting specialization from body
    const bodyData = body[0];
    
    //upper casing the specialization
    const specialization = bodyData.toUpperCase();

    // writing data to mongodb 
    await prisma.specialization.create({
        data:{specialization}
    })



  //sending response to frontend 
  return NextResponse.json({message:'successful'})



}
