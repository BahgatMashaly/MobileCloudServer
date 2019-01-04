import PushKit

import AVFoundation

let queue = DispatchQueue.global(priority: DispatchQueue.GlobalQueuePriority.default)

let main_qu = DispatchQueue.main


//@available(iOS 8.0, *)
extension AppDelegate: PKPushRegistryDelegate
{
   
    
    // Register for VoIP notifications
    @available(iOS 8.0, *)
    func voipRegistration(_ callBackIdx:String) {
         print(voipTCPService)
        voipTCPService.voipRegistration(callBackIdx)
        let mainQueue = DispatchQueue.main
        // Create a push registry object
        let voipRegistry: PKPushRegistry = PKPushRegistry(queue: mainQueue)
        // Set the registry's delegate to self
        voipRegistry.delegate = self
        // Set the push type to VoIP
        voipRegistry.desiredPushTypes = [PKPushType.voIP]
    }
    
    
    
    
    
    // Handle updated push credentials
    @available(iOS 8.0, *)
    func pushRegistry(_ registry: PKPushRegistry, didUpdate credentials: PKPushCredentials, for type: PKPushType) {
        // Register VoIP push token (a property of PKPushCredentials) with server
        //        //print out the VoIP token. We will use this to test the nofications.
        voipTCPService.didUpdatePushCredentials(credentials)
       
    }
    
   
    
    
    
    // Handle incoming pushes
    @available(iOS 8.0, *)
    func pushRegistry(_ registry: PKPushRegistry, didReceiveIncomingPushWith payload: PKPushPayload, for type: PKPushType) {
        
        
        voipTCPService.didReceiveIncomingPushWithPayload(payload);
    }
    
    
  
    
 
    

    
    



}
