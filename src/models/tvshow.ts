import mongoose, { Schema } from "mongoose"
import ITvshow from "../interfaces/tvshow"

type Genre = 'Action' | 'Comedy' | 'Drama' | 'Fantasy' | 'Horror' | 'Romance' | 'SciFi'

const TvshowSchema : Schema = new Schema(
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

export default mongoose.model<ITvshow>('Tvshow',TvshowSchema)