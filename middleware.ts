import { NextRequest, NextResponse } from "next/server";



export function middleware(request:NextRequest){
    const cookies = request.cookies.get("test")
    console.log("middleware")

    return NextResponse.redirect(new URL("/login",request.url))
    // if(!cookies) return NextResponse.redirect(new URL("/test",request.url))
}

export const config = {
    matcher:"/admin/:path*"
}