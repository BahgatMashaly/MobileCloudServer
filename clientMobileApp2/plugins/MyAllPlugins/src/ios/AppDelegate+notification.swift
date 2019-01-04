 

import Foundation

extension AppDelegate {
    
    
    
    
    //////////didRegisterUserNotificationSettings may be the user change Notification settings
    @available(iOS 8.0, *)
    func application(_ application: UIApplication, didRegister notificationSettings: UIUserNotificationSettings) {
        
        if notificationSettings.types != UIUserNotificationType() {
            if #available(iOS 8.0, *) {
                application.registerForRemoteNotifications()
            } else {
                // Fallback on earlier versions
            }
        }
    }
    
    
    
    func normalPushRegistration()
    {
        
        if #available(iOS 8.0, *) {
            let settings = UIUserNotificationSettings(types: [UIUserNotificationType.alert, .badge, .sound], categories: nil)
            UIApplication.shared.registerUserNotificationSettings(settings)
            UIApplication.shared.registerForRemoteNotifications()
             
            
        } else {
            let settings = UIRemoteNotificationType.alert.union(UIRemoteNotificationType.badge).union(UIRemoteNotificationType.sound)
            UIApplication.shared.registerForRemoteNotifications(matching: settings)
        }
        
    }
    
    
    
    ////////// receive token
    func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
        
        let tokenChars = (deviceToken as NSData).bytes.bindMemory(to: CChar.self, capacity: deviceToken.count)
        var tokenString = ""
        
        for i in 0..<deviceToken.count {
            tokenString += String(format: "%02.2hhx", arguments: [tokenChars[i]])
        }
        
        print("Device Token:", tokenString)
       
        let pushHander:PushPlugin = self.getCommandInstance("PushNotification") as! PushPlugin
        pushHander.didRegisterForRemoteNotifications(withDeviceToken: deviceToken);
       
    }
    
    //notification Registeration error
    func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
         let pushHander:PushPlugin = self.getCommandInstance("PushNotification") as! PushPlugin
        pushHander.didFailToRegisterForRemoteNotificationsWithError(error);
       // PushPlugin *pushHandler = [self getCommandInstance:@"PushNotification"];
        //[pushHandler didFailToRegisterForRemoteNotificationsWithError:error];

        
        print("Failed to register:", error)
    }
    
    func getCommandInstance(_ plugnName :String )-> AnyObject!
    {
        print(plugnName)
        return self.viewController?.getCommandInstance(plugnName) as AnyObject;
    //return [self.viewController getCommandInstance:className];
    }
    
    func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable: Any], fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
        let request = URLRequest(url: URL(string: "https://192.168.1.219:3000/")!, cachePolicy: NSURLRequest.CachePolicy.reloadIgnoringLocalCacheData, timeoutInterval: 10)
        
        var response : URLResponse?
        
        /////
        //  NSURLConnection.sendSynchronousRequest(request, returningResponse: &response, error: &error)
        
        
        
        let semaphore = DispatchSemaphore(value: 0)
        
        URLSession.shared.dataTask(with: request, completionHandler: { (responseData, response, _) -> Void in
            // response = responseData! //treat optionals properly
            semaphore.signal()
            }) .resume()
        
        semaphore.wait(timeout: DispatchTime.distantFuture)
      

        
        
        
        self.receiveNotification(application,userInfo:userInfo, fetchCompletionHandler: completionHandler)
       
        //////////////////////
        print("didReceiveNotification with fetchCompletionHandler");
       print("Recived: \(userInfo)")
   

    }
    
    
    
 
    var lunchNotification:[AnyHashable: Any] {
        get {
            return objc_getAssociatedObject(self, &AssociatedObjectHandle) as! [AnyHashable: Any]
        }
        set {
            objc_setAssociatedObject(self, &AssociatedObjectHandle, newValue, objc_AssociationPolicy.OBJC_ASSOCIATION_RETAIN_NONATOMIC)
        }
    }
    
    
    func receiveNotification( _ application: UIApplication, userInfo: [AnyHashable: Any], fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void)
    {
       // var arg:Array=["","title","message"];
//        var CDVInvokedUrlCommandxx: CDVInvokedUrlCommand=CDVInvokedUrlCommand(arguments: arg, callbackId: "", className: "", methodName: "")
//        sendNotification(CDVInvokedUrlCommandxx);
        
//        if let info = userInfo["aps"] as? Dictionary<String, AnyObject>
//        {
//            var alertMsg = info["alert"] as? Dictionary<String, AnyObject>
//            SV.Alert_ok(alertMsg!["title"] as! String, alertMsg!["body"] as! String);
//        }
        
        // app is in the foreground so call notification callback
        if (application.applicationState == UIApplicationState.active) {
        print("app active");
    NSLog("hhhhhhhhhhh")
        let pushHandler:PushPlugin = self.getCommandInstance("PushNotification") as! PushPlugin
        pushHandler.notificationMessage = userInfo;
        pushHandler.isInline = true;
        pushHandler.notificationReceived();
        
        completionHandler(.newData);
       }
        // app is in background or in stand by
        else {
        print("app in-active");
        
        // do some convoluted logic to find out if this should be a silent push.
        var silent = 0;
        
            let aps = userInfo["aps"] as! [String: AnyObject]
            
            
            //  let contentAvailable:String = aps!["content-available"] as! String;
            let contentAvailable:String =   (aps["content-available"] as? String)!
            
        if(String(contentAvailable)=="1")
        {
            silent = 1;
        }
            else
        {
            silent = Int(contentAvailable)!;
        }
        
        if (silent == 1) {
            print("this should be a silent push");
            //                void (^safeHandler)(UIBackgroundFetchResult) = ^(UIBackgroundFetchResult result){
            //                    dispatch_async(dispatch_get_main_queue(), ^{
            //                        completionHandler(result);
            //                        });
            //                };
            let safeHandler: (UIBackgroundFetchResult) -> () = { result in
            DispatchQueue.main.async {
            completionHandler(result)
            }
            }
            
            
            var params:Dictionary  = [AnyHashable: Any]()
            params["handler"] = safeHandler as  AnyObject ; //(UIBackgroundFetchResult) -> ()
            
            
            let pushHandler:PushPlugin = self.getCommandInstance("PushNotification") as! PushPlugin
            
            pushHandler.notificationMessage = userInfo;
            pushHandler.isInline = false;
            pushHandler.handlerObj = params as [AnyHashable: Any] as! NSMutableDictionary;
            pushHandler.notificationReceived();
        } else {
            NSLog("just put it in the shade");
            //save it for later
            self.lunchNotification=userInfo;
            
            completionHandler(.newData);
            
        }
        }
        // completionHandler(UIBackgroundFetchResultNewData)
        
    }
    
    
    func sendNotification(_ command:CDVInvokedUrlCommand!)
    {
           let notification = UILocalNotification()
        notification.fireDate = Date(timeIntervalSinceNow: 3)
        notification.applicationIconBadgeNumber = notification.applicationIconBadgeNumber + 1;
        if #available(iOS 8.2, *) {
        notification.alertTitle = command.arguments[1] as! String
        }
        notification.alertBody = command.arguments[2] as! String
        // notification.alertAction = "be awesome!"
        notification.soundName = UILocalNotificationDefaultSoundName
        // notification.userInfo
        //notification.userInfo = ["CustomField1": "w00t"]
        UIApplication.shared.scheduleLocalNotification(notification)
        
    }
    
    ///////// receive notification message
    
    
}
//private var launchNotificationKey:AnyObject;



//
//private struct launchNotificatiox {
//    static var launchNotificationKey = "displayed"
//}

//this lets us check to see if the item is supposed to be displayed or not
//var launchNotificationKey : Bool {
//get {
//    guard let number = objc_getAssociatedObject(self, &launchNotificatiox.launchNotificationKey) as? NSNumber else {
//        return true
//    }
//    return number.boolValue
//}
//
//set(value) {
//    objc_setAssociatedObject(self,&launchNotificatiox.launchNotificationKey,NSNumber(bool: value),objc_AssociationPolicy.OBJC_ASSOCIATION_RETAIN_NONATOMIC)
//}
//}
var AssociatedObjectHandle: UInt8 = 0

