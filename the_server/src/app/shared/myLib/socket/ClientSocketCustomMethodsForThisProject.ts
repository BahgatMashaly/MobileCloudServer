
/**
 * Created by Bahgat on 3/16/16.
 */
export class ClientSocketCustomMethodsForThisProject
{
    constructor(public socket:any)
    {
        this.socket.on("chat_message", (msg) => {
            console.log("Fffff")
        });

        this.socket.on("xxx", (msg) => {
            console.log(msg)
        });
        this.socket.on("Hello", (msg) => {
            console.log(msg)
        });


    }
}