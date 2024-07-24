import mongoose, { Document, Schema } from 'mongoose';

type Genre = 'Action' | 'Comedy' | 'Drama' | 'Fantasy' | 'Horror' | 'Romance' | 'SciFi';

export default interface IUser extends Document {
  id: string,
  username: string,
  preferences: {
    favoriteGenres: Genre[],
    dislikedGenres: Genre[]
  },
  watchHistory: Array<{
    contentId: string,
    watchedOn: Date,
    rating?: number
  }>,
  mylist : mongoose.Types.ObjectId[];
}
    
    