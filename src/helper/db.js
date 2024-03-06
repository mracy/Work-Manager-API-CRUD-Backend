import mongoose from "mongoose";


export const connectDb = async () => {
    try {
        // Connect to the MongoDB database
        const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: "work_manager",
        });

        console.log("db connected....");
        //console.log(connection);


        /* // Create a new user instance
      const newUser = new User({
           name: "test name",
           email: "test@gmail.com",
           password: "testpassword",
           about: "This is testing"
       });

       // Save the user to the database
       await newUser.save();*/

        console.log("user is created");


        console.log("connected with host", connection.host);




    } catch (error) {
        console.log("failed to connect with the database");
        console.error(error);
    }
};
