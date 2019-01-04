/**
 * Created by Bahgat on 1/15/16.
 */

 import {Size} from "../../others_servicesAndStatic/globalVariables";
import {PositionNum} from "../../others_servicesAndStatic/globalVariables";


export class ModalConfig {

    keyboard: Array<number> | number;
    forAny:any;
    navbarHeight=0;
    constructor(public Title: string = "",
                public size: Size = new Size(300, 150),
                public isBlocking: boolean = false,
                public canMinimize: boolean = true,
                public canMaximize: boolean = true,
                public openAsMaximize: boolean = false, //for first time
                public isCenter: boolean = true,
                public isResizable: boolean = true,
                public position: PositionNum = new PositionNum(50, 50),

                public attachToBody: boolean = false,
                keyboard: Array<number> | number = undefined )

    {
        if (keyboard === undefined) {
            keyboard = [27];
        }
        else if ( keyboard && !Array.isArray(<Array<number>>keyboard)) {
            keyboard = (!isNaN(<number>keyboard)) ? [<number>keyboard] : null;
        }
        this.keyboard = keyboard;
    }
}
