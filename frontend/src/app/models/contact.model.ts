import { User } from "./user.model"

export interface Contact{
    owner_id:string,
    contact_name:string
    user:User
}