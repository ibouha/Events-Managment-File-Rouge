import mongoose from "mongoose";

interface User {
  clerkId: string;
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  photo: string;

}

const userSchema = new mongoose.Schema<User>({
  clerkId: {type: String, required: true, unique: true},
  userName: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  photo: {type: String, required: true},
});


const User = mongoose.models.User || mongoose.model<User>("User", userSchema);

export default User;