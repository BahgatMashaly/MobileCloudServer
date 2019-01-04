/**
 * Created by bahgat.mashaly on 12/10/16.
 */
 import {globalVariables} from "./globalVariables";



export class   PREFS_ITEM
{

    private static _lang:string  ;
    public static  get lang():string {
        return this._lang;
    }
    public static   set lang(the_lang:string) {
        globalVariables.storage.set("lang",the_lang);
        // userInfoDto.selectedLanguage=the_lang;
        this._lang= the_lang;
    }


    private static _password:string  ;
    public static  get password():string {
        return this._password;
    }
    public static   set password(the_password:string) {
        globalVariables.storage.set("password",the_password);
        this._password= the_password;
    }
   
    


    private static _userName:string  ;
    
    public static  get userName():string {
        return this._userName;
    }

    public static   set userName(the_userName:string) {
        globalVariables.storage.set("userName",the_userName);
         //userInfoDto.userName=the_userName;
        this._userName = the_userName;
    }




    // public static saved = false;
}