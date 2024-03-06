//Localhost: 3000/api/users/[userId]/tasks

import { getResponseMessage } from "@/helper/responseMessage";
import { NextResponse } from "next/server";
import { Task } from "@/models/task";


export async function GET(request, { params }) {

    const { userId } = params;

    try {


        // get user using id

        
        const tasks = await Task.find({
            userId: userId
        });

        return NextResponse.json(tasks);
    } catch (error) {
        console.log(error);
        return getResponseMessage("Failed to get Task !! ", 404, false);

    }

}