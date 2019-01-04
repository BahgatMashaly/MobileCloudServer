// import {Animation} from 'ionic-angular/animations/animation';
// import {Transition} from 'ionic-angular/transitions/transition';
// import {globalVariables} from "../../others_servicesAndStatic/globalVariables";
//
//
//
//
// const TRANSLATEY = 'translateY';
// const OFF_BOTTOM = '0px';//بسبب الصفحة تأتي تحت الهيدر
// const CENTER = '0px';
// const SHOW_BACK_BTN_CSS = 'show-back-button';
//
// export class CustomMDTransition  extends Animation {
//
//     constructor(enteringView, leavingView, opts) {
//         opts.duration=SV.AnimationDuration;
//     super(null, opts);
//         // what direction is the transition going
//         var backDirection = (opts.direction === 'back');
//         // do they have navbars?
//         var enteringHasNavbar = enteringView.hasNavbar();
//         var leavingHasNavbar = leavingView && leavingView.hasNavbar();
//         // entering content item moves in bottom to center
//         var enteringPage = new  Animation(enteringView.pageRef());
//         enteringPage.before.addClass('show-page');
//         this.add(enteringPage);
//         if (backDirection) {
//             this.duration(opts.duration || 200).easing('cubic-bezier(0.47,0,0.745,0.715)');
//             enteringPage.fromTo(TRANSLATEY, CENTER, CENTER);
//         }
//         else {
//             this.duration(opts.duration || 280).easing('cubic-bezier(0.36,0.66,0.04,1)');
//             enteringPage
//                 .fromTo(TRANSLATEY, OFF_BOTTOM, CENTER)
//                 .fadeIn();
//         }
//         if (enteringHasNavbar) {
//             var enteringNavBar = new  Animation(enteringView.navbarRef());
//             enteringNavBar.before.addClass('show-navbar');
//             this.add(enteringNavBar);
//             var enteringBackButton = new  Animation(enteringView.backBtnRef());
//             this.add(enteringBackButton);
//             if (enteringView.enableBack()) {
//                 enteringBackButton.before.addClass(SHOW_BACK_BTN_CSS);
//             }
//             else {
//                 enteringBackButton.before.removeClass(SHOW_BACK_BTN_CSS);
//             }
//         }
//         // setup leaving view
//         if (leavingView && backDirection) {
//             // leaving content
//             this.duration(opts.duration || 200).easing('cubic-bezier(0.47,0,0.745,0.715)');
//             var leavingPage = new  Animation(leavingView.pageRef());
//             this.add(leavingPage.fromTo(TRANSLATEY, CENTER, OFF_BOTTOM).fadeOut());
//         }
//     }
//
// }
// Transition.register('CustomMDTransition', CustomMDTransition)
// //Animation.register('CustomMDTransition', CustomMDTransition);