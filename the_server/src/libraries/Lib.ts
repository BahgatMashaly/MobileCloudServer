import {
  BaseRequestOptions,
  BrowserXhr, CookieXSRFStrategy, Headers, Http, Request, RequestMethod, RequestOptions, Response, ResponseOptions,
  URLSearchParams,
  XHRBackend
} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/timeout';


import {Header} from "ionic-angular/umd/navigation/nav-interfaces";
import {dummyResponse} from "../app/shared/dummyResponse";
import {globalVariables} from "../app/shared/others_servicesAndStatic/globalVariables";


export var Path = paramBuilder("Path");
export var Query = paramBuilder("Query");
export var Body = paramBuilder("Body");

export var BodyAsIs = paramBuilder("BodyAsIs")("BodyAsIs");



export class LibraryGlobalVariablesInit{

  public static appHeaders : any;
  public static baseUrl:any;

  public static funcDummyResponse = dummyResponse.getDummyServiceResponse;

  public static http:Http = new Http(new XHRBackend(new BrowserXhr(), new ResponseOptions({
      body: null,
      headers: (function () {
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
      })(),
      status: 200,
      statusText: "Ok",
      type: 2,
      url: null
    }
  ) ,new CookieXSRFStrategy()), new BaseRequestOptions());




  public static setConfig(config:any={}):any
  {
    if(config['baseUrl']) {
      LibraryGlobalVariablesInit.baseUrl = config['baseUrl'];
    }
    if(config['appHeaders']) {
      LibraryGlobalVariablesInit.appHeaders = config['appHeaders'];
    }
  return LibraryGlobalVariablesInit;

  }
}

export var Get = methodBuilder(RequestMethod.Get);
export var Post = methodBuilder(RequestMethod.Post);
export var Put = methodBuilder(RequestMethod.Put);
export var Delete = methodBuilder(RequestMethod.Delete);





function paramBuilder (paramName:any) {
  return function (key:string) {
    return function (targetClass:any, methodName:string | symbol, parameterIndex:number) {

      var metadataKey = `${methodName}_${paramName}_parameters`;
      var paramObj:any = {
        key: key,
        parameterIndex: parameterIndex
      };
      if (Array.isArray(targetClass[metadataKey])) {//3alashan ashof hal mawgood walla la2 3alashan law hadeef 2 paths maye3melsh override 3ala wa7ed mawgood
        targetClass[metadataKey].push(paramObj);//the var converted to an array 3ady we haye3mel feha push
      } else {
        targetClass[metadataKey] = [paramObj];//hena ba3mel set ba2olo el key da 7ot feh el object da
      }
    };
  };
}




export function TimeOut(serviceTimeOut:number) {
  return function (target:any, propertyKey:string, descriptor:any) {
    descriptor.serviceTimeOut = serviceTimeOut;
    return descriptor;
  };
}



function methodBuilder(requestMethodNumber:number) {
  return function (url:string,disabePreFunction=false,disablePostFunction=false, customHeader?: Header) {//these parameters which are sent from the service like @Post("/login/checkPassword", new Headers) defined above Post
    return function (targetClass:any, methodName:string, descriptor:any) {

      var pPath = targetClass[`${methodName}_Path_parameters`];
      var pQuery = targetClass[`${methodName}_Query_parameters`];
      var pBody = targetClass[`${methodName}_Body_parameters`];
      var pBodyAsIs = targetClass[`${methodName}_BodyAsIs_parameters`];
      var pFile = targetClass[`${methodName}_File_parameters`];

      descriptor.value = function (...args:any[]) {

        //  if(LibraryGlobalVariablesInit.funcDummyResponse){
        //   return LibraryGlobalVariablesInit.funcDummyResponse(methodName,1000);
        // }

        var tempURL=url;

        if(pPath)
        {
          tempURL = _substitute(tempURL , args, pPath);
        }

        var queryStringParams = new URLSearchParams();
        if(pQuery){
          tempURL = tempURL +"?";
          for(var i=0; i<pQuery.length; i++){

            var key = pQuery[i].key;
            var value = args[pQuery[i].parameterIndex];

            // if(i > 0){
            //   url = url +"&";
            // }
            // url = url +pQuery[i].key+"="+args[pQuery[i].parameterIndex];

            queryStringParams.set(encodeURIComponent(key), encodeURIComponent(value));

          }
        }

        if(pBody){
          var bodyJSON = {};
          var bodyForm = "";
          for(var i=0; i<pBody.length; i++){
            var key = pBody[i].key;
            var value = args[pBody[i].parameterIndex];

            //below incase of being sent as an json
            bodyJSON[key] = value;
            //----------------------

            ////below incase of being sent as an a key and value in case of 'Content-Type': 'application/x-www-form-urlencoded'
            if(i > 0){
              bodyForm = bodyForm +"&";
            }
            bodyForm = bodyForm+ encodeURIComponent(key) +"="+encodeURIComponent(value);

            //------------------------------------------------------------
          }
        }


        var header_temp;
        if(customHeader) {
          header_temp=customHeader;
        }
        else {
          header_temp= LibraryGlobalVariablesInit.appHeaders;
        }

        var finalBody;
        var ContentType = header_temp.get('Content-Type');



        if(ContentType && ContentType.toString()=="application/x-www-form-urlencoded")
        {
          finalBody= bodyForm;
        }
        else { //json
          finalBody=JSON.stringify(bodyJSON);
        }

          if(pBodyAsIs)
          {

              for (var obj1 in args[pBodyAsIs[0].parameterIndex]) {
                  if (args[pBodyAsIs[0].parameterIndex][obj1] === undefined) {
                      args[pBodyAsIs[0].parameterIndex][obj1] = null;
                  }
              }

              finalBody=  args[pBodyAsIs[0].parameterIndex]
          }


          tempURL = LibraryGlobalVariablesInit.baseUrl+tempURL;


        var options = new RequestOptions ({
          method:requestMethodNumber,
          url: tempURL,
          headers:header_temp ,
          body:finalBody,
          search: queryStringParams  //search is for URLSearchParams
        });

        console.log("before  data is = ");

        var req: Request = new Request(options);

        if(!disabePreFunction)
        {
          globalVariables.preFunction();
        }

        console.log("the request",req);
        var observable:Observable<Response> = LibraryGlobalVariablesInit.http.request(req);

        var timeOut=65000;
        if(descriptor.serviceTimeOut) {
          timeOut=descriptor.serviceTimeOut;
        }

        return observable.timeout(timeOut).map(res => {
          console.log("the response:",res); //ToDo remove lib log
          var data  = res.json();
          if(!disablePostFunction)
          {
            globalVariables.postFunction();
          }

          return data;
          //console.log("getPromotions data is = ", data);
          //return JSON.parse(datax.text());

        }).catch(res_error=>{
          if(!disablePostFunction)
          {
            globalVariables.postFunction();
          }
          try {
              console.log("service error", res_error);//ToDo remove lib log
          }
          catch (ex)  {   }
          try{

              if(res_error.message)
              {
                  throw Error(res_error.message);
              }
              // else if(res_error._body) // OR OTHER
              // {
              //     throw res_error;
              // }
              else
              {
                  throw res_error;
              }


          }catch(e){
            throw e;
          }

        })

      };

      return descriptor;
    }}


}




function _substitute(url:any, args:any, pPath:any){
  for(var i=0 ; i<pPath.length; i++){
    url = url.replace("{" + pPath[i].key + "}", args[pPath[i].parameterIndex]);
  }
  return url;
}

