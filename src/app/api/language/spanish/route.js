import connectDB from "@/lib/dbConnect"
import { NextResponse } from "next/server"
import { LanguageModel } from "@/models/language"

export const POST = async (req, res) => {
    await connectDB()   
    try {
        // console.log(req)
        const body = await req.json()
        const newLanguage = await LanguageModel.create(body)
        return NextResponse.json({data:newLanguage}, {status:201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({data: null}, {status:500})
    }
}

export const GET = async () => {
    await connectDB()
    try {
        const result = await LanguageModel.find({})
        return NextResponse.json({data:result}, {status:200})
    } catch (error) {
        return NextResponse.json({data: null}, {status:500})
    }

}