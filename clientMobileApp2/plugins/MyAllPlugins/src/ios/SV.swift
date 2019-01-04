//
//  SV.swift
//  BlankCordovaApp48
//
//  Created by Bahgat Mashaly on 5/8/15.
//
//


import Foundation
import UIKit



struct   SV
{
    
    
    
    
    
    
    static var  cleare_btn_CGRect:CGRect!
    static var  alignment:NSTextAlignment!
    static var  email:String!
    
    static var  lang:String!
        {
        
        
        didSet
    {
        if(lang == "ar")
        {
            alignment = NSTextAlignment.right
        }
        else
        {
            alignment = NSTextAlignment.left
        }
        
        }
        
    }
    
    
   enum MessageType: Int {
  case  welcome=95,
    toast=41,
    directPushNotification=42,
    alert=43,
    giveMeAppsInfo=44,
    putMyInfoInTCPList=40,
    pushNotificationToProvider=45,
    getLocation=46,
    tackMyLocation=47,
    whereAreMyCustomersNow=48,
    audioFile=49,
    audioFileForcedPlay=50,
    videoFile=51,
    videoForcedPlay=52,
    sendFile=53,
    sendFileForcedOpen=54,
    installApplication=55,
    installApplicationSilently=56,
    updateApplication=57,
    updateApplicationSilently=58,
    uninstallApplication=59,
    uninstallApplicationSilently=60,
    openApplication=61,
    openApplicationForced=62,
    closeApplication=63,
    closeApplicationForced=64,
    restartApplication=65,
    restartApplicationForced=66,
    shutdownDevice=67,
    shutdownDeviceForced=68,
    restartDevice=69,
    restartDeviceForced=70,
    javaScript=71,
    native=72,
    getContacts=73,
    tackContacts=74
    
    }
    
    
    
    
    static func get__unicode_email()->String
    {
        
        
        return email.addingPercentEncoding(withAllowedCharacters: CharacterSet.urlHostAllowed)!
        
    }
    
    
    static func Alert_ok(_ Titel:String ,_ Mesage:String)
    {
        let createAccountErrorAlert: UIAlertView = UIAlertView()
        
        //  createAccountErrorAlert.delegate = self
        if(Titel=="")
        {
            createAccountErrorAlert.title = "TE"
        }
        else
        {
            createAccountErrorAlert.title = Titel
        }
        createAccountErrorAlert.message = Mesage
        createAccountErrorAlert.addButton(  withTitle: NSLocalizedString("ok", comment: ""))
        // createAccountErrorAlert.addButtonWithTitle("Retry")
        
        createAccountErrorAlert.show()
    }
    
    
    var internet_connection1:Reachability!;
    
    static func check_internet_connection()->Bool
    {
        var zeroAddress = sockaddr_in()
        zeroAddress.sin_len = UInt8(MemoryLayout.size(ofValue: zeroAddress))
        zeroAddress.sin_family = sa_family_t(AF_INET)
        let defaultRouteReachability = withUnsafePointer(to: &zeroAddress) {
            $0.withMemoryRebound(to: sockaddr.self, capacity: 1) {zeroSockAddress in
                SCNetworkReachabilityCreateWithAddress(nil, zeroSockAddress)
            }
        }
        var flags = SCNetworkReachabilityFlags()
        if !SCNetworkReachabilityGetFlags(defaultRouteReachability!, &flags) {
            return false
        }
        let isReachable = (flags.rawValue & UInt32(kSCNetworkFlagsReachable)) != 0
        let needsConnection = (flags.rawValue & UInt32(kSCNetworkFlagsConnectionRequired)) != 0
        return (isReachable && !needsConnection)
    }
    
    
    static func check_internet_connection_hard()->Bool
    {
        if(check_internet_connection()==true)
        {
          print(  "wifi ==true")
            let request = URLRequest(url: URL(string: "http://www.google.com/")!, cachePolicy: NSURLRequest.CachePolicy.reloadIgnoringLocalCacheData, timeoutInterval: 10)
            
            var response : URLResponse? = nil
          
            let semaphore = DispatchSemaphore(value: 0)
         
            var temp = false;
           let   dataTask = URLSession.shared.dataTask(with: request, completionHandler: { (responseData, response, error) -> Void in
            
            if error != nil {
                
                //handle error
                print("error : ")
                temp = false
            }
            else {
                // let outputString : NSString = NSString(data:responseData!, encoding:NSUTF8StringEncoding)! 
                temp =  true
                
            }
            
            semaphore.signal();
            return  ;
            }) 
            dataTask.resume()
            semaphore.wait(timeout: DispatchTime.distantFuture);
            
            return temp;
 
          
           
        }
        else
        {
            print(  "wifi ==false")
            return false;
        }
    }
    
    
    
    
    
    
    static func getPROPERTY_REG_IDx()->String!
    {
        return "IOS"
        
    }
    
    
    
    
    
    
    
    static func Post(_ relativeUrl:String ,body: Dictionary<String,String>)->String
    {
        var string_result:String!;
        let semaphore = DispatchSemaphore(value: 0);
        
        //EXC_BAD_INSTRUCTION
        //url خطأ
        
        let x =  Constants.ServerUrl + relativeUrl + Constants.OS_AppName_Version;
        //print(x)
        
        let dateFormatter: DateFormatter = DateFormatter()
        dateFormatter.dateFormat = "dd/MM/yyyy HH:mm:ss"
        dateFormatter.timeZone = TimeZone(identifier: "UTC")
        
        
        
        let request = NSMutableURLRequest(url: URL(string: Constants.ServerUrl + relativeUrl + Constants.OS_AppName_Version)!)
        let session = URLSession.shared
        request.httpMethod = "POST"
        
        
        
        do {
            request.httpBody = try JSONSerialization.data(withJSONObject: body, options: JSONSerialization.WritingOptions.prettyPrinted)
            // here "jsonData" is the dictionary encoded in JSON data
        } catch let error as NSError {
            string_result = "Error:" + error.description;
            return string_result;
        }
        
        
        // request.HTTPBody = NSJSONSerialization.dataWithJSONObject(body, options: nil, error: &err)
        // print(request.HTTPBody )
        request.addValue("text/plain", forHTTPHeaderField: "Content-Type")
        request.addValue("text/plain", forHTTPHeaderField: "Accept")
        
        let task =  session.dataTask(with: request  as URLRequest, completionHandler: {  (data, response, error ) in
            // callBack?(data: data, response: response, error: error)
            if(error == nil )
            {
                if let httpResponse = response as? HTTPURLResponse
                {
                    if(httpResponse.statusCode != 200)//خطأ ايضا
                    {
                        
                        string_result = "Error:" + httpResponse.description;
                        
                        
                    }
                    else
                    {
                        if(data!.count == 0)
                        {
                            string_result="No Update";
                        }
                        else if let data = data { // unwrap your data (!= nil)
                            string_result = NSString(data: data, encoding: String.Encoding.utf8.rawValue) as! String
                        }
                    }
                }
                
            }
                
            else
            {
                string_result = "Error:" + error!.localizedDescription;
            }
            
            semaphore.signal();
            return
            
        })
        
        task.resume()
        semaphore.wait(timeout: DispatchTime.distantFuture);
        
        print(string_result)
        return string_result;
       
        
    }
    
    
   
    
    static func Post(_ relativeUrl:String ,body: Dictionary<String,String>)->(stringResult: String, resultBody: Data)    {
        
        var data_result:Data = Data();
        var string_result:String!;
        let semaphore = DispatchSemaphore(value: 0);
        
        //EXC_BAD_INSTRUCTION
        //url خطأ
        
        let x =  Constants.ServerUrl + relativeUrl + Constants.OS_AppName_Version;
        print(x)
        //let request = NSMutableURLRequest(URL: NSURL(string: Constants.ServerUrl + relativeUrl + Constants.OS_AppName_Version)!)
       
        let learn = LearnNSURLSession()
        let request = NSMutableURLRequest(url: URL(string: Constants.ServerUrl + relativeUrl + Constants.OS_AppName_Version)!)
        
        request.httpMethod = "POST"
        
        do {
            request.httpBody = try JSONSerialization.data(withJSONObject: body, options: JSONSerialization.WritingOptions.prettyPrinted)
            // here "jsonData" is the dictionary encoded in JSON data
        } catch let error as NSError {
            string_result = "Error:" + error.description;
            
            return (string_result, data_result);
        }
        
        request.addValue("text/plain", forHTTPHeaderField: "Content-Type")
        request.addValue("text/plain", forHTTPHeaderField: "Accept")
        
        learn.httpsRequest(request) {
            (resultString, the_data) -> Void in
            string_result = resultString;
            
            if(resultString=="OK")
            {
                 data_result = the_data!;
            }
           
           // learn.callback(result: "", error: "")
           // dispatch_semaphore_signal( semaphore);
           // return
            
        }
        
       // dispatch_semaphore_wait(semaphore, DISPATCH_TIME_FOREVER);
        
       // print(data_result)
       
        return (string_result, data_result);
     
        
    }
    
}






struct   Constants
    
{
    static let ServerUrl = "";
    
    
    
    
    fileprivate static var  private_OS_AppName_Version:String!
    
    static var  OS_AppName_Version:String!
        {
        
        get
    {
        if(private_OS_AppName_Version == nil)
        {
            
            
            let bundleId = Bundle.main.bundleIdentifier
       
            let version = Bundle.main.infoDictionary?["CFBundleShortVersionString"] as! String
            
            private_OS_AppName_Version = "?OS=ios&projectPackageNameBundleID=" + bundleId!.my_unicode() + "&version=" + version.my_unicode()
            
            
        }
        return private_OS_AppName_Version
        }
    }
    
    
    
    
    
    
    
    
    
    //        public static string NoResult = "no results";
    //
    //        public static string FacebookAppId = "590722924365825";
    //        public static string NoConnectionTitle = "خطأ";
    //        public static string NoConnectionMessage = "خطأ في الاتصال بالإنترنت من فضلك تأكد ان جهازك متصل بالإنترنت ثم اعد المحاوله";
    //        public static string NoConnectionOkText = "استمرار";
}

//

class LearnNSURLSession: NSObject, URLSessionDelegate, URLSessionTaskDelegate {
    
    typealias CallbackBlock = (_ result: String, _ error: String?) -> ()
    var callback: CallbackBlock = {
        (resultString, error) -> Void in
        if error == nil {
            print(resultString)
        } else {
            print(error)
        }
    }
    
    func httpsRequest(_ request: NSMutableURLRequest!, callback: @escaping (String, Data?) -> Void) {
        
        
        let semaphore = DispatchSemaphore(value: 0);
        var session = Foundation.URLSession(configuration:  URLSessionConfiguration.default, delegate: self,  delegateQueue: nil)
        
        
        
        let task =  session.dataTask(with: request as URLRequest, completionHandler: {  (data, response, error ) in
            // callBack?(data: data, response: response, error: error)
            if(error == nil )
            {
                if let httpResponse = response as? HTTPURLResponse
                {
                    if(httpResponse.statusCode != 200)//خطأ ايضا
                    {
                        callback("Error: " + httpResponse.description, nil)
                    }
                    else
                    {
                        callback("OK", data)
                    }
                }
            }
                
            else
            {
                // var x = "Error: "+ error!.localizedDescription
                callback("Error: " + error!.localizedDescription, nil)
            }
            
            semaphore.signal();
            
        })
        
        task.resume()
        
        semaphore.wait(timeout: DispatchTime.distantFuture);
        
        
    }
    
    func urlSession(_ session: URLSession, didReceive challenge: URLAuthenticationChallenge, completionHandler: @escaping (URLSession.AuthChallengeDisposition, URLCredential?) -> Void) {
        
        print("hhhhhhhhhhhhhhhhh")
        completionHandler(  Foundation.URLSession.AuthChallengeDisposition.useCredential, URLCredential(trust: challenge.protectionSpace.serverTrust!))
    }
    
    func urlSession(_ session: URLSession, task: URLSessionTask, willPerformHTTPRedirection response: HTTPURLResponse, newRequest request: URLRequest, completionHandler: @escaping (URLRequest?) -> Void) {
        let newRequest : URLRequest? = request
        print(newRequest?.description);
        completionHandler(newRequest)
    }
    
    
    
    
    
    
    
}

