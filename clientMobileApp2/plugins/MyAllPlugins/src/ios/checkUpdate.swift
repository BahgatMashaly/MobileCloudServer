
import Foundation



class checkUpdate
{
    
    var delegateForPlugins:protocal_for_plugins!;
    var callBackIdx:String!;
    
    var  wwwPathAfterUpdate:String!
        {

            let app_support = NSSearchPathForDirectoriesInDomains(.applicationSupportDirectory, .userDomainMask, true)[0] as String
 ///var/mobile/Containers/Data/Application/332B55B0-5019-4EDD-97FF-88263AD6844E/Library/Application Support
     return   URL(fileURLWithPath: app_support.stringByAppendingPathComponent("www/")).absoluteString
    }

    var  wwwPathBeforeUpdate:String!
        {
            //file:///private/var/mobile/Containers/Bundle/Application/A4B80750-6323-48E9-862A-43B3F4EF6C0E/V2Test.app/www/
            return  URL(fileURLWithPath: Bundle.main.resourcePath!.stringByAppendingPathComponent("www/")).absoluteString

    }

    var   tempUpdateFileName:String = "tempUpdate.zip";




    init()
    {

    }


    func   checkUpdateFromServer(_ callackID:String,args:NSArray)
    {
        callBackIdx=callackID;
        var    iSInternetAvilable =   SV.check_internet_connection_hard();

        print("iSInternetAvilable_hard :" , iSInternetAvilable)
        let isExternalFolder = CheckIfExtractFolder();
        print("isExternalFolder :" , isExternalFolder)
      //  iSInternetAvilable = true;

        if (iSInternetAvilable == false && isExternalFolder == false)
        {

            // progressDialogx.dismiss();

            delegateForPlugins.call_back(callBackIdx, message:"1,"+wwwPathBeforeUpdate+",No internet connection, no external folder so load www from assets then hide splash screen"); // Thread-safe.
            return;
        }

        else if (iSInternetAvilable == false && isExternalFolder == true)
        {
            // progressDialogx.dismiss();
            delegateForPlugins.call_back(callBackIdx, message: "2," + wwwPathAfterUpdate + ",No internet connection, with external folder so change www path then hide splash screen"); // Thread-safe.

            return;
        }


        else if (isExternalFolder == false )
        {
            //            long  freeSize=getFreeSize();
            //            long assetsSize=getAssetsSize();

            // changeProgressText("Please Wait... \r\n extract assets");


            if (extractAssets("www",delete_exist: true) != "OK")
            {
                //try again
                deleteFolder((NSSearchPathForDirectoriesInDomains(.applicationSupportDirectory, .userDomainMask, true)[0]).stringByAppendingPathComponent("www/") as String)

                let result = extractAssets("www",delete_exist: true);
                if (result != "OK")
                {
                    delegateForPlugins.call_back(callBackIdx, message:"1,"+wwwPathBeforeUpdate+",internet connection is avilable , no external folder but problem with extract assets so load www from assets then hide splash screen error message =: " + result);

                    return;
                }


            }



        }


        //crc32(<#T##crc: uLong##uLong#>, <#T##buf: UnsafePointer<Bytef>##UnsafePointer<Bytef>#>, <#T##len: uInt##uInt#>)
        let fileList =  getListFiles();

          //print(args[1])

        let result:(stringResult:String,resultBody:Data) =  SV.Post(args[1] as! String ,body:fileList)
        //  print(result.stringResult)
        if(result.stringResult != "OK")
        {
            print(result.stringResult)

            delegateForPlugins.call_back(callBackIdx, message: "2," + wwwPathAfterUpdate + ",internet connection is avilable , with external folder but problem with server connection  so load www from  external folder then hide splash screen error message =: " + result.stringResult);
            return;
        }
        if(result.resultBody.count == 0 )
        {
            delegateForPlugins.call_back(callBackIdx, message: "2," + wwwPathAfterUpdate + ",internet connection is avilable , with external folder no update , so load www from external folder then hide splash screen");
            return;
        }
        //print(result.resultBody)
        var firstbtes = [UInt8](repeating: 0x0, count: 60)
        (result.resultBody as NSData).getBytes(&firstbtes, length: 60)

        // var string_resultx = NSString(bytes: &firstbtes , encoding: NSUTF8StringEncoding) as String
        // var string_resultxx =  NSString(bytes: &firstbtes, length: 60, encoding: NSUTF8StringEncoding)       // if(string_resultx.
        //   let a = NSString(&firstbtes, ,encoding:NSUTF8StringEncoding)
        let serverError = NSString(bytes: &firstbtes, length: 60, encoding: String.Encoding.utf8.rawValue)
        //   string_result = NSString(data: result.resultBody, encoding: NSUTF8StringEncoding) as String

        if( serverError?.hasPrefix("Error") == true)
        {
            delegateForPlugins.call_back(callBackIdx, message: "2," + wwwPathAfterUpdate + ",internet connection is avilable , with external folder but problem with server hasPrefix Error  so load www from  external folder then hide splash screen error message =: " + (serverError as! String));
            return;


        }

        let path = NSSearchPathForDirectoriesInDomains(.applicationSupportDirectory, .userDomainMask, true)[0] as String
        // print(path);



        //        result.resultBody.writeToFile(path + "/temp.zip", options: NSDataWritingOptions.DataWritingAtomic, error: &error)
        //        if let error = error {
        //            println(error.description)
        //        }
        //  - (nullable instancetype)initWithData:(NSData*)data options:(nullable NSDictionary*)options error:(out NSError**)error;
        var   archive:ZZArchive;
        do{

            archive = try ZZArchive(data:result.resultBody,options:[ZZOpenOptionsCreateIfMissingKey: true])
        } catch let error as NSError {
            delegateForPlugins.call_back(callBackIdx, message: "2," + wwwPathAfterUpdate + ",internet connection is avilable , with external folder but problem with unzip data , so load www from external folder then hide splash screen error message =: " + error.description);
            return;
        }

        //  let archive = ZZArchive(data: result.resultBody,options:[ZZOpenOptionsCreateIfMissingKey: true], error: &error)
        //        if let error = error {
        //
        //            delegateForPlugins.call_back(callBackIdx, message: "2," + wwwPathAfterUpdate + ",internet connection is avilable , with external folder but problem with unzip data , so load www from external folder then hide splash screen error message =: " + error.description);
        //            return;
        //        }

        do
        {

            for i in 0..<archive.entries.count
            {
                let xx =  try archive.entries[i] 

                let file = try xx.newData() ;
                try file.write(to: URL(fileURLWithPath: path + "//" + archive.entries[i].fileName),  options: NSData.WritingOptions.atomic)


            }
        }
        catch let error as NSError {
            delegateForPlugins.call_back(callBackIdx, message: "2," + wwwPathAfterUpdate + ",internet connection is avilable , with external folder but problem with  write unzip data to file , so load www from external folder then hide splash screen error message =: " + error.description);

        }

        delegateForPlugins.call_back(callBackIdx, message: "2," + wwwPathAfterUpdate + ",internet connection is avilable , with external folder no error  so change www path then hide splash screen ");
        //progressDialogx.dismiss();
        // callbackContext.success("2,file://"+temp_activity.getFilesDir().getAbsolutePath()+"/www/,internet connection is avilable , with external folder no error  so change www path then hide splash screen "); // Thread-safe.

    }






    func getListFiles()->Dictionary<String,String>
    {
        var dic: Dictionary<String, String> =  Dictionary<String, String>();

        let app_support = NSSearchPathForDirectoriesInDomains(.applicationSupportDirectory, .userDomainMask, true)[0] as String

        //  return   NSURL(fileURLWithPath: app_support.stringByAppendingPathComponent("www/")).absoluteString
        
        let filemanager:FileManager = FileManager()
        let files = filemanager.enumerator(atPath: app_support.stringByAppendingPathComponent("www/"))
        // == var isDirectory = ObjCBool(false)
        
        while let file: AnyObject = files?.nextObject() as AnyObject
        {
            
            var isDir = false as ObjCBool
            
            let file_full_path =   app_support.stringByAppendingPathComponent("www/" + (file as! String)) as String
            //  print(file_full_path);
            
            
            if (FileManager.default.fileExists(atPath: file_full_path, isDirectory: &isDir))
            {
                
                if(isDir.boolValue == false)
                {
                    
                    do
                    {
                        
                        let datax = try? Data(contentsOf: URL(fileURLWithPath: file_full_path))
                        let ptr = (datax! as NSData).bytes.bindMemory(to: UInt8.self, capacity: datax!.count)
                        // let bytesx = UnsafeBufferPointer<UInt8>(start:ptr, count:datax!.length)
                        // let checksum = crc32(0, ptr, UInt32(datax!.length)  );
                        // let checksum = adler32(0, ptr, UInt32(datax!.length)  );
                        
//                        
//                        
//                        let str="hi"
//                        let bufx = str.dataUsingEncoding(NSUTF8StringEncoding)
//                        let ptrx = UnsafePointer<UInt8>(bufx!.bytes)
//                        let x =   XXH32(ptrx, bufx!.length, 123)
//                        print (x)
//                        
//                        
                        
                        let checksum =   XXH32(ptr, datax!.count, 123)
                        
                        
//                        let currentDate:NSDate = NSDate()
//                        print (currentDate,checksum,file_full_path)
                        
                        dic["/www/" + (file as! String)]=String(checksum)
                        
                    } catch let error as NSError {
                        print(  error.description)
                        //return nil;
                    }
                    
                    //let attr: NSDictionary = NSFileManager.defaultManager().attributesOfItemAtPath(file_full_path, error: nil)!
                    
                    
                    
                    
                    
                }
                
            }
            
            
            
        }
        
        
        return dic;
    }
    
    
    
    
    
    
    
    
    func extractAssets(_ path:String, delete_exist:Bool)->String
    {
        
        
        let wwwpath = Bundle.main.resourcePath!.stringByAppendingPathComponent("www/")
        
        // let fileManager = NSFileManager.defaultManager()
        
        
        
        let destPath = (NSSearchPathForDirectoriesInDomains(.applicationSupportDirectory, .userDomainMask, true)[0]).stringByAppendingPathComponent("www/") as String
        
        if(delete_exist == true)
        {
            
            if (FileManager.default.fileExists(atPath: destPath))
            {
                do{
                    
                    try FileManager.default.removeItem(atPath: destPath)
                }
                catch let error as NSError {
                    return "Error:" +   error.description
                    //return nil;
                }
            }
        }
        
        
        do{
            
            try FileManager.default.copyItem(atPath: wwwpath, toPath: destPath)
        }
        catch let error as NSError {
            if(error.code == 4)
            {
                do{
                    try FileManager.default.createDirectory(atPath: NSSearchPathForDirectoriesInDomains(.applicationSupportDirectory, .userDomainMask, true)[0] as String, withIntermediateDirectories: true, attributes: nil)
                }
                catch let error as NSError {
                    return "Error:" +   error.description
                    //return nil;
                }
                return   extractAssets(path,delete_exist: false);
            }
                
            else
            {
                
                print(error.description)
                return "Error:" +   error.description
            }
            
            //return nil;
        }
        
        
        return "OK"
        
        
        
    }
    
    
    
    
    
    func  CheckIfExtractFolder()->Bool
    {
        let paths = NSSearchPathForDirectoriesInDomains(.applicationSupportDirectory, .userDomainMask, true)[0] as String
        
        let getImagePath = paths.stringByAppendingPathComponent("www")
        
        var isDir: ObjCBool = false
        if (FileManager.default.fileExists(atPath: getImagePath, isDirectory: &isDir ))
        {
            return true;
            
        }
        else
        {
            return false
            
        }
        
    }
    
    func  deleteFolder(_ path:String)
    {
        if(FileManager.default.fileExists(atPath: path))
        {
            do{
                try  FileManager.default.removeItem(atPath: path)
            } catch _ as NSError {
                
            }
            
        }
    }
    
    
    
    //    func adler32_buf(buf:UnsafePointer<Bytef>,len:Int) {
    //
    //
    //
    //        var a = 1;
    //        var b = 0;
    //        var L = len;
    //        for var i = 0; i < L; ++i {
    //
    //            var M = Math.min(L-i, 3850)+i;
    //            for(;i<M;i++) {
    //                a += buf[i];
    //                b += a;
    //            }
    //            a = (15*(a>>>16)+(a&65535));
    //            b = (15*(b>>>16)+(b&65535));
    //        }
    //
    //    return ((b%65521) << 16) | (a%65521);
    //
    //
    //        let datax = NSData(contentsOfFile: file_full_path)
    //        let ptr = UnsafePointer<UInt8>(datax!.bytes)
    //        let bytesx = UnsafeBufferPointer<UInt8>(start:ptr, count:datax!.length)
    //        //  let checksum = crc32(0, ptr, UInt32(datax!.length)  );
    //        let checksum = adler32(0, ptr,  datax!.length  );
    //        var x=adler32(<#T##adler: uLong##uLong#>, UnsafePointer<Bytef>, uInt)
    //    }
    
}
