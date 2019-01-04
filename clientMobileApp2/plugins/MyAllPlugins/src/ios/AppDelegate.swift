//
//  AppDelegate.swift
//  TheBackgrounder
//
//  Created by Ray Fix on 12/9/14.
//  Copyright (c) 2014 Razeware, LLC. All rights reserved.
//

import UIKit
import WebKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
  
  var window: UIWindow?
 var voipTCPService:VoipTCPService=VoipTCPService();
    
    var viewController:CDVViewController?;
    
    override init() {
        var cookieStorage = HTTPCookieStorage.shared;
        
        //cookieStorage.setCookieAcceptPolicy(NSHTTPCookieAcceptPolicy.Always);
        
        var cacheMemorySize = 8 * 1024 * 1024;
        var cacheDiskSize = 32 * 1024 * 1024;
        
        var sharedCache = URLCache(memoryCapacity: cacheMemorySize, diskCapacity: cacheDiskSize, diskPath: "nsurlcache");
        
        //URLCache.setSharedURLCache(sharedCache);
            URLCache.shared = sharedCache
        
        super.init();
        
    }

  
  
  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
    
    
    let state = UIApplication.shared.applicationState
    if state == .background {
        print("App in Background")
    }
    else
    {
        let tcpService:VoipTCPService = VoipTCPService()
        
        queue.async {
         //   tcpService.initx()
             tcpService.start_liten();
           
        }
          print("App is active")
    }
    
    
  
    
    //  NSThread.sleepForTimeInterval(20)
//    print(launchOptions)
//     print("sdsds")
//    NSLog("%S", "ssssssssss")
//    // Handle notification
//    
//    if let options = launchOptions {
//        if let notification = options[UIApplicationLaunchOptionsLocalNotificationKey] as? UILocalNotification {
//            if let userInfo = notification.userInfo {
//                let customField1 = userInfo["CustomField1"] as! String
//                // do something neat here
//            }
//        }
//    }
//    
//    
//    if (launchOptions != nil) {
//        print(launchOptions)
//        // For local Notification
//        if let localNotificationInfo = launchOptions?[UIApplicationLaunchOptionsLocalNotificationKey] as? UILocalNotification {
//             print(localNotificationInfo)
//           // if let something = localNotificationInfo.userInfo!["aps"] as? String {
//                
//               // self.window!.rootViewController = UINavigationController(rootViewController: YourController(yourMember: something))
//            //}
//            
//            
//        } else
//            
//            // For remote Notification
//            if let remoteNotification = launchOptions?[UIApplicationLaunchOptionsRemoteNotificationKey] as! [NSObject : AnyObject]? {
//                
//                if let something = remoteNotification["aps"] as? String {
//                    print(something)
//                }
//        }
//        
//    }
//    
//    
//    if let launchOptions = launchOptions {
//        if let payload = launchOptions[UIApplicationLaunchOptionsRemoteNotificationKey] {
//            
//            let data = payload.dictionaryPayload
//          //  print( data)
//          //  print( data["aps"])
//            
//            
//            
//           // let alertDict = data["aps"]?["alert"] as? Dictionary<String, String>
//           // print("title : ", alertDict!["title"])
//            //print("body :", alertDict!["body"])
//            }
//        }
  
    
    
    
    
    self.window = UIWindow(frame: UIScreen.main.bounds);
    self.viewController = CDVViewController();
    
    self.window?.rootViewController = viewController;
    
    self.window?.makeKeyAndVisible();
    
  //  return true
    
        
        
    //الجزء المتعلق بالـ push notification
    
    // self.normalPushRegistration(); ليس لها داعي لانها سوف تتم من خلال البلجن
    
   //self.voipRegistration("") ليس لها داعي لانه سوف يتم طلبها من خلال البلجن بتاعتي من خلال الجافا سكريبت
    
    
    
//    let notificationTypes: UIUserNotificationType = [UIUserNotificationType.Alert, UIUserNotificationType.Badge, UIUserNotificationType.Sound]
//    let pushNotificationSettings = UIUserNotificationSettings(forTypes: notificationTypes, categories: nil)
//    application.registerUserNotificationSettings(pushNotificationSettings)
//    application.registerForRemoteNotifications()
    
    /////////////////////////////
    //الجزء المتعلق بالتحميل
    UIApplication.shared.setMinimumBackgroundFetchInterval(UIApplicationBackgroundFetchIntervalMinimum)
    
    return true
     
  }
    
  
   
    
 
    
    
    
    
    
    
    
    
    
    ////////////////////////////////////////////////////////////////////////

    
    
    func application(_ application: UIApplication, handleOpen url: URL) -> Bool {
        var jsString = "handleOpenURL(\"\(url)\");";
        if #available(iOS 8.0, *) {
            if let uiWebView = self.viewController?.webView as? UIWebView {
                uiWebView.stringByEvaluatingJavaScript(from: jsString)
            } else if let wkWebView = self.viewController?.webView as? WKWebView {
                wkWebView.evaluateJavaScript(jsString, completionHandler: nil)
            }
        } else {
            if let uiWebView = self.viewController?.webView as? UIWebView {
                uiWebView.stringByEvaluatingJavaScript(from: jsString)
            }
        }
        // self.viewController?.webView.stringByEvaluatingJavaScript(jsString);
        
        var notification = Notification(name: NSNotification.Name.CDVPluginHandleOpenURL, object: url);
        NotificationCenter.default.post(notification);
        
        return true;
    }
    
    
    func applicationDidReceiveMemoryWarning(_ application: UIApplication) {
        URLCache.shared.removeAllCachedResponses();
    }
  
  func applicationWillResignActive(_ application: UIApplication) {
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game.
  }
  
  func applicationDidEnterBackground(_ application: UIApplication) {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
  }
  
  func applicationWillEnterForeground(_ application: UIApplication) {
    // Called as part of the transition from the background to the inactive state; here you can undo many of the changes made on entering the background.
  }
  
  func applicationDidBecomeActive(_ application: UIApplication) {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
  }
  
  func applicationWillTerminate(_ application: UIApplication) {
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
  }
    
   
    
   
    
   
    
    
//    func application(app: UIApplication, openURL url: NSURL, options: [String : AnyObject]) -> Bool
//    {
//        print("xxxxxxxxxxxxxxxx")
//        
//        let urlString = "\(url)"
//        
//        if urlString == "TheBackgrounder://sss"
//        {
//            let storyboard = UIStoryboard(name: "Main", bundle: nil)
//            let navVC = storyboard.instantiateViewControllerWithIdentifier("Location")
//            
//            self.window?.rootViewController?.presentViewController(navVC, animated: true, completion: nil)
//            
//        }
//        return true
//    }
//    
//    
//    func application(application: UIApplication, openURL url: NSURL,
//        sourceApplication: String?, annotation: AnyObject)-> Bool {
//            return true
//    }
    
 
   
    
    
}


extension URLRequest {
    static func allowsAnyHTTPSCertificateForHost(_ host: String) -> Bool {
        return true
    }
}
