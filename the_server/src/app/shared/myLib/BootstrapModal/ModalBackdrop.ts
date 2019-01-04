import {ModalDialogInstance} from "./ModalDialogInstance";
  import {Component} from "@angular/core";
import { NgModule } from '@angular/core';
import {globalVariables} from "../../others_servicesAndStatic/globalVariables";

/**
 * Created by Bahgat on 1/15/16.
 */
@Component({
    //directives:[IONIC_DIRECTIVES],
    selector: 'modal-backdrop',
    host: {
        '[style.position]': 'position',
        '[style.height]': 'height',
        '[style.width]': 'width',
        '[style.top]': 'top',
        '[style.left]': 'left',
        '[style.right]': 'right',
        '[style.bottom]': 'bottom',
        // '[hidden]':'!dialog.config.isBlocking',

        //  '[style.z-index]': "BackdropZindex"

    },
    template: '<div [hidden]="!dialog.config.isBlocking"  [style.position]="position" [style.z-index]="BackdropZindex" class="in modal-backdrop my" #modalBackdrop></div>'
})
export class ModalBackdrop {
    public position: string;
    public height: string;
    public width: string;
    public top: string;
    public left: string;
    public right: string;
    public bottom: string;
    BackdropZindex: number;

    constructor(public dialog: ModalDialogInstance) {
        this.BackdropZindex = globalVariables.MaxZIndex++;

        //if (!dialog.inElement) {
            this.position = this.width = this.height = null;
            this.top = this.left = this.right = this.bottom = null;
        //} else {
        //    this.position = 'absolute';
        //    this.height = '100%';
        //    this.width = '100%';
        //    this.top = this.left = this.right = this.bottom = '0';
        //}
    }
}



// @NgModule({
//     imports: [
//         ModalBackdrop
//
//     ] ,
//     exports:[ ModalBackdrop],
//
//
// })
// export class ModalBackdrop_module {}