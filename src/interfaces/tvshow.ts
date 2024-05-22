import {Document} from 'mongoose'

type Genre = 'Action' | 'Comedy' | 'Drama' | 'Fantasy' | 'Horror' | 'Romance' | 'SciFi';

export default interface ITvshow extends Document{
    id: string,
    title: string,
    description: string,
    genres: Genre[],
    episodes: Array<{
        episodeNumber: number,
        seasonNumber: number,
        releaseDate: Date,
        director: string,
        actors: string[]
    }>
}
    