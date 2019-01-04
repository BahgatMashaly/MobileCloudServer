/**
 * Created by Bahgat on 1/9/16.
 */

export  class Project{
    constructor(public projectID?:number,
                public projectName?:string,
                public projectPackageNameBundleID?:string,
                public projectVersion?:string,
                public projectAndroidPath?:string,
                public projectIOSPath?:string,
                public projectWPPath?:string,
                public projectWindowsPath?:string,
                public projectServerRootFile?:string,
                public enablePushNotification?:string,
                public  activeOrNot?:string,
                public  pushNotificationAndroidAPIKey?:string,
                public  pushNotificationWindowsPackageSID?:string,
                public  pushNotificationWindowsPackageSecretKey?:string,
                public  pushNotificationIOSKeyPath?:string,
                public  pushNotificationIOSSecretPath?:string,
                public  voipPushNotificationIOSKeyPath?:string,
                public  voipPushNotificationIOSSecretPath?:string

    )
    { }
}


