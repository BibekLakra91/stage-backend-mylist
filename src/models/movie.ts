import mongoose, { Document, Schema } from "mongoose"
import IMovie from "../interfaces/movie"

type Genre = 'Action' | 'Comedy' | 'Drama' | 'Fantasy' | 'Horror' | 'Romance' | 'SciFi'

const MovieSchema : Schema=new Schema(
    {
        title: {type: String, required: true},
        description: { type: String, required: false },
        genres: [{ type: String, enum: ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Romance', 'SciFi'], required: false }],
        releaseDate: { type: Date, required: false },
        director: { type: String, required: false },
        actors: [{ type: String, required: false }]
    },
    {
        timestamps:true
    }
)

export default mongoose.model<IMovie>('Movie',MovieSchema)