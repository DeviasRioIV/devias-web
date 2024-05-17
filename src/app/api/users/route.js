import User from "@/models/user";
import { connectDB } from "@/libs/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const users = await User.find();
  return NextResponse.json(users);
  console.log(users)
}

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const newTask = new Task(body);
//     const savedTask = await newTask.save();
//     return NextResponse.json(savedTask);
//   } catch (error) {
//     return NextResponse.json(error.message, {
//       status: 400,
//     });
//   }
// }