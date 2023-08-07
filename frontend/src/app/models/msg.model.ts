export interface msg{
    user:boolean,
    message_text:string,
    from_number?:number,
    to_number?:number,
    sent_datetime?:string,
    contact_id?:number
}