import mongoose, { Document, Schema } from "mongoose"
import IUser from "../interfaces/user"

type Genre = 'Action' | 'Comedy' | 'Drama' | 'Fantasy' | 'Horror' | 'Romance' | 'SciFi'
// interface IUser extends Document{
//     mylist: mongoose.Types.ObjectId[];
// }
const UserSchema : Schema=new Schema(
    {
        username: {type: String, required: true},
        mylist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
    },
    {
        timestamps:true
    }
)
const User=mongoose.model<IUser>('username',UserSchema)
export default User