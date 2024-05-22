import mongoose, { Schema } from "mongoose"
import IMovie from "../interfaces/movie"

type Genre = 'Action' | 'Comedy' | 'Drama' | 'Fantasy' | 'Horror' | 'Romance' | 'SciFi'

const MovieSchema : Schema=new Schema(
    {
        title: {type: String, required: true},
    },
    {
        timestamps:true
    }
)

export default mongoose.model<IMovie>('Movie',MovieSchema)