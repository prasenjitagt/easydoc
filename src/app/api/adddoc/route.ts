import { prisma } from "@/lib/db/prisma";
import { writeFile } from "fs/promises"
import { NextResponse } from "next/server";
const sharp = require("sharp")

export  async function  POST(req:any) {
    //data from the frontend
    const body = await  req.json();


    //resolving values from the array that we got from frontend
    const path = body[0];
    const imgBuffer =  Buffer.from(body[1].data);
    const formdata = body[2];
    const localDocImageUrl = body[3];
    const imgUrl = localDocImageUrl;

    const {name,qualification,specialization,fee,experience,about,clinic} = formdata;

   
    //using sharp to reduce the size of the image 
    const resizedImgBuffer = await sharp(imgBuffer)
    .resize({ width: 800 })
    .toBuffer();

    //saving the image to the local storage
    await writeFile(path, resizedImgBuffer);



    //writing data to mongodb 
    await prisma.doctor.create({
        data:{name,about,experience,fee,imgUrl,qualification,specialization,clinic}
    });



    //sending response to frontend 
    return NextResponse.json({message:'successful'})


}


