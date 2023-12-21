import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const id = searchParams.get('uid') || ""
        const response = NextResponse.json({
            status: true
        });
        response.cookies.set('uid', id);
        return response;



        // cookies().set('uid', "")
    } catch (error) {
        return NextResponse.json({ status: false, })
    }
}