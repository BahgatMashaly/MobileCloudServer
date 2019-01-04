import {ReflectiveInjector,ComponentRef,ApplicationRef,ResolvedReflectiveProvider,Injectable,ViewContainerRef,ViewChild,ComponentFactory,ComponentFactoryResolver} from "@angular/core";

import {ModalConfig} from "./ModalConfig";
import {ModalDialogInstance} from "./ModalDialogInstance";
import {ModalBackdrop} from "./ModalBackdrop";
import {BootstrapModalContainer} from "./BootstrapModalContainer";
import {globalVariables} from "../../others_servicesAndStatic/globalVariables";


@Injectable()
export class MyBootstrapModal {

    //@ViewChild('target', {read: ViewContainerRef}) target;

    constructor( private componentFactoryResolver: ComponentFactoryResolver ) {
    }


    /**
     * Open a new modal window.
     * @param componentType A Component class (type) to render in the window. e.g: `ModalContent`.
     * @param elementRef_viewContainer The parent location of the component. Note that it is not a rendered hierarchy, it is an injection hierarchy. e.g: the `ElementRef` of your current router view, etc...
     * @param parentInjector The injector used to create new component, if your `componentType` needs special injection (e.g: ModalContnetData) make sure you supply a suitable Injector.
     * @param config Modal configuration/options.
     * @returns Promise<ModalDialogInstance> A promise of ModalDialogInstance.
     */




    public open3(componentType:FunctionConstructor,
                 options?:ModalConfig,
                 elementRef_viewContainer:ViewContainerRef = globalVariables.mainContainer,
                 anchorName?:string,
                 bindings?:ResolvedReflectiveProvider[]):Promise<any> {
if(  !elementRef_viewContainer)
{
    elementRef_viewContainer =globalVariables.mainContainer ;// this.appRef['_rootComponents'][0].location;
}

        var config = options  ? options : new ModalConfig();


        //   config = (config) ? ModalConfig.makeValid(config, _config) : _config;
        let dialog = new ModalDialogInstance(config);
        var temp_bindings = ReflectiveInjector.resolve([

            { provide: ModalConfig, useValue: config },
            {provide:ViewContainerRef, useValue: elementRef_viewContainer}
        ])

        if (bindings) {
            temp_bindings=  temp_bindings.concat(bindings)

        }

        dialog.inElement = !!anchorName;


        let dialogBindings = ReflectiveInjector.resolve([{provide:ModalDialogInstance, useValue: dialog}]);

        return this.createBackdrop2(elementRef_viewContainer, dialogBindings, anchorName)
            .then((backdropRef:ComponentRef<any>) => {
                dialog.backdropRef = backdropRef;
                var scroll_right = 0;
               // elementRef_viewContainer.element.nativeElement.children[0].tagName == "ION-NAVBAR" &&
                if ( dialog.backdropRef.location.nativeElement.parentElement.tagName == "SCROLL-CONTENT") {
                    config.navbarHeight = 50;
                    scroll_right = 18;
                }
                else {
                    scroll_right = 5;
                }
                if (config.openAsMaximize) {
                    config.position.top = 1;
                    config.position.left = 1;
                    config.size.width = elementRef_viewContainer.element.nativeElement.parentElement.offsetParent.clientWidth - scroll_right;
                    config.size.height = elementRef_viewContainer.element.nativeElement.parentElement.offsetParent.clientHeight- config.navbarHeight - 44;
                }
                else if (config.isCenter) {
                    // DOM.setStyle(userComponent, 'width', '100%');
                    // DOM.getStyle(elementRef_viewContainer.nativeElement.innerHeight,'innerHeight')
                    // DOM.getStyle('innerWidth')
                    if (elementRef_viewContainer.element.nativeElement.innerHeight) {
                        config.position.top = (elementRef_viewContainer.element.nativeElement.innerHeight / 2 - config.size.height / 2)
                        config.position.left = (elementRef_viewContainer.element.nativeElement.innerWidth / 2 - config.size.width / 2)
                    }
                    else {
                        config.position.top = (elementRef_viewContainer.element.nativeElement.parentElement.offsetHeight / 2 - config.size.height / 2)
                        config.position.left = (elementRef_viewContainer.element.nativeElement.parentElement.offsetWidth / 2 - config.size.width / 2)
                    }
                }

                let modalDataBindings = ReflectiveInjector.resolve([{provide:ModalDialogInstance, useValue: dialog}]).concat(temp_bindings);
var that=this;
               // this.componentLoader.loadAsRoot()
                return this.injectViewToBackdrop(elementRef_viewContainer, dialogBindings)
                    .then((bootstrapRef:ComponentRef<any>) => {
                            dialog.bootstrapRef = bootstrapRef;
                        // bootstrapRef.location.nativeElement.appendChild()
                        //  bootstrapRef.location.nativeElement.appendChild(bootstrapRef.hostView);
                        return new Promise(function(resolve, reject){
                            bootstrapRef.instance.set_finish_Init(function (viewContainerRefx:ViewContainerRef) {
                                let factory:ComponentFactory<any> = that.componentFactoryResolver.resolveComponentFactory(componentType);
                               // let factory:ComponentFactory<any> = bootstrapRef.instance.componentFactoryResolver.resolveComponentFactory(componentType);
                                    var contentRef = viewContainerRefx.createComponent(factory)
                                    bootstrapRef.instance.initEvents()
                                    dialog.contentRef = contentRef;
                                    resolve( contentRef.instance);
                                // bootstrapRef.instance.resolver.resolveComponent(componentType).then((factory:ComponentFactory<any>) => {

                                // });
                            })
                        })

                                //   this.componentLoader.loadNextToLocation(componentType,viewContainerRefx,modalDataBindings)
                                //       .then ( function (contentRef)
                                //       {
                                //     bootstrapRef.instance.initEvents()
                                //     dialog.contentRef = contentRef;
                                //     return contentRef.instance;
                                //
                                // } );
                           // }
                       // );
                        })

                // return this.componentLoader.loadIntoLocation( BootstrapModalContainer, backdropRef.location, 'modalBackdrop', dialogBindings)
                //     .then(bootstrapRef => {
                //             dialog.bootstrapRef = bootstrapRef;
                //
                //             return this.componentLoader.loadIntoLocation(
                //                 componentType, bootstrapRef.location, 'modalDialog', modalDataBindings)
                //                 .then(contentRef => {
                //                         bootstrapRef.instance.initEvents()
                //                         dialog.contentRef = contentRef;
                //                        return contentRef.instance;
                //
                //                     }
                //                 );
                //         }
                //     );
            });
    }

    private createBackdrop2(elementRef_viewContaner:ViewContainerRef, bindings:ResolvedReflectiveProvider[],  anchorName?:string): Promise<ComponentRef<any>> {

        let factory:ComponentFactory<any> = this.componentFactoryResolver.resolveComponentFactory(ModalBackdrop);
        let childInjector = ReflectiveInjector.fromResolvedProviders(bindings, elementRef_viewContaner.parentInjector);

        return Promise.resolve(elementRef_viewContaner.createComponent(factory, elementRef_viewContaner.length, childInjector));

    }

    private injectViewToBackdrop(elementRef_viewContaner:ViewContainerRef, bindings:ResolvedReflectiveProvider[]): Promise<ComponentRef<any>> {

        let factory:ComponentFactory<any> = this.componentFactoryResolver.resolveComponentFactory(BootstrapModalContainer);
        let childInjector = ReflectiveInjector.fromResolvedProviders(bindings, elementRef_viewContaner.parentInjector);

        return Promise.resolve(elementRef_viewContaner.createComponent(factory, elementRef_viewContaner.length, childInjector));

    }

    // private createBackdrop1(elementRef_viewContaner:ViewContainerRef, bindings:ResolvedReflectiveProvider[],  anchorName?:string): ComponentRef {
    //
    //     let factory: ComponentFactory<any> = this.componentFactoryResolver.resolveComponentFactory(ModalBackdrop);
    //     let childInjector = ReflectiveInjector.fromResolvedProviders(bindings, elementRef_viewContaner.parentInjector);
    //
    //
    //      return  elementRef_viewContaner.createComponent(factory, elementRef_viewContaner.length, childInjector);
    //
    //      this.componentFactoryResolver.resolveComponentFactory(ModalBackdrop).then((factory) => {
    //         this.componentRef = elementRef_viewContaner.createComponent(factory);
    //         // this.componentRef = this.foo.createComponent(factory);
    //         // this.componentRef = this.div.createComponent(factory);
    //         // this.componentRef = this.viewContainerRef.createComponent(factory);
    //     });
    //
    //
    //     this.resolver.resolveComponent(this.type).then((factory:ComponentFactory<any>) => {
    //         this.cmpRef = this.target.createComponent(factory);
    //         // here you can set inputs and set up subscriptions to outputs
    //         // input
    //         this.cmpRef.instance.someInput = someValue;
    //         // output
    //         this.cmpRef.instance.someOutput.subscribe(event=>{ console.log(event) });
    //     });
    //
    //
    //
    //    return this.componentFactoryResolver.resolveComponentFactory(ModalBackdrop).then((factory:ComponentFactory<any>) => {
    //         this.cmpRef = elementRef_viewContaner.createComponent(factory);
    //         // here you can set inputs and set up subscriptions to outputs
    //         // input
    //         this.cmpRef.instance.someInput = someValue;
    //         // output
    //         this.cmpRef.instance.someOutput.subscribe(event=>{ console.log(event) });
    //     });
    //
    //
    //
    //
    //     if(!anchorName)
    //     {
    //         //return this.componentLoader.loadNextToLocation()
    //         var simpleComponent = this.componentFactoryResolver.resolveComponentFactory(SimpleComponent);
    //         me.componentRef = me.dynamicTarget.createComponent(simpleComponent);
    //         return this.componentLoader.loadNextToLocation(ModalBackdrop, elementRef_viewContaner, bindings);
    //     }
    //     else
    //     {
    //         return this.componentLoader.loadNextToLocation(ModalBackdrop, elementRef_viewContaner, bindings);
    //
    //        // return this.componentLoader.loadIntoLocation(ModalBackdrop, elementRef_viewContaner, anchorName, bindings);
    //     }
    // }
    //
    //

}


