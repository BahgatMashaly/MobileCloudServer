/**
 * Created by Bahgat on 4/13/16.
 */
import {AfterViewInit, Component, Renderer} from "@angular/core";


@Component({

    templateUrl: './PatternLock.html',

})

export class PatternLock implements  AfterViewInit{


    document = window.document;

    nullFunc () {}
    objectHolder = {};
    token;
    selector="#PatternLock";
    defaults = {
        matrix: [3, 3],
        margin: 20,
        radius: 25,
        patternVisible: true,
        lineOnMove: true,
        delimiter: "", // a delimeter between the pattern
        enableSetPattern: false
    };
    transform="transform";
    optionxx;
    constructor( public renderer: Renderer) {
        // this.transform=   "-ms-transform";
        this.transform=  "-webkit-transform"
    }

    ngAfterViewInit():any {
        function InternalMethods() {}

        InternalMethods.prototype = {
            constructor: InternalMethods,
            getIdxFromPoint: function (x, y) {
                var option = this.optionxx,
                    matrix = option.matrix,
                    xi = x - this.wrapLeft,
                    yi = y - this.wrapTop,
                    idx = null,
                    margin = option.margin,
                    plotLn = option.radius * 2 + margin * 2,
                    qsntX = Math.ceil(xi / plotLn),
                    qsntY = Math.ceil(yi / plotLn),
                    remX = xi % plotLn,
                    remY = yi % plotLn;

                if (qsntX <= matrix[1] && qsntY <= matrix[0] && remX > margin * 2 && remY > margin * 2) {
                    idx = (qsntY - 1) * matrix[1] + qsntX;
                }
                return {
                    idx: idx,
                    i: qsntX,
                    j: qsntY,
                    x: xi,
                    y: yi
                };
            }
        };

        var self = this;
        this.token = self.token = Math.random();
        var iObj = this.objectHolder[this.token] = new InternalMethods();
        var  holder:any = iObj.holder = $(this.selector);

        //if holder is not present return
        if (holder.length == 0) return;

        iObj.object = self;
        var optionx = iObj.option = $.extend({}, this.defaults, this.optionxx);
        this.readyDom(iObj);

        //add class on holder
        holder.addClass('patt-holder');

        //change offset property of holder if it does not have any property
        if (holder.css('position') == "static") holder.css('position', 'relative');

        //assign event
        holder.on("touchstart mousedown", function (e) {
            self.startHandler.call(this, e, self);
        });

        //handeling callback
        iObj.option.onDraw = optionx.onDraw || this.nullFunc;

        //adding a mapper function
        var mapper = optionx.mapper;
        if (typeof mapper == "object") {
            iObj.mapperFunc = function (idx) {
                return mapper[idx];
            };
        } else if (typeof mapper == "function") {
            iObj.mapperFunc = mapper;
        } else {
            iObj.mapperFunc = this.nullFunc;
        }

        //to delete from optionx object
        iObj.option.mapper = null;
    }


    readyDom(iObj) {
        var holder = iObj.holder,
            option = iObj.option,
            matrix = option.matrix,
            margin = option.margin,
            radius = option.radius,
            html = ['<ul class="patt-wrap" style="padding:' + margin + 'px">'];
        for (var i = 0, ln = matrix[0] * matrix[1]; i < ln; i++) {
            html.push('<li class="patt-circ" style="margin:' + margin + 'px; width : ' + (radius * 2) + 'px; height : ' + (radius * 2) + 'px; -webkit-border-radius: ' + radius + 'px; -moz-border-radius: ' + radius + 'px; border-radius: ' + radius + 'px; "><div class="patt-dots"></div></li>');
        }
        html.push('</ul>');
        holder.html(html.join('')).css({
            'width': (matrix[1] * (radius * 2 + margin * 2) + margin * 2) + 'px',
            'height': (matrix[0] * (radius * 2 + margin * 2) + margin * 2) + 'px'
        });

        //select pattern circle
        iObj.pattCircle = iObj.holder.find('.patt-circ');

    }

    getLengthAngle(x1, x2, y1, y2) {
        var xDiff = x2 - x1,
            yDiff = y2 - y1;

        return {
            length: Math.ceil(Math.sqrt(xDiff * xDiff + yDiff * yDiff)),
            angle: Math.round((Math.atan2(yDiff, xDiff) * 180) / Math.PI)
        };
    }

    startHandler   (e, obj) {
        var that=obj;
        e.preventDefault();
        var iObj = obj.objectHolder[obj.token];

        if (iObj.disabled) return;

        //check if pattern is visible or not
        if (!iObj.option.patternVisible) {
            iObj.holder.addClass('patt-hidden');
        }

        var touchMove = e.type == "touchstart" ? "touchmove" : "mousemove",
            touchEnd = e.type == "touchstart" ? "touchend" : "mouseup";

        //assign events
        $(this).on(touchMove + '.pattern-move', function (e) {
            console.log("movexxxxxxxxxxxx")
            that.moveHandler.call(this, e, obj);
        });
        $(document).one(touchEnd, function () {
            console.log("touchEndxxxxxxxxxxxx")
            that.endHandler.call(this, e, obj);
        });
        //set pattern offset
        var wrap = iObj.holder.find('.patt-wrap'),
            offset = wrap.offset();
        iObj.wrapTop = offset.top;
        iObj.wrapLeft = offset.left;

        //reset pattern
        obj.reset();

    }



    moveHandler  (e, obj) {
        e.preventDefault();
        if(e.originalEvent)
        {
            var x = e.pageX || e.originalEvent.touches[0].pageX;
            var  y = e.pageY || e.originalEvent.touches[0].pageY;
        }
        else
        {
            var x = e.pageX || e.targetTouches[0].pageX;
            var  y = e.pageY || e.targetTouches[0].pageY;

        }

        var iObj = obj.objectHolder[obj.token];
        var  li = iObj.pattCircle;
        var patternAry = iObj.patternAry;
        var  lineOnMove = iObj.option.lineOnMove;
        var  posObj = iObj.getIdxFromPoint(x, y);
        var idx = posObj.idx;
        var  pattId = iObj.mapperFunc(idx) || idx;


        if (patternAry.length > 0) {

            var laMove = obj.getLengthAngle(iObj.lineX1, posObj.x, iObj.lineY1, posObj.y);
            console.log("angle"+laMove.angle)
            //alert(navigator.userAgent)
            // iObj.line[0].style.width = (laMove.length + 10) + 'px';
            obj.renderer.setElementStyle(iObj.line[0], 'width', (laMove.length + 10) + 'px');
            // iObj.line[0].style.transform = 'rotate(' + laMove.angle + 'deg)';
            obj.renderer.setElementStyle(iObj.line[0], obj.transform, 'rotate(' + laMove.angle + 'deg)');
            //  -webkit-transform
            // iObj.line.css({
            //     'width': (laMove.length + 10) + 'px',
            //     'transform': 'rotate(' + laMove.angle + 'deg)'
            // });
        }

        if (idx) {
            if (patternAry.indexOf(pattId) == -1) {
                var elm = $(li[idx - 1]),
                    direction; //direction of pattern

                //check and mark if any points are in middle of previous point and current point, if it does check them
                if (iObj.lastPosObj) {
                    var lastPosObj = iObj.lastPosObj,
                        ip = lastPosObj.i,
                        jp = lastPosObj.j,
                        iDiff = Math.abs(posObj.i - ip),
                        jDiff = Math.abs(posObj.j - jp);

                    while (((iDiff == 0 && jDiff > 1) || (jDiff == 0 && iDiff > 1) || (jDiff == iDiff && jDiff > 1)) && !(jp == posObj.j && ip == posObj.i)) {
                        ip = iDiff ? Math.min(posObj.i, ip) + 1 : ip;
                        jp = jDiff ? Math.min(posObj.j, jp) + 1 : jp;
                        iDiff = Math.abs(posObj.i - ip);
                        jDiff = Math.abs(posObj.j - jp);

                        var nextIdx = (jp - 1) * iObj.option.matrix[1] + ip,
                            nextPattId = iObj.mapperFunc(nextIdx) || nextIdx;

                        if (patternAry.indexOf(nextPattId) == -1) {
                            $(li[nextIdx - 1]).addClass('hovered');
                            //push pattern on array
                            patternAry.push(nextPattId);
                        }
                    }
                    direction = [];
                    posObj.j - lastPosObj.j > 0 ? direction.push('s') : posObj.j - lastPosObj.j < 0 ? direction.push('n') : 0;
                    posObj.i - lastPosObj.i > 0 ? direction.push('e') : posObj.i - lastPosObj.i < 0 ? direction.push('w') : 0;
                    direction = direction.join('-');

                }



                //add the current element on pattern
                elm.addClass('hovered');
                //push pattern on array
                patternAry.push(pattId);

                //add start point for line
                var margin = iObj.option.margin,
                    radius = iObj.option.radius,
                    newX = (posObj.i - 1) * (2 * margin + 2 * radius) + 2 * margin + radius,
                    newY = (posObj.j - 1) * (2 * margin + 2 * radius) + 2 * margin + radius;

                if (patternAry.length != 1) {
                    //to fix line
                    var lA = obj.getLengthAngle(iObj.lineX1, newX, iObj.lineY1, newY);
                    //   iObj.line[0].style.width = (lA.length + 10) + 'px';
                    //  obj.renderer.setElementStyle(iObj.line[0], obj.transform, 'rotate(' + lA.angle + 'deg)');
                    iObj.line.css({
                        'width': (lA.length + 10) + 'px',
                        'transform': 'rotate(' + lA.angle + 'deg)'
                    });

                    if (!lineOnMove) iObj.line.show();
                }

                //add direction class on pattern circle and lines
                if (direction) {
                    iObj.lastElm.addClass(direction + " dir");
                    iObj.line.addClass(direction + " dir");
                }
                //to create new line
                var line = $('<div class="patt-lines" style="top:' + (newY - 5) + 'px; left:' + (newX - 5) + 'px"></div>');
                iObj.line = line;
                iObj.lineX1 = newX;
                iObj.lineY1 = newY;
                //add on dom
                iObj.holder.append(line);
                if (!lineOnMove) iObj.line.hide();

                iObj.lastElm = elm;
            }
            iObj.lastPosObj = posObj;

        }


    }


    endHandler  (e, obj) {
        e.preventDefault();
        var iObj = obj.objectHolder[obj.token],
            pattern = iObj.patternAry.join(iObj.option.delimiter);

        //remove hidden pattern class and remove event
        iObj.holder.off('.pattern-move').removeClass('patt-hidden');

        if (!pattern) return;

        iObj.option.onDraw(pattern);

        //to remove last line
        iObj.line.remove();


        obj.checkForPattern("123",function () {
            console.log("succcccccccccc")
        },function (error) {
            console.log(error)
        })
        if (iObj.rightPattern) {
            if (pattern == iObj.rightPattern) {
                iObj.onSuccess();
            } else {
                iObj.onError();
                obj.error();
            }
        }
    };







    option (key, val) {
        var iObj = this.objectHolder[this.token],
            option = iObj.option;
        //for set methods
        if (val === undefined) {
            return option[key];
        }
        //for setter
        else {
            option[key] = val;
            if (key == "margin" || key == "matrix" || key == "radius") {
                this.readyDom(iObj);
            }
        }
    }
    //get drawn pattern as string
    getPattern () {
        var iObj = this.objectHolder[this.token];
        return (iObj.patternAry || []).join(iObj.option.delimiter);
    }
    //method to draw a pattern dynamically
    setPattern (pattern) {
        var iObj = this.objectHolder[this.token],
            option = iObj.option,
            matrix = option.matrix,
            margin = option.margin,
            radius = option.radius;

        //allow to set password manually only when enable set pattern optionx is true
        if (!option.enableSetPattern) return;

        this.reset();
        iObj.wrapLeft = 0;
        iObj.wrapTop = 0;

        for (var i = 0; i < pattern.length; i++) {
            var idx = pattern[i] - 1,
                x = idx % matrix[1],
                y = Math.floor(idx / matrix[1]),
                pageX = x * (2 * margin + 2 * radius) + 2 * margin + radius,
                pageY = y * (2 * margin + 2 * radius) + 2 * margin + radius;

            this.moveHandler.call(null, {
                pageX: pageX,
                pageY: pageY,
                preventDefault: this.nullFunc,
                originalEvent: {
                    touches: [{
                        pageX: pageX,
                        pageY: pageY
                    }]
                }
            }, this);

        }
    }
    //to temprory enable disable plugin
    enable () {
        var iObj = this.objectHolder[this.token];
        iObj.disabled = false;
    }

    disable () {
        var iObj = this.objectHolder[this.token];
        iObj.disabled = true;
    }
    //reset pattern lock
    reset () {
        var iObj = this.objectHolder[this.token];
        //to remove lines
        iObj.pattCircle.removeClass('hovered dir s n w e s-w s-e n-w n-e');
        iObj.holder.find('.patt-lines').remove();

        //add/reset a array which capture pattern
        iObj.patternAry = [];

        //remove last Obj
        iObj.lastPosObj = null;

        //remove error class if added
        iObj.holder.removeClass('patt-error');

    }
    //to display error if pattern is not drawn correct
    error () {
        this.objectHolder[this.token].holder.addClass('patt-error');
    }
    //to check the drawn pattern against given pattern
    checkForPattern (pattern, success, error) {
        var iObj =  this.objectHolder[this.token];
        iObj.rightPattern = pattern;
        iObj.onSuccess = success || this.nullFunc;
        iObj.onError = error || this.nullFunc;
    }




}