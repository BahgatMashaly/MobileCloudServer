// import {Animation} from 'ionic-angular/animations/animation';
//
// const DURATION = 400;
// const EASING = 'cubic-bezier(0.36,0.66,0.04,1)';
// const OPACITY = 'opacity';
// const TRANSLATEX = 'translateX';
// const OFF_RIGHT = '99.5%';
// const OFF_LEFT = '-33%';
// const CENTER = '0%'
// const OFF_OPACITY = 0.8;
// const SHOW_BACK_BTN_CSS = 'show-back-button';
//
//
// export class IOSRTLTransition extends Animation {
//
//
//     constructor(enteringView, leavingView, opts) {
//         super(null, opts);
//
//         this.duration(DURATION);
//         this.easing(EASING);
//
//         // what direction is the transition going
//         let backDirection = (opts.direction === 'back');
//         let isrtl = (document.dir == "rtl");
//         // do they have navbars?
//         let enteringHasNavbar = enteringView.hasNavbar();
//         let leavingHasNavbar = leavingView && leavingView.hasNavbar();
//
//         let enteringPage = new Animation(enteringView.pageRef());
//         enteringPage.before.addClass('show-page');
//         this.add(enteringPage);
//
//         // entering content
//         let enteringContent = new Animation(enteringView.contentRef());
//         this.add(enteringContent);
//
//         if (!isrtl) {
//             if (backDirection) {
//                 // entering content, back direction
//                 enteringContent
//                     .fromTo(TRANSLATEX, OFF_LEFT, CENTER)
//                     .fromTo(OPACITY, OFF_OPACITY, 1);
//
//             } else {
//                 // entering content, forward direction
//                 enteringContent
//                     .fromTo(TRANSLATEX, OFF_RIGHT, CENTER)
//                     .fromTo(OPACITY, 1, 1);
//             }
//         }
//         else {
//             if (backDirection) {
//                 // entering content, forward direction
//                 enteringContent
//                     .fromTo(TRANSLATEX, OFF_RIGHT, '0%')
//                     .fromTo(OPACITY, 1, 1);
//             }
//             else {
//                 // entering content, back direction
//                 enteringContent
//                     .fromTo(TRANSLATEX, OFF_LEFT, CENTER)
//                     .fromTo(OPACITY, OFF_OPACITY, 1);
//             }
//         }
//
//         if (enteringHasNavbar) {
//             // entering page has a navbar
//             let enteringNavBar = new Animation(enteringView.navbarRef());
//             enteringNavBar.before.addClass('show-navbar');
//             this.add(enteringNavBar);
//
//             let enteringTitle = new Animation(enteringView.titleRef());
//             let enteringNavbarItems = new Animation(enteringView.navbarItemRefs());
//             let enteringNavbarBg = new Animation(enteringView.navbarBgRef());
//             let enteringBackButton = new Animation(enteringView.backBtnRef());
//             enteringNavBar
//                 .add(enteringTitle)
//                 .add(enteringNavbarItems)
//                 .add(enteringNavbarBg)
//                 .add(enteringBackButton);
//
//             enteringTitle.fadeIn();
//             enteringNavbarItems.fadeIn();
//
//             if (!isrtl) {
//                 // set properties depending on direction
//                 if (backDirection) {
//                     // entering navbar, back direction
//                     enteringTitle.fromTo(TRANSLATEX, OFF_LEFT, CENTER);
//
//                     if (enteringView.enableBack()) {
//                         // back direction, entering page has a back button
//                         enteringBackButton
//                             .before.addClass(SHOW_BACK_BTN_CSS)
//                             .fadeIn();
//                     }
//
//                 }
//                 else {
//                     // entering navbar, forward direction
//                     enteringTitle.fromTo(TRANSLATEX, OFF_RIGHT, CENTER);
//
//                     if (leavingHasNavbar) {
//                         // entering navbar, forward direction, and there's a leaving navbar
//                         // should just fade in, no sliding
//                         enteringNavbarBg
//                             .fromTo(TRANSLATEX, CENTER, CENTER)
//                             .fadeIn();
//
//                     } else {
//                         // entering navbar, forward direction, and there's no leaving navbar
//                         // should just slide in, no fading in
//                         enteringNavbarBg
//                             .fromTo(TRANSLATEX, OFF_RIGHT, CENTER)
//                             .fromTo(OPACITY, 1, 1);
//                     }
//
//
//                     if (enteringView.enableBack()) {
//                         // forward direction, entering page has a back button
//                         enteringBackButton
//                             .before.addClass(SHOW_BACK_BTN_CSS)
//                             .fadeIn();
//
//                         let enteringBackBtnText = new Animation(enteringView.backBtnTextRef());
//                         enteringBackBtnText.fromTo(TRANSLATEX, '100px', '0px');
//                         enteringNavBar.add(enteringBackBtnText);
//
//                     } else {
//                         enteringBackButton.before.removeClass(SHOW_BACK_BTN_CSS);
//                     }
//                 }
//             }
//
//             else {
//                 if (backDirection) {
//                     // entering navbar, forward direction
//
//                     enteringTitle.fromTo(TRANSLATEX, OFF_RIGHT, CENTER);
//
//
//                     if (enteringView.enableBack()) {
//                         // back direction, entering page has a back button
//                         enteringBackButton
//                             .before.addClass(SHOW_BACK_BTN_CSS)
//                             .fadeIn();
//                     }
//
//                 }
//                 else {
//                     // entering navbar, back direction
//                     enteringTitle.fromTo(TRANSLATEX, OFF_LEFT, CENTER);
//
//                     if (leavingHasNavbar) {
//                         // entering navbar, forward direction, and there's a leaving navbar
//                         // should just fade in, no sliding
//                         enteringNavbarBg
//                             .fromTo(TRANSLATEX, CENTER, CENTER)
//                             .fadeIn();
//
//                     } else {
//                         // entering navbar, forward direction, and there's no leaving navbar
//                         // should just slide in, no fading in
//                         enteringNavbarBg
//                             .fromTo(TRANSLATEX, OFF_LEFT, CENTER)
//                             .fromTo(OPACITY, 1, 1);
//                     }
//
//
//                     if (enteringView.enableBack()) {
//                         // forward direction, entering page has a back button
//                         enteringBackButton
//                             .before.addClass(SHOW_BACK_BTN_CSS)
//                             .fadeIn();
//
//                         let enteringBackBtnText = new Animation(enteringView.backBtnTextRef());
//                         enteringBackBtnText.fromTo(TRANSLATEX, '-100px', '0px');
//                         enteringNavBar.add(enteringBackBtnText);
//
//                     } else {
//                         enteringBackButton.before.removeClass(SHOW_BACK_BTN_CSS);
//                     }
//                 }
//             }
//
//
//         }
//
//         // setup leaving view
//         if (leavingView) {
//             // leaving content
//             let leavingContent = new Animation(leavingView.contentRef());
//             this.add(leavingContent);
//             if (!isrtl) {
//                 if (backDirection) {
//                     // leaving content, back direction
//                     leavingContent
//                         .fromTo(TRANSLATEX, CENTER, '100%')
//                         .fromTo(OPACITY, 1, 1);
//
//                 } else {
//                     // leaving content, forward direction
//                     leavingContent
//                         .fromTo(TRANSLATEX, CENTER, OFF_LEFT)
//                         .fromTo(OPACITY, 1, OFF_OPACITY);
//                 }
//             }
//             else {
//                 if (backDirection) {
//                     // leaving content, back direction
//                     leavingContent
//                         .fromTo(TRANSLATEX, '0%','-100%')
//                         .fromTo(OPACITY, 1, 1);
//
//
//                 } else {
//                     // leaving content, forward direction
//                     leavingContent
//                         .fromTo(TRANSLATEX, CENTER, '100%')
//                         .fromTo(OPACITY, 1, OFF_OPACITY);
//                 }
//             }
//
//
//             if (leavingHasNavbar) {
//                 // leaving page has a navbar
//                 let leavingNavBar = new Animation(leavingView.navbarRef());
//                 let leavingBackButton = new Animation(leavingView.backBtnRef());
//                 let leavingTitle = new Animation(leavingView.titleRef());
//                 let leavingNavbarItems = new Animation(leavingView.navbarItemRefs());
//                 let leavingNavbarBg = new Animation(leavingView.navbarBgRef());
//
//                 leavingNavBar
//                     .add(leavingBackButton)
//                     .add(leavingTitle)
//                     .add(leavingNavbarItems)
//                     .add(leavingNavbarBg);
//                 this.add(leavingNavBar);
//
//                 // fade out leaving navbar items
//                 leavingBackButton.fadeOut();
//                 leavingTitle.fadeOut();
//                 leavingNavbarItems.fadeOut();
//                 if (!isrtl) {
//                     if (backDirection) {
//                         // leaving navbar, back direction
//                         leavingTitle.fromTo(TRANSLATEX, CENTER, '100%');
//
//                         if (enteringHasNavbar) {
//                             // leaving navbar, back direction, and there's an entering navbar
//                             // should just fade out, no sliding
//                             leavingNavbarBg
//                                 .fromTo(TRANSLATEX, CENTER, CENTER)
//                                 .fadeOut();
//
//                         } else {
//                             // leaving navbar, back direction, and there's no entering navbar
//                             // should just slide out, no fading out
//                             leavingNavbarBg
//                                 .fromTo(TRANSLATEX, CENTER, '100%')
//                                 .fromTo(OPACITY, 1, 1);
//                         }
//
//                         let leavingBackBtnText = new Animation(leavingView.backBtnTextRef());
//                         leavingBackBtnText.fromTo(TRANSLATEX, CENTER, (300) + 'px');
//                         leavingNavBar.add(leavingBackBtnText);
//
//                     }
//
//                     else {
//                         // leaving navbar, forward direction
//                         leavingTitle.fromTo(TRANSLATEX, CENTER, OFF_LEFT);
//                     }
//                 }
//                 else {
//                     if (backDirection) {
//                         // leaving navbar, back direction
//                         leavingTitle.fromTo(TRANSLATEX, '0%', '-50%');
//
//                         if (enteringHasNavbar) {
//                             // leaving navbar, back direction, and there's an entering navbar
//                             // should just fade out, no sliding
//                             leavingNavbarBg
//                                 .fromTo(TRANSLATEX, CENTER, CENTER)
//                                 .fadeOut();
//
//                         } else {
//                             // leaving navbar, back direction, and there's no entering navbar
//                             // should just slide out, no fading out
//                             leavingNavbarBg
//                                 .fromTo(TRANSLATEX, CENTER, '0%')
//                                 .fromTo(OPACITY, 1, 1);
//                         }
//
//                         let leavingBackBtnText = new Animation(leavingView.backBtnTextRef());
//                         leavingBackBtnText.fromTo(TRANSLATEX, CENTER, (300) + 'px');
//                         leavingNavBar.add(leavingBackBtnText);
//
//                     }
//
//                     else {
//                         // leaving navbar, forward direction
//                         leavingTitle.fromTo(TRANSLATEX, CENTER, OFF_RIGHT);
//                     }
//                 }
//
//
//             }
//
//         }
//     }
//
// }
//
// Animation.register('ios-rtl-transition', IOSRTLTransition);