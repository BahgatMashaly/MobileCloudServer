// import {Directive, Attribute, ElementRef, DynamicComponentLoader, OnChanges, SimpleChange}  from '@angular/core';
// import {Router, RouterOutlet, ComponentInstruction, OnActivate} from '@angular/router';
//
//
// import {stringify} from './stringify';
//
// //import {stringify} from './lib/stringify';
// @Directive({
//     selector: 'router-outlet-events'
// })
// export class Router_outlet_events extends RouterOutlet     {
//
//     private parentRouter: Router;
//
//     constructor(_elementRef: ElementRef, _loader: DynamicComponentLoader, _parentRouter: Router, @Attribute('name') nameAttr: string) {
//         super(_elementRef, _loader, _parentRouter, nameAttr);
//
//         this.parentRouter = _parentRouter;
//         this.parentRouter.hostComponent.onActivate = function (nx: any, pe: any) {
//             alert(nx);
//         }
//     }
// //    elementRef: ElementRef,
// //+    _loader: DynamicComponentLoader,
// //+    _parentRouter: Router,
// //+    _injector: Injector,
// //+    @Attribute('name') nameAttr: string) {
//
//     activate(nextinstruction: ComponentInstruction)
//     {
//
//       var x=  RouterOutlet.arguments
//        // var url = this.parentRouter.c;
//        // console.log(this._currentInstruction);
//         //if (!this.publicRoutes[url] && !localStorage.getItem('jwt')) {
//         //    // todo: redirect to Login, may be there a better way?
//         //    this.parentRouter.navigateByUrl('/login');
//         //}
//       //  console.log(this.simpleStringify(this.parentRouter));
//       //  console.log(JSON.stringify(  stringify.prototype.stringify(this.parentRouter, null, 2,null)));
//        // console.log(JSON.stringify(this.parentRouter));
//        // alert("Router_outlet_events activate event");
//         return super.activate(nextinstruction);
//     }
//
//     deactivate(nextinstruction: ComponentInstruction)
//     {
//         //alert("Router_outlet_events  deactivate event");
//
//         return super.deactivate(nextinstruction);
//     }
//     onActivate(next: ComponentInstruction, prev: ComponentInstruction) {
//
//      //   alert("Router_outlet_events onActivate event  next page is :" );
//         // this.log = `Finished navigating from "${prev ? prev.urlPath : 'null'}" to "${next.urlPath}"`;
//     }
//
//     canActivate(instruction) {
//         this;
//        // var url = this._router.lastNavigationAttempt;
//         // If the user is going to a URL that requires authentication and is not logged in (meaning we don't have the JWT saved in localStorage), we redirect the user to the login page.
//         //if (url !== '/login' && !localStorage.getItem('jwt')) {
//         //    instruction.component = Login;
//         //}
//       //  return PromiseWrapper.resolve(true);
//     }
//
//
//
//
//       censor(censor) {
//     var i = 0;
//
//     return function (key, value) {
//         if (i !== 0 && typeof (censor) === 'object' && typeof (value) == 'object' && censor == value)
//             return '[Circular]';
//
//         if (i >= 29) // seems to be a harded maximum of 30 serialized objects?
//             return '[Unknown]';
//
//         ++i; // so we know we aren't using the original object anymore
//
//         return value;
//     }
//     }
//
//
//
//       onChanges(changes: { [propName: string]: SimpleChange })
//       {
//
//           alert("first page onChanges event")
//           console.log('onChanges - myProp = ' + changes['myProp'].currentValue);
//       }
//
//
//
// }