import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
import { User } from "@/models/user";


connectDb();

// get request function

export async function GET(request) {

  let users = []

  try {

    users = await User.find().select("-password");

  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to get users",
      success: false,
    });



  }

  return NextResponse.json(users);

}

// post request function
//data post

// create user
export async function POST(request) {

  //fetch user details from request

  const { name, email, password, about, profileURL } = await request.json();

  console.log({ name, email, password, about, profileURL });

  //create user object with user model 

  const user = new User({
    name,
    email,
    password,
    about,
    profileURL
  });

  try {
    //save the object to database

    const createdUser = await user.save();

    const response = NextResponse.json(user, {
      status: 444,
    });

    return response;

  } catch (error) {
    console.error(error);

    // Respond with JSON data indicating the failure
    return NextResponse.json({
      message: "failed to create user!!",
      status: false,
    }); // Add a custom status code for error
  }


  //const body = request.body;
  // console.log(body);
  //console.log(request.method);
  //console.log(request.cookies);
  // console.log(request.headers);
  // console.log(request.nextUrl.pathname);
  // console.log(request.nextUrl.searchParams);

  //const jsonData = await request.json();

  //const textData = await request.text();

  //console.log(jsonData);
  // console.log(textData);

  //return NextResponse.json({
  //  "message": "posting user data",
  //  });

}

// delete request function
//url variable



// put request function



