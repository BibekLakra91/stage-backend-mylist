import mongoose, { Schema } from "mongoose"
import ITvshow from "../interfaces/tvshow"

type Genre = 'Action' | 'Comedy' | 'Drama' | 'Fantasy' | 'Horror' | 'Romance' | 'SciFi'

const TvshowSchema : Schema = new Schema(
    {
        title: {type: String, required: true},
    },
    {
        timestamps:true
    }
)

export default mongoose.model<ITvshow>('Tvshow',TvshowSchema)