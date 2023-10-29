import { NextResponse } from 'next/server'
import {VerifyToken} from "./utility/JWTTokenHelper";
export async function middleware(req, res) {
        try {
            let token = req.cookies.get('token');
            let payload = await VerifyToken(token['value']);
            const requestHeader=new Headers(req.headers);
            requestHeader.set('email',payload['email']);
            requestHeader.set('id',payload['id'])
            requestHeader.set('firstName',payload['firstName'])
            return NextResponse.next({request:{headers:requestHeader}});
        }catch (e) {
            const requestHeader=new Headers(req.headers);
            requestHeader.set('email',"0");
            requestHeader.set('id',"0");
            requestHeader.set('firstName',"0")
            return NextResponse.next({
                request:{headers:requestHeader}
            });
        }
}
