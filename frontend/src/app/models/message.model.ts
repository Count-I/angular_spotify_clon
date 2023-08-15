export interface Message{
    message_text:string,
    from_number:number,
    to_number:number,
    sent_datetime?:string,
}