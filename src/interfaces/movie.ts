import mongoose, { Document, Schema } from 'mongoose';

type Genre = 'Action' | 'Comedy' | 'Drama' | 'Fantasy' | 'Horror' | 'Romance' | 'SciFi';

export default interface IMovie extends Document{
    id: string,
    title: string,
    description: string,
    genres: Genre[],
    releaseDate: Date,
    director: string,
    actors: string[]
}
    