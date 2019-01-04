export function logger()
{
    var _log = console.log;
    var _error = console.error;


    console.error = function(errMessage){
        console.count("it's my error log")
        _error.apply(console,arguments);
    };

    console.log = function(logMessage){
        // console.log("yyyyyyyyyyyyy")
        console.count("it's my log")
        _log.apply(console,arguments);
    };

}
//
//
//
// (function(){
//     var _log = console.log;
//     var _error = console.error;
//
//
//     console.error = function(errMessage){
//         _error.apply(console,arguments);
//     };
//
//     console.log = function(logMessage){
//        console.log("yyyyyyyyyyyyy")
//         _log.apply(console,arguments);
//     };
//
//
//
// })();
//
//
//
// var l=function()
// {
//     var that=window.console;
//     return{
//         log:function(message?: any, ...optionalParams: any[]):void
//         {
//               that.log("yyyyyyyyyyyyy")
//            return that.log(arguments)
//         },
//         error:function(message?: any, ...optionalParams: any[]):void
//         {
//          return   that.error(arguments)
//         },
//
//     assert:function(test?: boolean, message?: string, ...optionalParams: any[]): void{ return that.assert(this.arguments)  },
//     clear:function(): void{that.clear()},
//     count:function(countTitle?: string): void{return that.count(this.arguments)},
//     debug:function(message?: string, ...optionalParams: any[]): void { return that.debug(this.arguments)},
//     trace:function(): void{return that.trace()},
//     warn:function(message?: any, ...optionalParams: any[]): void{return that.warn(this.arguments)},
//     info:function(message?: any, ...optionalParams: any[]): void{return that.info(this.arguments)}
//     }
// };
//
//
//
// console.log("this should print like normal");
//
//
//  //window.console.log=  l.;
//
// //window.l=  new l();
// //window.W=  new l();
