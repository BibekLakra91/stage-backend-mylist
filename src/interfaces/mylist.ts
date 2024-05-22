import {Document} from 'mongoose'
import IUser from "./user";

export default interface IList extends IUser{
    mylist : string[]
}