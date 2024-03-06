import { NextResponse } from "next/server";
import { User } from "@/models/user";

//export const GET=()=>{

//}

// Get user by ID
export async function GET(request, { params }) {
    const { userId } = params;

    try {
        // Find the user by ID in the database
        const user = await User.findById(userId).select("-password");

        // Log the user data for debugging
        console.log("User Data:", user);

        // Respond with the user data
        return NextResponse.json(user);

    } catch (error) {
        // Respond with an error message if retrieval fails
        return NextResponse.json({
            message: "Error in retrieving user",
            success: false,
        });
    }
}

// delete user

export async function DELETE(request, { params }) {

    //console.log(params);
    const { userId } = params;

    //console.log("User id", userId);

    try {
        await User.deleteOne({
            _id: userId
        });
        return NextResponse.json({
            message: "user deleted",
            success: true,
        });

    } catch (error) {
        return NextResponse.json({
            message: "Error in deleting user",
            success: false,
        });
    }

}

//update user

export async function PUT(request, { params }) {

    const { userId } = params;

    const { name, password, about, profileURL } = await request.json();

    try {

        const user = await User.findById(userId);

        user.name = name;
        user.about = about;
        user.password = password;
        user.profileURL = profileURL;
        //add more info


        const updatedUser = await user.save();
        return NextResponse.json(updatedUser);


    } catch (error) {

        return NextResponse.json({
            message: "failed to update user !!",
            success: false,

        });

    }
}