import { prisma } from "@/lib/db/prisma";
import { writeFile } from "fs/promises"
import { NextResponse } from "next/server";
import path from "path";
const sharp = require("sharp")


export  async function  POST(req:any) {
    //data from the frontend
    const body = await  req.json();


    //resolving values from the array that we got from frontend
    const imgFileName = body[0];
    const imgBuffer =  Buffer.from(body[1].data);
    const formdata = body[2];
    const localDocImageUrl = body[3];
    const imgUrl = localDocImageUrl;

    const {name,qualification,fee,experience,about,clinic} = formdata;

    //converting specialization to upper case
    const specialization = formdata.specialization.toUpperCase();
   
    //using sharp to reduce the size of the image 
    const resizedImgBuffer = await sharp(imgBuffer)
    .resize({ width: 800 })
    .toBuffer();

    //saving the image to the local storage

    const imgFolderPath = path.join(process.cwd(),"/public/doc-images/");
    const fullImgPath = imgFolderPath + imgFileName ;


    // saving file to local storage
    await writeFile(fullImgPath, resizedImgBuffer);




    // writing data to mongodb 
    await prisma.doctor.create({
        data:{name,about,experience,fee,imgUrl,qualification,specialization,clinic}
    });



    //sending response to frontend 
    return NextResponse.json({message:'successful'})



}


