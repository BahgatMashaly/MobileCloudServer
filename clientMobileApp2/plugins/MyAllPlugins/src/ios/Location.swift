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


class Location : NSObject,CLLocationManagerDelegate
{
    
    
    
    var my_locationManager:CLLocationManager! ;
    var is_first_update_location :Bool=true;
    
    var my_current_location: CLLocation!
    var firest_error = true
    
    var th_instance_for_prtocol:protocal_for_location!;
    
    
 func initx()
  {
   my_locationManager = CLLocationManager()
    
    my_locationManager.delegate = self
    my_locationManager.desiredAccuracy = kCLLocationAccuracyHundredMeters
    
    if #available(iOS 9.0, *) {
        my_locationManager.allowsBackgroundLocationUpdates = true
    }
    
    
    
    if( NSString(string:UIDevice.current.systemVersion).doubleValue >= 8 )
    {
        
        if #available(iOS 8.0, *) {
            my_locationManager.requestAlwaysAuthorization()
        } else {
            // Fallback on earlier versions
        }
        if (CLLocationManager.authorizationStatus() == CLAuthorizationStatus.notDetermined )
        {
            
            print("NotDetermined")
            
            return ;
        }
            
        else
        {
            check_location_service_and_start_update()
        }
        
    }
    else
    {
        if (my_locationManager.responds(to: #selector(CLLocationManager.requestWhenInUseAuthorization)))
        {
            if #available(iOS 8.0, *) {
                my_locationManager.requestAlwaysAuthorization()
            } else {
                // Fallback on earlier versions
            }
            
            if (CLLocationManager.authorizationStatus() == CLAuthorizationStatus.notDetermined )
            {
                
                
                
                return ;
            }
                
            else
            {
                check_location_service_and_start_update()
            }
            
        }
        else
        {
            my_locationManager.startUpdatingLocation()
            
            
        }
    }
    
 
    }
    
   
    
    
    
    func check_location_service_and_start_update()
    {
        //التأكد من اللوكيشن
        
//        print(CLLocationManager.authorizationStatus().rawValue)
//        print(CLAuthorizationStatus.Authorized.rawValue)
        if #available(iOS 8.0, *) {
            print(CLAuthorizationStatus.authorizedWhenInUse.rawValue)
        } else {
            // Fallback on earlier versions
        }
        
        var ifAuthorizedWhenInUse:Bool = false;
        
        if #available(iOS 8.0, *) {
            if(CLLocationManager.authorizationStatus() != CLAuthorizationStatus.authorizedWhenInUse)
            {
                ifAuthorizedWhenInUse=true;
            }
        }
        
        if (( ifAuthorizedWhenInUse == true && CLLocationManager.authorizationStatus() != CLAuthorizationStatus.authorized)  || CLLocationManager.locationServicesEnabled() == false)
        {
            
           
            
                if #available(iOS 8.0, *) {
                    DispatchQueue.main.async {
                        if #available(iOS 8.0, *) {
                            
                            
                            
                            
//                            var Alert: UIAlertView = UIAlertView()
//                            Alert.delegate = self
//                            Alert.title = "TEData"
//                            Alert.message = "GPS or location service seems to be disabled, do you want to enable it?"; //NSLocalizedString("no_location", comment: "")
//                            
//                            Alert.addButtonWithTitle("Cancel") // NSLocalizedString("cancel", comment: ""))
//                            Alert.addButtonWithTitle( "Settings")// NSLocalizedString("action_settings", comment: ""))
//                            
//                            
//                            Alert.tag = 2
//                            Alert.show()
                            
                            
                            
                            
                                    let rootViewController: UIViewController = UIApplication.shared.windows[0].rootViewController!
                            
                                    var alert = UIAlertController(title: "TEData", message: "GPS or location service seems to be disabled, do you want to enable it?", preferredStyle: UIAlertControllerStyle.alert)
                            
                                        alert.addAction(UIAlertAction(title: "Cancel", style: UIAlertActionStyle.cancel, handler: {(action: UIAlertAction!) in
                                            rootViewController.dismiss(animated: true, completion: nil)
                                            
                                        }))
                                    
                                    alert.addAction(UIAlertAction(title: "Settings", style: UIAlertActionStyle.default, handler: {(action: UIAlertAction!) in
                                        rootViewController.dismiss(animated: true, completion: nil)
                                       // UIApplication.sharedApplication().openURL(NSURL(fileURLWithPath: UIApplicationOpenSettingsURLString))
                                        if let settingsURL = URL(string: UIApplicationOpenSettingsURLString) {
                                            UIApplication.shared.openURL(settingsURL)
                                        }
                                    }))
                                    rootViewController.present(alert, animated: true, completion: nil)
                        }
                    }
                }
            else
            {
                SV.Alert_ok("TE",  NSLocalizedString("no_location_apple", comment: ""))
                return ;
                
            }
            
            
                
//                     SV.Alert_ok("TE",  "This app does not have access to Location service, You can enable access in Settings->Privacy->Location Services")
//                var Alert: UIAlertView = UIAlertView()
//                
//                Alert.delegate = self
//                
//                Alert.title = "TEData"
//                Alert.message = "GPS or location service seems to be disabled, do you want to enable it?"; //NSLocalizedString("no_location", comment: "")
//                
//                Alert.addButtonWithTitle("Cancel") // NSLocalizedString("cancel", comment: ""))
//                Alert.addButtonWithTitle( "Settings")// NSLocalizedString("action_settings", comment: ""))
//                
//                
//                Alert.tag = 2
//                Alert.show()
            return ;

            
            }
            
        
       // dispatch_async(dispatch_get_main_queue()) {
        self.my_locationManager.startUpdatingLocation()
        //}
        
       // show_peogress();
        
        
        
        
    }
    
    
   
   func locationManager(_ manager: CLLocationManager, didChangeAuthorization status: CLAuthorizationStatus)
    {
        
        print(  status.rawValue)
        
        if (CLLocationManager.authorizationStatus() == CLAuthorizationStatus.notDetermined )
        {
            return;
        }
//        if(self.my_table_cells_array.count == 0)
//        {
            check_location_service_and_start_update()
//        }
        
    }
    
    

    
    
    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation])
    {
        
        var userLocation:CLLocation = locations[0] as! CLLocation
        let long = userLocation.coordinate.longitude;
        let lat = userLocation.coordinate.latitude;
        
        
        if(self.is_first_update_location == false)
        {
            
            manager.delegate = nil
            manager.stopUpdatingLocation()
            self.my_locationManager.delegate = nil
            self.my_locationManager.stopUpdatingLocation()
            // self.dissmess_progress();
            
            return;
        }
       
        
        self.my_locationManager.stopUpdatingLocation()
        self.my_locationManager.stopUpdatingLocation()
        
        // self.dissmess_progress();
        self.my_current_location = manager.location
        self.th_instance_for_prtocol.locationCallback(manager.location!)
        self.is_first_update_location = false;
        //   println("locations = \(locValue.latitude) \(locValue.longitude)")
        
        //                let locality = (containsPlacemark.locality != nil) ? containsPlacemark.locality : ""
        //                let postalCode = (containsPlacemark.postalCode != nil) ? containsPlacemark.postalCode : ""
        //                let administrativeArea = (containsPlacemark.administrativeArea != nil) ? containsPlacemark.administrativeArea : ""
        //                let country = (containsPlacemark.country != nil) ? containsPlacemark.country : ""
        //                println(locality)
        //                println(postalCode)
        //                println(administrativeArea)
        //                println(country)
        
        
        manager.delegate = nil
        manager.stopUpdatingLocation()
        self.my_locationManager.delegate = nil
        self.my_locationManager.stopUpdatingLocation()

        
        
    }
    
    
   
//    func locationManager(_ manager: CLLocationManager, didUpdateToLocation newLocation: CLLocation, fromLocation oldLocation: CLLocation) {
//        
//        CLGeocoder().reverseGeocodeLocation(manager.location!, completionHandler: {(placemarks, error)->Void in
//            print(manager.location)
//            if(self.is_first_update_location == false)
//            {
//                
//                manager.delegate = nil
//                manager.stopUpdatingLocation()
//                self.my_locationManager.delegate = nil
//                self.my_locationManager.stopUpdatingLocation()
//               // self.dissmess_progress();
//                
//                return;
//            }
//            if (error != nil) {
//                //                self.is_first_update_location = false
//                //                self.dissmess_progress();
//                
//                //                SV.Alert_ok("Error",   "Error while updating location : " + error.localizedDescription)
//                
//                //  return
//            }
//            
//            //            if placemarks.count > 0
//            //
//            //            {
//            
//            //                let containsPlacemark = placemarks[0] as CLPlacemark
//            
//            self.my_locationManager.stopUpdatingLocation()
//            self.my_locationManager.stopUpdatingLocation()
//            
//           // self.dissmess_progress();
//            self.my_current_location = manager.location
//            self.th_instance_for_prtocol.locationCallback(manager.location!)
//            self.is_first_update_location = false;
//            //   println("locations = \(locValue.latitude) \(locValue.longitude)")
//            
//            //                let locality = (containsPlacemark.locality != nil) ? containsPlacemark.locality : ""
//            //                let postalCode = (containsPlacemark.postalCode != nil) ? containsPlacemark.postalCode : ""
//            //                let administrativeArea = (containsPlacemark.administrativeArea != nil) ? containsPlacemark.administrativeArea : ""
//            //                let country = (containsPlacemark.country != nil) ? containsPlacemark.country : ""
//            //                println(locality)
//            //                println(postalCode)
//            //                println(administrativeArea)
//            //                println(country)
//            
//            
//            manager.delegate = nil
//            manager.stopUpdatingLocation()
//            self.my_locationManager.delegate = nil
//            self.my_locationManager.stopUpdatingLocation()
//           
//        })
//    }
//    
    
    
    
 func locationManager(_ manager: CLLocationManager, didFailWithError error: Error)
    {
        if(firest_error == true)
        {
            
            var ifAuthorizedWhenInUse:Bool = false;
            
            if #available(iOS 8.0, *) {
                if(CLLocationManager.authorizationStatus() != CLAuthorizationStatus.authorizedWhenInUse)
                {
                    ifAuthorizedWhenInUse=true;
                }
            }
            
            if ((ifAuthorizedWhenInUse && CLLocationManager.authorizationStatus() != CLAuthorizationStatus.authorized)  || CLLocationManager.locationServicesEnabled() == false)
            {
              //  dissmess_progress()
                //SV.Alert_ok("TE",   NSLocalizedString("no_location_apple", comment: ""))
                return
            }
            
            if(  SV.check_internet_connection_hard() == false)
            {
               // dissmess_progress()
                
              //  SV.Alert_ok("TE",   NSLocalizedString("no_internet", comment: ""))
            }
            else
            {
               // dissmess_progress()
                
                print( error)
                print( error.localizedDescription)
              //  print( error.code)
                
                //SV.Alert_ok("Error",   "Error while updating location " + error.localizedDescription)
            }
        }
        
        
    }
    
   
     
    
}







@objc protocol protocal_for_location
    {
    
    
    func locationCallback(_ the_location:CLLocation);
}
