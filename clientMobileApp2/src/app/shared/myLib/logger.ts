//
//
//
var l=function()
{
    var that=window.console;
    return{
        log:function(message?: any, ...optionalParams: any[]):void
        {
           return that.log(arguments)
        },
        error:function(message?: any, ...optionalParams: any[]):void
        {
         return   that.error(arguments)
        },

    assert:function(test?: boolean, message?: string, ...optionalParams: any[]): void{ return that.assert(this.arguments)  },
    clear:function(): void{that.clear()},
    count:function(countTitle?: string): void{return that.count(this.arguments)},
    debug:function(message?: string, ...optionalParams: any[]): void { return that.debug(this.arguments)},
    trace:function(): void{return that.trace()},
    warn:function(message?: any, ...optionalParams: any[]): void{return that.warn(this.arguments)},
    info:function(message?: any, ...optionalParams: any[]): void{return that.info(this.arguments)}
    }
};

(<any>window).console=  l();


// var l  =(function(oldCons){
//     return {
//         log: function(text){
//             oldCons.log(text);
//             // Your code
//         },
//
//         error: function (text) {
//             oldCons.error(text);
//             // Your code
//         },
//       assert:function(test?: boolean, message?: string, ...optionalParams: any[]): void{ return oldCons.assert(this.arguments)  },
//     clear:function(): void{oldCons.clear()},
//     count:function(countTitle?: string): void{return oldCons.count(this.arguments)},
//     debug:function(message?: string, ...optionalParams: any[]): void { return oldCons.debug(this.arguments)},
//     trace:function(): void{return oldCons.trace()},
//     warn:function(message?: any, ...optionalParams: any[]): void{return oldCons.warn(this.arguments)},
//     info:function(message?: any, ...optionalParams: any[]): void{return oldCons.info(this.arguments)}
//     };
// }(window.console)) ;
//
//
//
//
//
// //Then redefine the old console
// (<any>window).console  = l


