import {ErrorHandler} from "@angular/core";


export class customExceptionHandler extends ErrorHandler  {

    handleError(error:any) {
      //  console.warn("message:::"+error.message);


        console.error("stack::::"+error.stack);
       // console.trace("originalError::::"+error.originalError)
    }


}