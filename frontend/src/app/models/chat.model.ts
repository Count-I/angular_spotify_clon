import { Contact } from "./contact.model";
import { Message } from "./message.model";
import { User } from "./user.model";

export interface Chat{
    users:String[],
    messages?:Message[]
}