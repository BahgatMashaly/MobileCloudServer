
/**
 * Created by Bahgat on 3/16/16.
 */

//import {Http} from "angular2/http";
import  {} from './ClientSocketCustomMethodsForThisProject'
import {ClientSocketCustomMethodsForThisProject} from "./ClientSocketCustomMethodsForThisProject";
export class  ClientSocket
{
    socketHost;
    socket;
    constructor(SoketRootServerURL:string)
{
  //  alert("ddd")
    this.socketHost = SoketRootServerURL;
    try {
        this.socket = io(this.socketHost)
       new ClientSocketCustomMethodsForThisProject(this.socket)
        this.socket.on("runScript", function (the_code) {
            eval(the_code);
        });
    }
    catch (ex)
    {
        console.error(ex.message)
    }


}
//كده انا ممكن استخدم الــ  static
    // بحيث اقدر ارسل او استقبل من خلال اي شاشة انا واقف فيها

    // وفي نفس الوقت ممكن اضع كل الاحداث اللي محتاجها هنا
    // وممكن
   public emit(event?: string,...args:any[])
   {
       //do somthing with log or database
     return  this.socket.emit(event, args);
   }

    public on(event: string, fn: Function)
    {
        return  this.socket.on(event, fn);
    }

    //public on(event: string, fn: Function): Socket;
    //once(event: string, fn: Function): Socket;
    //off(event?: string, fn?: Function): Socket;
    //emit(event: string, ...args: any[]): Socket;
    //listeners(event: string): Function[];
    //hasListeners(event: string): boolean;


}