import mongoose, { Schema } from "mongoose"
import IList from "../interfaces/mylist"

type Genre = 'Action' | 'Comedy' | 'Drama' | 'Fantasy' | 'Horror' | 'Romance' | 'SciFi'

const UserSchema : Schema=new Schema(
    {
        // id: {type: String, required: true},
        username: {type: String, required: true},
        mylist: {type: Array}

    },
    {
        timestamps:true
    }
)

export default mongoose.model<IList>('username',UserSchema)