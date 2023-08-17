import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const id = searchParams.get('uid') || ""
        const response = NextResponse.json({
            status: true
        });
        console.log('cooloes adding');
        response.cookies.set('uid', id);
        console.log('cooloes added');
        return response;



        // cookies().set('uid', "")
    } catch (error) {
        return NextResponse.json({ status: false, })
    }
}