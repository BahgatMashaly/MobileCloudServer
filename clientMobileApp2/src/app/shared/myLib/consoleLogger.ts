// //
// //
// //
  //import {fabricCrashlyticsAnswer} from "./customErrorHandler/analytics";
//
// export class L{
//     temp_console=window.console;
//     that;
//     analytics;
//     constructor()
//     {
//       this.analytics=new fabricCrashlyticsAnswer();
//         var oldConsole=window.console;
//         var that=this;
//         //////////////////////////////////////////////////////////
//         var l=function()
// {
//     return{
//         log:function(message?: any, ...optionalParams: any[]):void
//         {
//             that.analytics.addLog(message);
//
//             if(optionalParams.length>0)
//             {
//                 return oldConsole.log(arguments)
//             }
//             else
//             {
//                 return oldConsole.log(arguments)
//             }
//
//
//
//         },
//         error:function(message?: any, ...optionalParams: any[]):void
//         {
//
//             if(optionalParams.length>0)
//             {
//                 return oldConsole.error(message,optionalParams)
//             }
//             else
//             {
//                 return oldConsole.error(message)
//             }
//             // return   that.error(arguments)
//         },
//
//         assert:function(test?: boolean, message?: string, ...optionalParams: any[]): void{ return oldConsole.assert(this.arguments)  },
//         clear:function(): void{oldConsole.clear()},
//         count:function(countTitle?: string): void{return oldConsole.count(this.arguments)},
//         debug:function(message?: string, ...optionalParams: any[]): void { return oldConsole.debug(this.arguments)},
//         trace:function(): void{return oldConsole.trace()},
//         warn:function(message?: any, ...optionalParams: any[]): void{return oldConsole.warn(this.arguments)},
//         info:function(message?: any, ...optionalParams: any[]): void{return oldConsole.info(this.arguments)}
//     }
// };
//
// (<any>window).console=  l();
//
//         // window.console.log=this.log
//         // window.console.error=this.error
// // var oldConsole =window.console ;
// //
// //
// //         (<any>window).console =
// //             {
// //                 info: (message?: any, ...optionalParams: any[]) =>
// //                 {
// //                     return  oldConsole.info(message,optionalParams)
// //                 },
// //
// //                 profile: (reportName?: string) =>
// //                 {
// //                     return  oldConsole.profile(reportName)
// //                 },
// //
// //                 assert: (test?: boolean, message?: string, ...optionalParams: any[]) =>
// //                 {
// //                     return  oldConsole.assert(test, message,  optionalParams);
// //                 },
// //
// //                 msIsIndependentlyComposed: (element: Element) =>
// //                 {
// //                     return false;
// //                 },
// //
// //                 clear: () =>
// //                 {
// //                     return  oldConsole.clear();
// //                 },
// //
// //                 dir: (value?: any, ...optionalParams: any[]) =>
// //                 {
// //                     return  oldConsole.dir(value,optionalParams);
// //                 },
// //
// //                 warn: (message?: any, ...optionalParams: any[]) =>
// //                 {
// //                     return oldConsole.warn(message,optionalParams)
// //                 },
// //
// //                 error: (message?: any, ...optionalParams: any[]) =>
// //                 {
// //                     return  oldConsole.error(message,optionalParams)
// //                 },
// //
// //                 log: function(message?: any, ...optionalParams: any[]):void
// //                 {
// //                      return oldConsole.log(arguments);
// //                 },
// //
// //                 profileEnd: () =>
// //                 {
// //                     return  oldConsole.profileEnd()
// //                 },
// //
// //                 count: (countTitle?: string) =>
// //                 {
// //                     return  oldConsole.count(countTitle)
// //                 },
// //
// //                 groupEnd: () =>
// //                 {
// //                     return  oldConsole.groupEnd()
// //                 },
// //
// //                 time: (timerName?: string) =>
// //                 {
// //                     return  oldConsole.timeEnd(timerName)
// //                 },
// //
// //                 timeEnd: (timerName?: string) =>
// //                 {
// //                     return  oldConsole.timeEnd(timerName)
// //                 },
// //
// //                 trace: () =>
// //                 {
// //                     return oldConsole.trace()
// //                 },
// //
// //                 group: (groupTitle?: string) =>
// //                 {
// //                     return  oldConsole.group(groupTitle)
// //                 },
// //
// //                 dirxml: (value: any) =>
// //                 {
// //                     return  oldConsole.dirxml(value)
// //                 },
// //
// //                 debug: (message?: string, ...optionalParams: any[]) =>
// //                 {
// //                     return oldConsole.debug(message,optionalParams)
// //                 },
// //
// //                 groupCollapsed: (groupTitle?: string) =>
// //                 {
// //                     return oldConsole.groupCollapsed(groupTitle)
// //                 },
// //
// //                 select: (element: Element) =>
// //                 {
// //                     return  oldConsole.select(element)
// //                 },
// //             };
//
//
//
//
//
//     }
//
// }
//
//
// new L();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//
//  var l=function()
// {
//     var that=window.console;
//     var analytics = new  fabricCrashlyticsAnswer();
//
//     var thatx = this;
//     return{
//         log:function(message?: any, ...optionalParams: any[]):void
//         {
//              analytics.addLog(message);
//             return that.log(arguments)
//         },
//         error:function(message?: any, ...optionalParams: any[]):void
//         {
//             return   that.error(arguments)
//         },
//
//         assert:function(test?: boolean, message?: string, ...optionalParams: any[]): void{ return that.assert(this.arguments)  },
//         clear:function(): void{that.clear()},
//         count:function(countTitle?: string): void{return that.count(this.arguments)},
//         debug:function(message?: string, ...optionalParams: any[]): void { return that.debug(this.arguments)},
//         trace:function(): void{return that.trace()},
//         warn:function(message?: any, ...optionalParams: any[]): void{return that.warn(this.arguments)},
//         info:function(message?: any, ...optionalParams: any[]): void{return that.info(this.arguments)}
//     }
// };
//
// (<any>window).console=  l();


