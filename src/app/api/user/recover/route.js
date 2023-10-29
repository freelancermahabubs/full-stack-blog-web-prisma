import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import {SendEmail} from "@/utility/EmailUtility";

// Send OTP TO Email
export async function GET(req,res) {
    try{
       let {searchParams}= new URL(req.url);
       let email=searchParams.get('email')

        // User Count
        const prisma=new PrismaClient();
        const count=await prisma.users.count({where:{email:email}});

        if(count===1){
           let code=Math.floor(100000+Math.random()*900000);
            const result=await prisma.users.update(
                {
                    where:{email:email},
                    data:{otp:code.toString()}
                }
            );

            // Send Email
            let EmailText=`Your Code Is ${code}`;
            let EmailSubject="Inventory Verification Email"
            await SendEmail(email,EmailText,EmailSubject)

            return  NextResponse.json({status:"success",data:"6 Digit code has been sent"})

        }else{

            return  NextResponse.json({status:"fail",data:"No user found"})
        }

    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}



// OTP Verify
export async function POST(req,res) {
    try {
        let reqBody=await req.json();
        const prisma=new PrismaClient();
        const count=await prisma.users.count({where:reqBody});

        if(count===1){
            return  NextResponse.json({status:"success",data:"Valid Code"})
        }
        else{
            return  NextResponse.json({status:"fail",data:"Invalid Code"})
        }
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}


// Reset Pass
export async function PUT(req,res) {
    try {
        let reqBody=await req.json();
        const prisma=new PrismaClient();
        const count=await prisma.users.count({where: {email:reqBody['email'],otp:reqBody['otp']}});
        if(count===1){
            await prisma.users.update(
                {
                    where:{email:reqBody['email']},
                    data:{otp:'0',password:reqBody['password']}
                }
            );
            return  NextResponse.json({status:"success",data:"Password Reset Success"})
        }
        else{
            return  NextResponse.json({status:"fail",data:"Invalid Code"})
        }
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}












