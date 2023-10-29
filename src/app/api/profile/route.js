import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";
import {headers} from "next/headers";
export async function PUT(req,res) {
    let headerList=headers();
    let id=parseInt(headerList.get('id'))
    try{
        let reqBody=await req.json();
        reqBody.otp="0";
        const prisma=new PrismaClient();
        const result=await prisma.users.update({
            where:{id:id},
            data:reqBody
        })
        return  NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:id,data:e})
    }
}