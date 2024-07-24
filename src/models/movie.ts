import mongoose, { Document, Schema } from "mongoose"
import IMovie from "../interfaces/movie"

type Genre = 'Action' | 'Comedy' | 'Drama' | 'Fantasy' | 'Horror' | 'Romance' | 'SciFi'

const MovieSchema : Schema=new Schema(
    {
        title: {type: String, required: true},
        description: { type: String, required: true },
        genres: [{ type: String, enum: ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Romance', 'SciFi'], required: true }],
        releaseDate: { type: Date, required: true },
        director: { type: String, required: true },
        actors: [{ type: String, required: true }]
    },
    {
        timestamps:true
    }
)

export default mongoose.model<IMovie>('Movie',MovieSchema)