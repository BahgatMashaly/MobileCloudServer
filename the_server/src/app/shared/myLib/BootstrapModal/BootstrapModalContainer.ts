
/**
 * Created by Bahgat on 1/15/16.
 */

import {OnDestroy,Component,ViewContainerRef,ViewChild,AfterViewInit} from "@angular/core";
import {NgStyle} from "@angular/common";
import {Observable} from 'rxjs/Rx'

import {ModalDialogInstance} from "./ModalDialogInstance";
import {Subscription} from "rxjs/Subscription";
 import {globalVariables, PositionNum} from "../../others_servicesAndStatic/globalVariables";





const makeInputObservable =
    (node: Node, eventName: string, useCapture?: boolean): Observable<UIEvent> =>
        Observable.fromEventPattern<MouseEvent>(
            (handler) => { node.addEventListener(eventName, <EventListener>handler, useCapture); },
            (handler) => { node.removeEventListener(eventName, <EventListener>handler, useCapture); }


        );


export class DragEvent
{
    public cancelled: boolean = false;
    constructor(public mouseDown: UIEvent, public mouseMove: UIEvent, public position: PositionNum, public offset: PositionNum)
    {
    }
}


@Component({
    selector: 'bootstrap-modal' ,


    // inputs: ['dialogInstance.config.size.height' ],
    host: {
        //  'tabindex': '-1 ,  بتعمل بوردر
        'role': 'dialog',
        //'(body:keydown)': 'documentKeypress($event)',

        // '(click)': 'onClick()',


        //'[style.top]': "dialogInstance.config.position.top_y=='-1px' ? '50%' : dialogInstance.config.position.top_y",
        '[style.top]': "dialogInstance.config.position.top + 'px'",
        '[style.left]': "dialogInstance.config.position.left +'px'",
        //'[style.transform]': "dialogInstance.config.position.top == '50' ?  'translate(-50%, -50%)' :  ''  ",

        '[style.z-index]': "compZIndex",
        //لو عايز سكرول لازم تحطله بخلاف السايز الخص بالكونتينت بتحط طول وعرض
        style:  `
        position: absolute;
   display: block;

         `
        ,
        class: 'ngPopup  in',

    },

    template: `

    <div class="modal-dialog "    style= "margin-bottom: 35px; margin-top: 0px; "

 [style.width]="dialogInstance.config.size.width + 'px'"
 [style.height]="dialogInstance.config.size.height + 'px' "
  >

 <div class="resizeCorner"  [hidden]="!dialogInstance.config.isResizable"  >
<div class="left-top-corner"></div>
<div class="left-bottom-corner"></div>
<div class="right-top-corner"  ></div>
<div class="right-bottom-corner"></div>
</div>

<div class="resizeBar"  [hidden]="!dialogInstance.config.isResizable"    >
<div class="top-bar" ></div>
<div class="right-bar" ></div>
<div class="bottom-bar"></div>
<div class="left-bar"></div>
</div>


<div class="titleBar"  style="cursor:pointer" (dblclick)="headerDblclick($event)"  >
    <span class="title">{{dialogInstance.config.Title}} </span><div class="iconGroup">
    <span   [style.display]="dialogInstance.config.canMinimize==false? 'none' : 'inline' " [class]="MinimizeStatus == false ? 'glyphicon glyphicon-minus' : 'glyphicon glyphicon-plus' "     (click)="minimize($event)"></span >
    <span [style.display]="dialogInstance.config.canMaximize==false? 'none' : 'inline' "   [class]="MaxmizeStatus == false ? 'glyphicon glyphicon-resize-full' : 'glyphicon glyphicon-resize-small' "  (click)="maximize($event)"></span>
     <span class="glyphicon glyphicon-remove" (click)="close()"></span>
   </div>
</div>
   <div class="modal-content"   style="display: block;height:100%;width:100%;overflow:hidden" >
            <div id="xxx" #modalDialog></div>
         </div>
    </div> 
` ,


    //background: red;
    //        overflow: auto;

//width: 100px;
//        height: 300px;
})

export  class BootstrapModalContainer implements OnDestroy ,AfterViewInit {






    dialogInstance: ModalDialogInstance;
    compZIndex: number;

    private _originalWidth: number;
    private _originalHeight: number;
    private _originalLeft: number;
    private _originalTop: number;
    private MaxmizeStatus: boolean = false;
    private MinimizeStatus: boolean = false;
    //noinspection JSAnnotator
    private _dragSubscription: Subscription;
    private _isDragging: boolean = false;
    private _axis: string;
    private _config: any;
    private _mouseDelay: number = 50;
    private _mouseDelayMet: boolean;
    private _mouseDelayTimer: number;
    private _mouseDistance: number = 5;
    private _mouseDistanceMet: boolean = false;
    private _containment: ClientRect = null;
    private _dragOffsetX: number;
    private _dragOffsetY: number;
    private _elementStartX: number;
    private _elementStartY: number;
    private _model: any;

    listenerToDrag:any;
    public finish_Init
    //modalDialog
    @ViewChild('modalDialog',{read: ViewContainerRef}) modalDialog_ViewContainer: ViewContainerRef;

    ngAfterViewInit():any {
        setTimeout(_=> this.finish_Init(this.modalDialog_ViewContainer));

    }

    set_finish_Init(callback)
    {
        this.finish_Init=callback;
    }

    constructor(dialogInstance: ModalDialogInstance,public viewContainerRef:ViewContainerRef )
    {
        // this.SV = SV;
        globalVariables.MaxZIndex++;
        this.compZIndex = globalVariables.MaxZIndex;

        this.dialogInstance = dialogInstance;


    }


    //onClick(dragEvent: DragEvent) {
    //    if( this.compZIndex !=SV.MaxZIndex) {
    //        SV.MaxZIndex++;
    //        this.compZIndex = SV.MaxZIndex;
    //    }
    //}

    documentKeypress(event: KeyboardEvent) {
        if ( this.dialogInstance.config.keyboard &&
            (<Array<number>>this.dialogInstance.config.keyboard).indexOf(event.keyCode) > -1) {
            this.dialogInstance.close();
        }
    }

    close()
    {
        this.dialogInstance.close();
    }
    headerDblclick(event)
    {
        if (event.srcElement.className == "titleBar" || event.srcElement.className == "title")
        {
            this.maximize(event);
        }
    }



    maximize(event)
    {
        if (!this.dialogInstance.config.canMaximize)
            return;

        if (!this.MaxmizeStatus )
        {

            this._originalTop = this.dialogInstance.config.position.top;
            this._originalLeft = this.dialogInstance.config.position.left;

            if (this.MinimizeStatus)
            {
                this.MinimizeStatus = false;
            }
            else
            {
                this._originalHeight = this.dialogInstance.config.size.height;
                this._originalWidth = this.dialogInstance.config.size.width;
            }
            this.dialogInstance.config.position.top =1 //jQuery('#af-header-0')[0].offsetHeight
            this.dialogInstance.config.position.left = 1;

            // backdropRef
            //if(elementRef.nativeElement.children[0].tagName=="ION-NAVBAR")
            //{
            //    config.size.height = elementRef.nativeElement.parentElement.offsetHeight-50
            //}


            if(this.dialogInstance.config.navbarHeight>0)
            {


                this.dialogInstance.config.size.height  = this.dialogInstance.backdropRef.location.nativeElement.closest("ion-page").offsetHeight-44-this.dialogInstance.config.navbarHeight;//40 بتاعة الهيدر
                this.dialogInstance.config.size.width = this.dialogInstance.backdropRef.location.nativeElement.closest("ion-page").offsetWidth-18;

                // this.dialogInstance.config.size.height  = this.dialogInstance.backdropRef.location.nativeElement.offsetHeight-this.dialogInstance.config.navbarHeight;//40 بتاعة الهيدر
                // this.dialogInstance.config.size.width = this.dialogInstance.backdropRef.location.nativeElement.offsetWidth-3;



            }
            else
            {
                this.dialogInstance.config.size.height  = this.dialogInstance.backdropRef.location.nativeElement.offsetParent.clientHeight
                this.dialogInstance.config.size.width = this.dialogInstance.backdropRef.location.nativeElement.offsetParent.clientWidth
                // this.dialogInstance.config.size.height  = this.dialogInstance.backdropRef.location.nativeElement.closest(".modal-dialog").offsetHeight-44;//40 بتاعة الهيدر
                // this.dialogInstance.config.size.width = this.dialogInstance.backdropRef.location.nativeElement.closest(".modal-dialog").offsetWidth-5;

               // this.dialogInstance.config.size.height  = this.dialogInstance.backdropRef.location.nativeElement.offsetHeight-44;//40 بتاعة الهيدر
               // this.dialogInstance.config.size.width = this.dialogInstance.backdropRef.location.nativeElement.offsetWidth-5;

            }



        }
        else //return from maximize
        {
            this.dialogInstance.config.position.top = this._originalTop;
            this.dialogInstance.config.position.left = this._originalLeft;
            this.dialogInstance.config.size.width = this._originalWidth;
            this.dialogInstance.config.size.height = this._originalHeight;
        }

        this.MaxmizeStatus = !this.MaxmizeStatus;

        this.sizeChanged(event);
    }

    minimize(e)
    {
        //    tempSizeForminimize
        //  tempPositionminimize
        if (!this.MinimizeStatus)
        {


            if (this.MaxmizeStatus)
            {

                this.dialogInstance.config.size.width = 200;
                this.dialogInstance.config.size.height = 1;
                this.dialogInstance.config.position.top = this._originalTop;
                this.dialogInstance.config.position.left = this._originalLeft;
                this.MaxmizeStatus = false;
            }
            else
            {
                this._originalHeight = this.dialogInstance.config.size.height;
                this._originalWidth = this.dialogInstance.config.size.width;
                this._originalTop = this.dialogInstance.config.position.top;
                this._originalLeft= this.dialogInstance.config.position.left;

                this.dialogInstance.config.size.width = 200;
                this.dialogInstance.config.size.height = 1
            }
            //توسيط الشاشة
            // this.dialogInstance.config.position.top = (window.innerHeight / 2 - this.tempSize.height / 2)
            // this.dialogInstance.config.position.left = (window.innerWidth / 2 - this.tempSize.width / 2)


        }
        else//return from minimize
        {

            globalVariables.MaxZIndex++
            this.dialogInstance.config.position.top = this._originalTop;
            this.dialogInstance.config.position.left = this._originalLeft;
            this.dialogInstance.config.size.width = this._originalWidth;
            this.dialogInstance.config.size.height = this._originalHeight;
        }

        this.MinimizeStatus = !this.MinimizeStatus;

        this.sizeChanged(e);


    }

    public initEvents()
    {

        //  click keydown keyup keypress mouseover mouseenter  mouseout mouseleave mousedown mouseup mousemove change blur focus scroll resize load unload beforeunload
        var mouseDownObservable = Observable.fromEvent(this.dialogInstance.bootstrapRef.location.nativeElement, 'mousedown').filter((md: MouseEvent) => md.which == 1);
        var mouseMoveObservable = Observable.fromEvent(document, 'mousemove');




        var mouseUpObservable = Observable.fromEvent(document, 'mouseup');
        var clickObservable = makeInputObservable(this.dialogInstance.bootstrapRef.location.nativeElement, 'click', true);
        var dragObservable = mouseDownObservable.flatMap ((mouseDownEvent: MouseEvent) =>
        {
            //mouseDownEvent.preventDefault();
            mouseDownEvent.stopPropagation();
            this._start();
            return mouseMoveObservable
                .map((mouseMoveEvent: MouseEvent) =>
                {
                    this._update(mouseDownEvent, mouseMoveEvent);

                    console.log("map mouseMoveEvent");
                    //console.log("offsetY" + mouseMoveEvent.offsetY);
                    //console.log("pageY" + mouseMoveEvent.pageY);
                    //console.log("screenY" + mouseMoveEvent.screenY);

                    return new DragEvent(mouseDownEvent, mouseMoveEvent, this._generatePosition(mouseMoveEvent), new PositionNum(this._dragOffsetX, this._dragOffsetY));
                })
                .filter((e) =>
                    {
                        console.log("filter mouseMoveEvent");
                        console.log(this._isDragging);
                        return this._isDragging;

                    }
                )
                .takeUntil(mouseUpObservable.map((mouseUpEvent) =>
                    {
                        console.log("takeUntil")
                        clearInterval(this._mouseDelayTimer);
                        if (this._isDragging)
                        {
                            console.log("this._isDragging=true")
                            //this.mydragCode(mouseUpEvent);
                            //  this.dragStop.next(mouseUpEvent);
                        }
                    })
                        .zip(clickObservable.map((clickEvent: MouseEvent) =>
                        {
                            if (this._isDragging)
                            {
                                clickEvent.stopPropagation();
                                console.log("this._isDragging=false");

                                this._isDragging = false;
                                this.sizeChanged(event);
                            }
                        }))

                );
        });
        this._dragSubscription = dragObservable.subscribe((event) =>
        {
            this.onDrag(event);
            //this.drag.next(event);
            setTimeout(() =>
            {
                if (!event.cancelled)
                {

                    if (event.mouseDown.srcElement.className != "titleBar" && event.mouseDown.srcElement.className != "title")
                    {
                        this.MaxmizeStatus = false;
                        this.MinimizeStatus = false;
                    }
                    if (event.mouseDown.srcElement.className == "titleBar" || event.mouseDown.srcElement.className == "title")
                    {
                        this.dialogInstance.config.position.top = event.position.top;
                        this.dialogInstance.config.position.left = event.position.left;
                    }
                    else if (event.mouseDown.srcElement.className == "bottom-bar" )
                    {
                        this.dialogInstance.config.size.height = this._originalHeight + event.offset.top;
                    }

                    else if (event.mouseDown.srcElement.className == "right-bar")
                    {
                        this.dialogInstance.config.size.width = this._originalWidth + event.offset.left;
                    }



                    else if (event.mouseDown.srcElement.className == "left-bar")
                    {
                        console.log("aaa");
                        console.log(event.offset.left);
                        console.log("old width:"+this.dialogInstance.config.size.width);
                        this.dialogInstance.config.size.width = this._originalWidth - event.offset.left;
                        this.dialogInstance.config.position.left = this._originalLeft + event.offset.left;
                        console.log("new width:"+this.dialogInstance.config.size.width);


                    }
                    else if (event.mouseDown.srcElement.className == "top-bar")
                    {
                        this.dialogInstance.config.position.top = this._originalTop + event.offset.top;
                        this.dialogInstance.config.size.height = this._originalHeight - event.offset.top;
                    }
                    else if (event.mouseDown.srcElement.className == "right-bottom-corner")
                    {
                        this.dialogInstance.config.size.height = this._originalHeight + event.offset.top;
                        this.dialogInstance.config.size.width = this._originalWidth + event.offset.left;
                    }

                    else if (event.mouseDown.srcElement.className == "left-bottom-corner")
                    {
                        this.dialogInstance.config.size.height = this._originalHeight + event.offset.top;
                        this.dialogInstance.config.size.width = this._originalWidth - event.offset.left;
                        this.dialogInstance.config.position.left = this._originalLeft + event.offset.left;
                    }
                    else if (event.mouseDown.srcElement.className == "left-top-corner")
                    {
                        this.dialogInstance.config.position.top = this._originalTop + event.offset.top;
                        this.dialogInstance.config.size.height = this._originalHeight - event.offset.top;
                        this.dialogInstance.config.size.width = this._originalWidth - event.offset.left;
                        this.dialogInstance.config.position.left = this._originalLeft + event.offset.left;
                    }
                    else if (event.mouseDown.srcElement.className == "right-top-corner")
                    {
                        this.dialogInstance.config.size.width = this._originalWidth + event.offset.left;
                        this.dialogInstance.config.position.top = this._originalTop + event.offset.top;
                        this.dialogInstance.config.size.height = this._originalHeight - event.offset.top;
                    }


                    //  event.cancelled = true;
                }
            });
        } );
    }






    public ngOnDestroy(): void
    {
        this._dragSubscription.unsubscribe();
    }

    set config(value: any)
    {
        this._config = value;
        this.setConfig(this._config);
    }
    public setConfig(config: any): void
    {
        for (let key in config)
        {
            var value = config[key];
            switch (key)
            {
                case 'axis':
                    this._axis = value;
                    break;
                case 'delay':
                    this._mouseDelay = parseInt(value);
                    break;
                case 'distance':
                    this._mouseDistance = parseInt(value);
                    break;
                case 'containment':
                    this._containment = value;
                    break;
                case 'model':
                    this._model = value;
                    break;
            }
        }
    }

    private _generatePosition(event: MouseEvent): PositionNum
    {
        var posX = (this._axis == 'y') ? this._elementStartX : this._elementStartX + this._dragOffsetX;
        var posY = (this._axis == 'x') ? this._elementStartY : this._elementStartY + this._dragOffsetY;
        return new PositionNum(posX, posY);
    }

    private _start(): void
    {
        if( this.compZIndex !=globalVariables.MaxZIndex) {
            globalVariables.MaxZIndex++;
            this.compZIndex = globalVariables.MaxZIndex;
        }

        this._isDragging = false;
        this._mouseDelayMet = this._mouseDelay == 0;
        this._mouseDistanceMet = this._mouseDistance == 0;
        this._elementStartX = this.dialogInstance.bootstrapRef.location.nativeElement.offsetLeft;
        this._elementStartY = this.dialogInstance.bootstrapRef.location.nativeElement.offsetTop;
        if (!this._mouseDelayMet)
        {

            this._mouseDelayTimer = window.setTimeout(() =>
            {
                this._mouseDelayMet = true;
            }, this._mouseDelay);
        }
    }

    private _update(mouseDownEvent: MouseEvent, mouseMoveEvent: MouseEvent): void
    {
        this._dragOffsetX = mouseMoveEvent.clientX - mouseDownEvent.clientX;
        this._dragOffsetY = mouseMoveEvent.clientY - mouseDownEvent.clientY;
        this._mouseDistanceMet = Math.abs(this._dragOffsetX) > this._mouseDistance || Math.abs(this._dragOffsetY) > this._mouseDistance
        if (!this._isDragging && this._mouseDelayMet && this._mouseDistanceMet)
        {
            this.onDragStart(event)
            // this.dragStart.next(event);
            this._isDragging = true;
        }
    }

    private _setStyle(styleName: string, styleValue: string)
    {
        if (this._model)
        {
            this._model[styleName] = styleValue
        } else
        {
            try
            {
                // this._renderer.setElementStyle(this.dialogInstance.bootstrapRef.location, styleName, styleValue);
                console.log("ok");
            }
            catch (e)
            {
                console.log(e.message);
            }
        }
    }


    onDrag(dragEvent: DragEvent)
    {
        console.log("dragggg");
    }
    onDrag1(dragEvent: DragEvent)
    {
        console.log("draggggtooooop");
    }

    public onDragStart(event: Event)
    {
        this._originalWidth = this.dialogInstance.config.size.width;
        this._originalHeight = this.dialogInstance.config.size.height;
        this._originalLeft = this.dialogInstance.config.position.left;
        this._originalTop = this.dialogInstance.config.position.top;
        //  this.resizeStart.next(event);
    }



    sizeChangedlisteners:Array<IDragListener>  = Array<IDragListener>();

    addSizeChangedListener(listener:IDragListener ) {
        this.sizeChangedlisteners.push(listener);
    }


    sizeChanged(event:Event) {
        for(var i;i<this.sizeChangedlisteners;i++)
        {
            try {
                setTimeout(() => {
                    this.sizeChangedlisteners[i].onAfterDialogSizeChanged(event);
                },5 );

            }
            catch (ex)
            {

            }
        }
        // for (var listener:IDragListener in this.sizeChangedlisteners) {
        //
        //             this.sizeChangedlisteners[listener].onAfterDialogSizeChanged(event);
        // }
    }
}

export interface IDragListener{
    onAfterDialogSizeChanged(event: Event);
}

