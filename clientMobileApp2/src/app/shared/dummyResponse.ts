import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/delay";

/**
 * Created by bahgat.mashaly on 12/10/16.
 */

export class dummyResponse
{
    public static getDummyServiceResponse(serviceName,delayTime)
    {
        // var serviceName:string;
        // try {
        //       console.log(arguments.callee);
        // }catch (err){
        //       var start= err.stack.toString().indexOf(".descriptor.value [as ")
        //       serviceName=  err.stack.toString().substring(start+22,err.stack.toString().indexOf("]",start+22))
        // }

        return Observable.of( dummyResponse.callDummyService(serviceName)).delay(delayTime).map(res=>{
            return res;
        });


    }

    private static  callDummyService(serviceName):any
    {
        var res;
        if(serviceName=="login")
        {
            res=dummyResponse.login
        }
        else if(serviceName=="getPromotions")
        {
            res=dummyResponse.getpromotions
        }
        else if(serviceName=="getUserPoints")
        {
            res={};
            res.loyaltyPoints = dummyResponse.getUserPoints.loyaltyPoints;
        }
        else if(serviceName=="getUserADSLUsage" ||serviceName=="TypeError: 'caller', ")
        {
            res=dummyResponse.getUserADSLUsage;
        }
        else if(serviceName=="getUserADSLRemainingDays")
        {
            res = dummyResponse.getUserADSLRemainingDays;
        }
        else if(serviceName=="getSubscriptionInfo")
        {
            res = dummyResponse.getSubscriptionInfo;

        }

        else if(serviceName=="GetRenewalConfirmationViewModel" )
        {
            // res = <IRenewalConfirmationViewModel>dummyResponse.GetRenewalConfirmationViewModel;
            res = dummyResponse.GetRenewalConfirmationViewModel;
        }

        else if(serviceName=="getBankURL")
        {
            res = dummyResponse.getBankURL;
        }
        else if(serviceName=="getOpenedTicketInfo_part1")
        {
            res = dummyResponse.getOpenedTicketInfo_part1;
        }
        else if(serviceName=="getOpenedTicketInfo_part2")
        {
            res = dummyResponse.getOpenedTicketInfo_part2;
        }
        else if(serviceName=="createTicket")
        {
            res = dummyResponse.createTicket;
        }
        else if(serviceName=="getTickets")
        {
            res = dummyResponse.getTickets;
        }
        else if(serviceName=="getTicketDetails")
        {
            res = dummyResponse.getTicketDetails;
        }
        else if(serviceName=="addComment")
        {
            res = dummyResponse.addComment;
        }
        else if(serviceName=="getAreaCodes")
        {
            res = dummyResponse.getAreaCodes;
        }
        else if(serviceName=="setCustomerInformation")
        {
            res = dummyResponse.setCustomerInformation;
        }
        else if(serviceName=="sendVerificationSMS")
        {
            res = dummyResponse.sendVerificationSMS;
        }
        else if(serviceName=="getCPETypes")
        {
            res = dummyResponse.getCPETypes;
        }
        else if(serviceName=="getCPETypesByCustomer")
        {
            res = dummyResponse.getCPETypesByCustomer;
        }
        else if(serviceName=="getCPELogging")
        {
            res = dummyResponse.getCPELogging;
        }
        else if(serviceName=="getCPEBankURL")
        {
            res = dummyResponse.getCPEBankURL;
        }
        else if(serviceName=="getCustomerInvoices")
        {
            res = dummyResponse.getCustomerInvoices;
        }

        else if(serviceName=="getInvoiceDetails")
        {
            res = dummyResponse.getInvoiceDetails;
        }

        else if(serviceName=="getSubscriptionRenewalInfo")
        {
            res = dummyResponse.getSubscriptionRenewalInfo;
        }
        else if(serviceName=="getOptionPackInfo")
        {
            res = dummyResponse.getOptionPackInfo;
        }
        else if(serviceName=="getLastRenewable")
        {
            res = dummyResponse.getLastRenewable;
        }
        else if(serviceName=="checkUserAdslStatus")
        {
            res = dummyResponse.checkUserAdslStatus;
        }





        return res;
    }

    public  static  login=
        {"customerInformationDto": {
            "adslSpeed": "8192/1024",
            "cityEN": "Cairo",
            "cityAR": "القاهرة",
            "districtEN": "Katameya",
            "districtAR": "القطامية",
            "buildingNumber": "(A)",
            "streetName": "7th zone 3rd Settlement New Cairo Egypt",
            "flatNumber": "",
            "gender": "F",
            "contactLanguage": "A",
            "homePhoneAreaCode": "2",
            "homePhoneNumber": "27578463",
            "workPhoneAreaCode": "0",
            "workPhoneNumber": "",
            "faxAreaCode": "",
            "faxNumber": "",
            "male": true,
            "birthDate": -2137881600000,
            "mobileNumber1WithPrefix": "01119850766",
            "mobileNumber2WithPrefix": "",
            "customerNumber": "2118295",
            "emailAddress": "monawhab@gmail.com",
            "adslAreaCode": 2,
            "adslNumber": 27623463,
            "mobileNumber1": "9850766",
            "activated": true,
            "blackListed": false,
            "abuser": false,
            "directCustomer": true,
            "customerName": "- Mona Mohamed Abdel Whab -",
            "mobilePrefix1": "0111",
            "mobilePrefix2": "",
            "mobileNumber2": "",
            "limitationTypeId": 4,
            "lineOwnerName": "- Mohamed Abdel Whab -",
            "limitationTypeName": "Tal2a",
            "soapRequest": "",
            "soapResponse": ""
        }};

    public static getpromotions={
        "PromotionsAr": [
            {
                "imageUrl": "https://www.tedata.net/wps/wcm/connect/5519a82b-3af9-4a36-9959-24f96462d01a/VAR-Home-Page-1700x651-Ar.png?MOD=AJPERES&CACHEID=5519a82b-3af9-4a36-9959-24f96462d01a",

                "promotionContent": "",
                "promotionTermsAndConditions": "",
                "promotionId": "16793",
                "promotinTitle": "معاك"

            },
            {
                "imageUrl": "https://www.tedata.net/wps/wcm/connect/c6e9ec26-0e62-463a-946c-373c8be92b83/Ma3ak+1700x651-+ar.png?MOD=AJPERES&CACHEID=c6e9ec26-0e62-463a-946c-373c8be92b83",
                "promotionContent": "",
                "promotionTermsAndConditions": "",
                "promotionId": "16793",
                "promotinTitle": "معاك"
            },
            {


                "imageUrl": "https://www.tedata.net/wps/wcm/connect/0de4b82f-b26c-4ce4-a179-005cbc2691e6/1700x651-a-b.png?MOD=AJPERES&CACHEID=0de4b82f-b26c-4ce4-a179-005cbc2691e6",
                "promotionContent": "<script>\n        $(document).ready(function(){\n        $(\"div#data\").hide();\n            $(\"a#click\").click(function(){\n                $(\"div#data\").toggle();\n            });\n        });\n        <\/script>\n<style type=\"text\/css\">.WCM_Section .block__body a {\n            background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n            border: 0 none;\n            color: #ec1c23;\n            padding: 0;\n            text-decoration: none;\n          }\n          .package{\n            border:1px solid #ddd\n          }\n          .package td {\n            padding: 10px;\n            border:1px solid #ddd\n          }\n          .package th {\n            padding: 10px;\n            text-align: center;\n          }\n          .WCM_Section table tr:nth-child(2n+1) {\n            background-color: #fff !important;\n          }\n          .bgcolor, tr.bgcolor th{\n            background-color: #f8f8f8 !important;\n          }\n<\/style>\n<div class=\"block__body\" dir=\"rtl\">\n<p class=\"text-bold\">تي اي داتا حريصة دائما علي أن تقدم الأفضل لعملائها الحاليين ولذلك يسعدنا أن نقدم لكم باقات \"ميجا بلس\" الجديدة حيث يمكنكم الأن الأستمتاع بأعلى سرعة يتحملها خطك ، سعة تحميل أعلى و الاستمتاع بشاهد بلس ايضا\"<\/p>\n\n<p dir=\"rtl\"><a href=\"#\" id=\"click\">اضغط هنا<\/a> لمشاهده أسعار وسرعات باقات ميجا بلس الجديدة، وللتجديد عن طريق الانترنت علي احدي الباقات<span class=\"text-bold\"> اضغط التالي<\/span><\/p>\n\n<div class=\"marign-30-0\" dir=\"rtl\" id=\"data\">\n<table class=\"package\" dir=\"rtl\">\n\t<tbody>\n\t\t<tr class=\"bgcolor\">\n\t\t\t<th>السرعة<\/th>\n\t\t\t<th>سعة التحميل<\/th>\n\t\t\t<th>السرعة بعد انتهاء سعة التحمي<\/th>\n\t\t\t<th>السعر<\/th>\n\t\t\t<th>الخدمات المضافه<\/th>\n\t\t<\/tr>\n\t\t<tr>\n\t\t\t<td>1 ميجابايت<\/td>\n\t\t\t<td>100 جيجابايت<\/td>\n\t\t\t<td>512 كيلوبايت<br \/>\n\t\t\tغير محدودة<\/td>\n\t\t\t<td>100 جنيه<\/td>\n\t\t\t<td class=\"bgcolor\">لا يوجد<\/td>\n\t\t<\/tr>\n\t\t<tr>\n\t\t\t<td rowspan=\"4\">اعلي سرعة خطك يتحملها<span class=\"text-medium-1 text-primary text-normal\">*<\/span><\/td>\n\t\t\t<td>100 جيجابايت<\/td>\n\t\t\t<td>1 ميجابايت<br \/>\n\t\t\tغير محدودة<\/td>\n\t\t\t<td>160 جنيه<\/td>\n\t\t\t<td class=\"bgcolor\" rowspan=\"4\">MBC \" شاهد بلس\"<\/td>\n\t\t<\/tr>\n\t\t<tr>\n\t\t\t<td>200 جيجابايت<\/td>\n\t\t\t<td>2 ميجابايت<br \/>\n\t\t\tغير محدودة<\/td>\n\t\t\t<td>260 جنيه<\/td>\n\t\t<\/tr>\n\t\t<tr>\n\t\t\t<td>300 جيجابايت<\/td>\n\t\t\t<td>4 ميجابايت<br \/>\n\t\t\tغير محدودة<\/td>\n\t\t\t<td>360 جنيه<\/td>\n\t\t<\/tr>\n\t\t<tr>\n\t\t\t<td>500 جيجابايت<\/td>\n\t\t\t<td>4 ميجابايت<br \/>\n\t\t\tغير محدودة<\/td>\n\t\t\t<td>500 جنيه<\/td>\n\t\t<\/tr>\n\t<\/tbody>\n<\/table>\n<span class=\"text-xx-small _block padding-3\"><span class=\"text-medium-1 text-primary text-normal\">*<\/span>اعلى سرعة تصل الى 16 ميجابت\/ثانية<\/span><\/div>\n<\/div>\n",
                "promotionTermsAndConditions": "<p dir=\"rtl\"><span style=\"font-family:Times New Roman, Times, serif\"><span style=\"font-size:12.0pt;\">تطبق الشروط والاحكام<\/span><\/span><\/p>\n",
                "promotionId": "1679",
                "promotinTitle": "ميجا بلس"


            }
            ,
            {
                "imageUrl": "https://www.tedata.net/wps/wcm/connect/f0349280-c024-4bd3-99c3-73c22142f370/1700x651.png?MOD=AJPERES&CACHEID=f0349280-c024-4bd3-99c3-73c22142f370",
                "promotionContent": "",
                "promotionTermsAndConditions": "",
                "promotionId": "16793",
                "promotinTitle": "معاك"
            },
            {
                "imageUrl": "https://www.tedata.net/wps/wcm/connect/e8952c63-e2d6-428c-a875-3112c87ccd3b/1700wx651ha.png?MOD=AJPERES&CACHEID=e8952c63-e2d6-428c-a875-3112c87ccd3b",
                "promotionContent": "",
                "promotionTermsAndConditions": "",
                "promotionId": "16793",
                "promotinTitle": "معاك"
            }

        ],
        "promotionsExcptionHandler": {
            "succeded": true,
            "errorMsgEn": ""
        },
        "PromotionsEn": [
            {

                "imageUrl": "https://www.tedata.net/wps/wcm/connect/6c1065ca-9a4d-45d9-92b3-1191eef8d43b/VAR-Home-Page-1700x651-+en.png?MOD=AJPERES&CACHEID=6c1065ca-9a4d-45d9-92b3-1191eef8d43b",

                "promotionContent": "",
                "promotionTermsAndConditions": "",
                "promotionId": "16793",
                "promotinTitle": "معاك"

            },
            {
                "imageUrl": "https://www.tedata.net/wps/wcm/connect/c6e9ec26-0e62-463a-946c-373c8be92b83/Ma3ak+1700x651-+ar.png?MOD=AJPERES&CACHEID=c6e9ec26-0e62-463a-946c-373c8be92b83",
                "promotionContent": "",
                "promotionTermsAndConditions": "",
                "promotionId": "16793",
                "promotinTitle": "معاك"
            },
            {

                "imageUrl": "https://tedata.net//wps/wcm/connect/346dc2f7-1d3a-40c2-a125-c3a7857ba33c/1700x651-e.png?MOD=AJPERES&CACHEID=346dc2f7-1d3a-40c2-a125-c3a7857ba33c",
                "promotionContent": "<script>\n        $(document).ready(function(){\n        $(\"div#data\").hide();\n            $(\"a#click\").click(function(){\n                $(\"div#data\").toggle();\n            });\n        });\n        <\/script>\n<style type=\"text\/css\">.package{\n            border:1px solid #ddd\n          }\n          .package td {\n            padding: 10px;\n            border:1px solid #ddd\n          }\n          .package th {\n            padding: 10px;\n            text-align: center;\n          }\n          .WCM_Section table tr:nth-child(2n+1) {\n            background-color: #fff !important;\n          }\n          .bgcolor, tr.bgcolor th{\n            background-color: #f8f8f8 !important;\n          }\n<\/style>\n<div class=\"block__body\" dir=\"ltr\">\n<p class=\"text-bold\">TE data is always keen to provide the existing customers with the best, so we are glad to introduce TE data’s new \"Mega plus\" ADSL packages.<\/p>\n\n<p>Now, you can enjoy the higher speed your line can bear, higher quotas and enjoy Shahid plus as well. To view Mega plus ADSL packages <a href=\"#\" id=\"click\">Click here<\/a>, to renew on one of our new packages <span class=\"text-bold\"> Click Next<\/span><\/p>\n\n<div class=\"marign-30-0\" id=\"data\">\n<table class=\"package\">\n\t<tbody>\n\t\t<tr class=\"bgcolor\">\n\t\t\t<th>Speed<\/th>\n\t\t\t<th>Quota<\/th>\n\t\t\t<th>Throttling Speed<\/th>\n\t\t\t<th>Price<\/th>\n\t\t\t<th>Free Added Service<\/th>\n\t\t<\/tr>\n\t\t<tr>\n\t\t\t<td>1 Mbps<\/td>\n\t\t\t<td>100 GB<\/td>\n\t\t\t<td>512 Kbps<br \/>\n\t\t\tunlimited<\/td>\n\t\t\t<td>100 L.E<\/td>\n\t\t\t<td class=\"bgcolor\">Not included<\/td>\n\t\t<\/tr>\n\t\t<tr>\n\t\t\t<td class=\"width-200\" rowspan=\"4\">Up to the highest speed your landline can support<span class=\"text-medium-1 text-primary text-normal\">*<\/span><\/td>\n\t\t\t<td>100 GB<\/td>\n\t\t\t<td>1 Mbps<br \/>\n\t\t\tunlimited<\/td>\n\t\t\t<td>160 L.E<\/td>\n\t\t\t<td class=\"bgcolor\" rowspan=\"4\">MBC Shahid Plus<\/td>\n\t\t<\/tr>\n\t\t<tr>\n\t\t\t<td>200 GB<\/td>\n\t\t\t<td>2 Mbps<br \/>\n\t\t\tunlimited<\/td>\n\t\t\t<td>260 L.E<\/td>\n\t\t<\/tr>\n\t\t<tr>\n\t\t\t<td>300 GB<\/td>\n\t\t\t<td>4 Mbps<br \/>\n\t\t\tunlimited<\/td>\n\t\t\t<td>360 L.E<\/td>\n\t\t<\/tr>\n\t\t<tr>\n\t\t\t<td>500 GB<\/td>\n\t\t\t<td>4 Mbps<br \/>\n\t\t\tunlimited<\/td>\n\t\t\t<td>500 L.E<\/td>\n\t\t<\/tr>\n\t<\/tbody>\n<\/table>\n<span class=\"text-xx-small _block padding-3\"><span class=\"text-medium-1 text-primary text-normal\">*<\/span>Highest speed up to 16Mbps<\/span><\/div>\n<\/div>\n",
                "promotionTermsAndConditions": "<p dir=\"ltr\"><span style=\"font-family:Times New Roman, Times, serif\"><span style=\"font-size:12.0pt;\">Terms and conditions apply<\/span><\/span><\/p>\n",
                "promotionId": "1679",
                "promotinTitle": "Mega plus"

            }
            ,
            {
                "imageUrl": "https://www.tedata.net/wps/wcm/connect/1c72ac66-b537-4789-bb55-29b41758f512/netsaver-1700x651.png?MOD=AJPERES&CACHEID=1c72ac66-b537-4789-bb55-29b41758f512",

                "promotionContent": "",
                "promotionTermsAndConditions": "",
                "promotionId": "16793",
                "promotinTitle": "معاك"
            },
            {
                "imageUrl": "https://www.tedata.net/wps/wcm/connect/f3da36c0-1d53-40e9-ba36-c2a3bae2848f/1700wx651he.png?MOD=AJPERES&CACHEID=f3da36c0-1d53-40e9-ba36-c2a3bae2848f",

                "promotionContent": "",
                "promotionTermsAndConditions": "",
                "promotionId": "16793",
                "promotinTitle": "معاك"
            }
        ]
    };


    public static getLastRenewable={
        "renewalStatus": {
            "renewalRequestDate": 1502959074091,
            "renewalAmount": "150.00",
            "renewalRequestDateString": "17/08/2017",
            "renewalRequestTimeString": "11:37",
            "successful": true
        }
    }

    public static getUserADSLUsage= {"adslUsage":{"quata":150.0,"totalUsed":29.65}};


    public static getUserPoints={"loyaltyPoints":20};

    public static getUserADSLRemainingDays_exeption={
        "remainingExcptionHandler": {
            "succeded": false,
            "errorMsgEn": "Dear Valued customer, this service is not available for your subscription. Please use On-line support, visit the nearest branch or contact 19777",
            "errorMsgAr": "عميلنا العزيز،الدفع الالكترونى غير متاح لهذا الإشتراك، برجاء زيارة أقرب فرع أو الاتصال بـ 19777 أو استعمال الدعم الفني الحي."
        }
    };

    public static getUserADSLRemainingDays={
        "remainingDays": {
            "adslExpiryDateString": "<script>alert('xxxxxx')</script>",
            "remainingDays": 22,
            "packageName": "Home ADSL - 1 Mbps – 1 Month",
            "amountDue": 95.0
        }
    };



    public static getSubscriptionRenewalInfo={"subscriptionInquiry":{"productList":[{"name":"TAL2AADSLUpto8MB-(Cap40G)-1Month","duration":"1","startDate":1420495200000,"endDate":1423087200000,"startDateString":"06/01/2015","endDateString":"05/02/2015","id":357,"packageId":5600}],"customerName":"MohamedHanafyMahmoud","customerNumber":"1630101","areaCode":"2","adslNumber":"37234566","subscriptionNetDue":150,"amount":150,"daysUntilNextRenewal":"15","packageName":"TAL2AADSLUpto8MB-(Cap40G)-1Month","adslDownSpeed":8192,"adslUpspeed":1024,"adslLimitationTypeId":4,"canUpdateInTheMiddle":false,"adslLimitationType":"Tal2a","adslExpirtyDate":1420408800000,"adslExpirtyDateString":"05/01/2015","haveCPE":false,"haveOptionPack":false,"requestNumber":54616,"soapRequest":"<soapenv: Envelopexmlns: soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:web=\"http://webservices.tedata.net\"><soapenv:Body><web:inquiryByCustomerNumberRequest xmlns:web=\"http://webservices.tedata.net\"><adslPhoneNumber/><areaCode>0</areaCode><customerNumber>1496399</customerNumber><includeCPERentalInRenewal>true</includeCPERentalInRenewal><includeOptionPackInRenewal>true</includeOptionPackInRenewal><newDurationInMonths>0</newDurationInMonths><newLimitationType/><newOptionPackPackageID>0</newOptionPackPackageID><newOptionPackPackagePrice>0.0</newOptionPackPackagePrice><newSpeed/><paymentMethodID>10</paymentMethodID><renewalAdminUserID>11414</renewalAdminUserID><renewalLocationID>213</renewalLocationID><renewalUserName>SSP</renewalUserName><packageOfferTypeID>0</packageOfferTypeID><voucherNumber/><upgradeInTheMiddle>false</upgradeInTheMiddle><useExistingDuration>true</useExistingDuration><useExistingLimitationType>true</useExistingLimitationType><useExistingPackageOfferTypeID>true</useExistingPackageOfferTypeID><useExistingSpeed>true</useExistingSpeed></web:inquiryByCustomerNumberRequest></soapenv:Body></soapenv:Envelope>\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000",
        "soapResponse": "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\"><soapenv:Header xmlns:wsa=\"http://www.w3.org/2005/08/addressing\">\n\t\t<wsa:To>http://www.w3.org/2005/08/addressing/anonymous</wsa:To>\n\t\t<wsa:ReplyTo>\n\t\t\t<wsa:Address>http://www.w3.org/2005/08/addressing/anonymous</wsa:Address>\n\t\t</wsa:ReplyTo>\n\t\t<wsa:MessageID>urn:uuid:7FA6FFBF62250315181419149009560</wsa:MessageID>\n\t\t<wsa:Action>inquiryByCustomerNumberRequestResponse</wsa:Action>\n\t\t<wsa:RelatesTo RelationshipType=\"http://www.w3.org/2005/08/addressing/reply\">urn:uuid:235a8576-dbd5-4c8f-9ed8-ca338013231d</wsa:RelatesTo>\n\t</soapenv:Header><soapenv:Body>\n\t\t<web:inquiryByCustomerNumberResponse xmlns:web=\"http://webservices.tedata.net\"><adslAccountID>3583520</adslAccountID><adslPhoneNumber>37234566</adslPhoneNumber><adslServiceID>69</adslServiceID><adslSwitchingFeesPrice>600.0</adslSwitchingFeesPrice><areaCode>2</areaCode><cpeRentalAccountID>0</cpeRentalAccountID><cpeRentalServiceID>0</cpeRentalServiceID><createdInvoiceNumber>0</createdInvoiceNumber><createdProformaNumber>0</createdProformaNumber><createdReceiptNumber>0</createdReceiptNumber><currentDate>2014-12-21</currentDate><customerActive>true</customerActive><customerCategoryIDs>3032</customerCategoryIDs><customerCategoryNames>Consumers</customerCategoryNames><customerName>Mohamed Hanafy Mahmoud</customerName><customerNumber>1630101</customerNumber><errorCode>-1</errorCode><errorMessage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><errorOccured>false</errorOccured><existingCustomer>true</existingCustomer><externalPaymentTransactionNumber/><extraUsageDue>0.0</extraUsageDue><gapInDaysBetweenADSLExpiryDateAndToday>-15</gapInDaysBetweenADSLExpiryDateAndToday><gapInDaysBetweenCPERentalExpiryDateAndADSLExpiryDate>0</gapInDaysBetweenCPERentalExpiryDateAndADSLExpiryDate><gapInDaysBetweenCPERentalExpiryDateAndToday>0</gapInDaysBetweenCPERentalExpiryDateAndToday><gapInDaysBetweenOptionPackExpiryDateAndADSLExpiryDate>0</gapInDaysBetweenOptionPackExpiryDateAndADSLExpiryDate><gapInDaysBetweenOptionPackExpiryDateAndToday>0</gapInDaysBetweenOptionPackExpiryDateAndToday><hasPendingProformaOnADSL>false</hasPendingProformaOnADSL><hasPendingProformaOnCPERental>false</hasPendingProformaOnCPERental><hasPendingProformaOnOptionPack>false</hasPendingProformaOnOptionPack><includeCPERentalInRenewal>false</includeCPERentalInRenewal><includeOptionPackInRenewal>false</includeOptionPackInRenewal><internalErrorMessage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveADSLExpiryDate>2015-01-05</lastActiveADSLExpiryDate><lastActiveADSLInvoiceActive>true</lastActiveADSLInvoiceActive><lastActiveADSLInvoiceID>37629885</lastActiveADSLInvoiceID><lastActiveADSLInvoiceNumber>33271310</lastActiveADSLInvoiceNumber><lastActiveADSLPackage>TAL2A ADSL Up to 8MB - (Cap 40G) - 1 Month</lastActiveADSLPackage><lastActiveADSLPackageDownloadSpeed>8192</lastActiveADSLPackageDownloadSpeed><lastActiveADSLPackageDurationInMonths>1</lastActiveADSLPackageDurationInMonths><lastActiveADSLPackageID>5600</lastActiveADSLPackageID><lastActiveADSLPackageLimitationType>Tal2a</lastActiveADSLPackageLimitationType><lastActiveADSLPackageSpeed>8192/1024</lastActiveADSLPackageSpeed><lastActiveADSLPackageUploadRatio>8</lastActiveADSLPackageUploadRatio><lastActiveADSLPackageUploadSpeed>1024</lastActiveADSLPackageUploadSpeed><lastActiveCPERentalExpiryDate xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveCPERentalInvoiceActive>false</lastActiveCPERentalInvoiceActive><lastActiveCPERentalInvoiceID>0</lastActiveCPERentalInvoiceID><lastActiveCPERentalInvoiceNumber>0</lastActiveCPERentalInvoiceNumber><lastActiveCPERentalPackage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveCPERentalPackageDurationInMonths>0</lastActiveCPERentalPackageDurationInMonths><lastActiveCPERentalPackageID>0</lastActiveCPERentalPackageID><lastActiveCPERentalType xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveOptionPackExpiryDate xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveOptionPackInvoiceActive>false</lastActiveOptionPackInvoiceActive><lastActiveOptionPackInvoiceID>0</lastActiveOptionPackInvoiceID><lastActiveOptionPackInvoiceNumber>0</lastActiveOptionPackInvoiceNumber><lastActiveOptionPackPackage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveOptionPackPackageDurationInMonths>0</lastActiveOptionPackPackageDurationInMonths><lastActiveOptionPackPackageID>0</lastActiveOptionPackPackageID><lastActiveOptionPackType xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><maxGapInDaysBetweenADSLExpiryDateAndToday>30</maxGapInDaysBetweenADSLExpiryDateAndToday><maxGapInDaysBetweenCPERentalExpiryDateAndADSLExpiryDate>28</maxGapInDaysBetweenCPERentalExpiryDateAndADSLExpiryDate><maxGapInDaysBetweenCPERentalExpiryDateAndToday>58</maxGapInDaysBetweenCPERentalExpiryDateAndToday><maxGapInDaysBetweenOptionPackExpiryDateAndADSLExpiryDate>28</maxGapInDaysBetweenOptionPackExpiryDateAndADSLExpiryDate><maxGapInDaysBetweenOptionPackExpiryDateAndToday>58</maxGapInDaysBetweenOptionPackExpiryDateAndToday><newADSLPackageID>5600</newADSLPackageID><newADSLPackagePrice>150.0</newADSLPackagePrice><newCPERentalPackageID>0</newCPERentalPackageID><newCPERentalPackagePrice>0.0</newCPERentalPackagePrice><newDurationInMonths>1</newDurationInMonths><newExpiryDateAfterRenewal>2015-2-5</newExpiryDateAfterRenewal><newLimitationType>Tal2a</newLimitationType><newOptionPackPackageID>0</newOptionPackPackageID><newOptionPackPackagePrice>0.0</newOptionPackPackagePrice><newProformaNetAmount>150.0</newProformaNetAmount><newSpeed>8192/1024</newSpeed><optionPackAccountID>0</optionPackAccountID><optionPackServiceID>0</optionPackServiceID><packageOfferTypeID>357</packageOfferTypeID><payRenewalDue>false</payRenewalDue><paymentMethodID>10</paymentMethodID><performRealRenewal>false</performRealRenewal><renewalAdminUserID>11414</renewalAdminUserID><renewalCustomerComment xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><renewalLocationID>213</renewalLocationID><renewalUserName>SSP</renewalUserName><resellerCustomerName xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><resellerCustomerNumber>-1</resellerCustomerNumber><totalDueForRenewal>150.0</totalDueForRenewal><unpaidExtraUsageInvoiceAmountsDue xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><unpaidExtraUsageInvoiceIDs xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><canupgradeInTheMiddle>false</canupgradeInTheMiddle><useExistingDuration>true</useExistingDuration><useExistingLimitationType>true</useExistingLimitationType><useExistingPackageOfferTypeID>true</useExistingPackageOfferTypeID><useExistingSpeed>true</useExistingSpeed><voucherAmounts>0.0000</voucherAmounts><voucherNumbers>UD-168947</voucherNumbers><lastActiveADSLPackagePrice>150.0</lastActiveADSLPackagePrice><newADSLPackage>TAL2A ADSL Up to 8MB - (Cap 40G) - 1 Month</newADSLPackage><newCPERentalPackage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><newCPERentalPackageExpiryDate xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><newOptionPackPackage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><newOptionPackPackageExpiryDate xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><upgradeInTheMiddle>false</upgradeInTheMiddle></web:inquiryByCustomerNumberResponse></soapenv:Body></soapenv:Envelope>"
    },
        "availablePackages": [
            {
                "promotionId": 356,
                "promotionName": "Tal2a Standard Packages Up To 8M - (Cap 15G)",
                "availablePromtionDurations": [
                    {
                        "duration": 1,
                        "packageId": 5596,
                        "packageOfferTypId": 356,
                        "downSpeed": 8192,
                        "upSpeed": 1024,
                        "limitationType": 4
                    },
                    {
                        "duration": 3,
                        "packageId": 5597,
                        "packageOfferTypId": 356,
                        "downSpeed": 8192,
                        "upSpeed": 1024,
                        "limitationType": 4
                    },
                    {
                        "duration": 6,
                        "packageId": 5598,
                        "packageOfferTypId": 356,
                        "downSpeed": 8192,
                        "upSpeed": 1024,
                        "limitationType": 4
                    },
                    {
                        "duration": 12,
                        "packageId": 5595,
                        "packageOfferTypId": 356,
                        "downSpeed": 8192,
                        "upSpeed": 1024,
                        "limitationType": 4
                    }
                ],
                "smbPromotionId": 0
            },
            {
                "promotionId": 357,
                "promotionName": "Tal2a Standard Packages Up To 8M - (Cap 40G)",
                "availablePromtionDurations": [
                    {
                        "duration": 1,
                        "packageId": 5600,
                        "packageOfferTypId": 357,
                        "downSpeed": 8192,
                        "upSpeed": 1024,
                        "limitationType": 4
                    },
                    {
                        "duration": 3,
                        "packageId": 5601,
                        "packageOfferTypId": 357,
                        "downSpeed": 8192,
                        "upSpeed": 1024,
                        "limitationType": 4
                    },
                    {
                        "duration": 6,
                        "packageId": 5602,
                        "packageOfferTypId": 357,
                        "downSpeed": 8192,
                        "upSpeed": 1024,
                        "limitationType": 4
                    },
                    {
                        "duration": 12,
                        "packageId": 5599,
                        "packageOfferTypId": 357,
                        "downSpeed": 8192,
                        "upSpeed": 1024,
                        "limitationType": 4
                    }
                ],
                "smbPromotionId": 0
            },
            {
                "promotionId": 766,
                "promotionName": "Tal2a Standard Packages Up To 8M - (Cap 5G)",
                "availablePromtionDurations": [
                    {
                        "duration": 1,
                        "packageId": 6339,
                        "packageOfferTypId": 766,
                        "downSpeed": 8192,
                        "upSpeed": 1024,
                        "limitationType": 4
                    },
                    {
                        "duration": 3,
                        "packageId": 6340,
                        "packageOfferTypId": 766,
                        "downSpeed": 8192,
                        "upSpeed": 1024,
                        "limitationType": 4
                    },
                    {
                        "duration": 6,
                        "packageId": 6341,
                        "packageOfferTypId": 766,
                        "downSpeed": 8192,
                        "upSpeed": 1024,
                        "limitationType": 4
                    },
                    {
                        "duration": 12,
                        "packageId": 6338,
                        "packageOfferTypId": 766,
                        "downSpeed": 8192,
                        "upSpeed": 1024,
                        "limitationType": 4
                    }
                ],
                "smbPromotionId": 0
            },
            {
                "promotionId": 768,
                "promotionName": "Tal2a Standard Packages Up To 8M - (Cap 100G)",
                "availablePromtionDurations": [
                    {
                        "duration": 1,
                        "packageId": 6331,
                        "packageOfferTypId": 768,
                        "downSpeed": 8192,
                        "upSpeed": 1024,
                        "limitationType": 4
                    },
                    {
                        "duration": 3,
                        "packageId": 6332,
                        "packageOfferTypId": 768,
                        "downSpeed": 8192,
                        "upSpeed": 1024,
                        "limitationType": 4
                    },
                    {
                        "duration": 6,
                        "packageId": 6333,
                        "packageOfferTypId": 768,
                        "downSpeed": 8192,
                        "upSpeed": 1024,
                        "limitationType": 4
                    },
                    {
                        "duration": 12,
                        "packageId": 6330,
                        "packageOfferTypId": 768,
                        "downSpeed": 8192,
                        "upSpeed": 1024,
                        "limitationType": 4
                    }
                ],
                "smbPromotionId": 0
            },
            {
                "promotionId": 770,
                "promotionName": "Tal2a Standard Packages Up To 8M - (Cap 160G)",
                "availablePromtionDurations": [
                    {
                        "duration": 1,
                        "packageId": 6335,
                        "packageOfferTypId": 770,
                        "downSpeed": 8192,
                        "upSpeed": 1024,
                        "limitationType": 4
                    },
                    {
                        "duration": 3,
                        "packageId": 6336,
                        "packageOfferTypId": 770,
                        "downSpeed": 8192,
                        "upSpeed": 1024,
                        "limitationType": 4
                    },
                    {
                        "duration": 6,
                        "packageId": 6337,
                        "packageOfferTypId": 770,
                        "downSpeed": 8192,
                        "upSpeed": 1024,
                        "limitationType": 4
                    },
                    {
                        "duration": 12,
                        "packageId": 6334,
                        "packageOfferTypId": 770,
                        "downSpeed": 8192,
                        "upSpeed": 1024,
                        "limitationType": 4
                    }
                ],
                "smbPromotionId": 0
            },
            {
                "promotionId": 1348,
                "promotionName": "Home ADSL - 8 Mbps ",
                "availablePromtionDurations": [
                    {
                        "duration": 1,
                        "packageId": 7731,
                        "packageOfferTypId": 1348,
                        "downSpeed": 8192,
                        "upSpeed": 1024,
                        "limitationType": 4
                    },
                    {
                        "duration": 3,
                        "packageId": 7740,
                        "packageOfferTypId": 1348,
                        "downSpeed": 8192,
                        "upSpeed": 1024,
                        "limitationType": 4
                    },
                    {
                        "duration": 6,
                        "packageId": 7745,
                        "packageOfferTypId": 1348,
                        "downSpeed": 8192,
                        "upSpeed": 1024,
                        "limitationType": 4
                    },
                    {
                        "duration": 12,
                        "packageId": 7750,
                        "packageOfferTypId": 1348,
                        "downSpeed": 8192,
                        "upSpeed": 1024,
                        "limitationType": 4
                    }
                ],
                "smbPromotionId": 0
            }
        ]
    };

    public static   GetRenewalConfirmationViewModel={
        "subscriptionInquiry":
            {"productList":
                [{
                    "name":"TAL2AADSLUpto8MB-(Cap40G)-1Month",
                    "duration":"1",
                    "startDate":1420495200000,
                    "endDate":1423087200000,
                    "startDateString":"06/01/2015",
                    "endDateString":"05/02/2015","id":357,
                    "packageId":5600
                }],
                "customerName":"MohamedHanafyMahmoud",
                "customerNumber":"1630101",
                "areaCode":"2",
                "adslNumber":"37234566",
                "subscriptionNetDue":150,
                "amount":150,
                "daysUntilNextRenewal":"15",
                "packageName":"TAL2AADSLUpto8MB-(Cap40G)-1Month",
                "adslDownSpeed":8192,
                "adslUpspeed":1024,
                "adslLimitationTypeId":4,
                "canUpdateInTheMiddle":false,
                "adslLimitationType":"Tal2a",
                "adslExpirtyDate":1420408800000,
                "adslExpirtyDateString":"05/01/2015",
                "haveCPE":false,"haveOptionPack":false,
                "requestNumber":54617,
                "soapRequest":"<soapenv: Envelopexmlns: soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:web=\"http://webservices.tedata.net\"><soapenv:Body><web:inquiryByCustomerNumberRequest xmlns:web=\"http://webservices.tedata.net\"><adslPhoneNumber/><areaCode>0</areaCode><customerNumber>1496399</customerNumber><includeCPERentalInRenewal>true</includeCPERentalInRenewal><includeOptionPackInRenewal>true</includeOptionPackInRenewal><newDurationInMonths>6</newDurationInMonths><newLimitationType/><newOptionPackPackageID>0</newOptionPackPackageID><newOptionPackPackagePrice>0.0</newOptionPackPackagePrice><newSpeed/><paymentMethodID>10</paymentMethodID><renewalAdminUserID>11414</renewalAdminUserID><renewalLocationID>213</renewalLocationID><renewalUserName>SSP</renewalUserName><packageOfferTypeID>357</packageOfferTypeID><voucherNumber/><upgradeInTheMiddle>false</upgradeInTheMiddle><useExistingDuration>false</useExistingDuration><useExistingLimitationType>true</useExistingLimitationType><useExistingPackageOfferTypeID>false</useExistingPackageOfferTypeID><useExistingSpeed>true</useExistingSpeed></web:inquiryByCustomerNumberRequest></soapenv:Body></soapenv:Envelope>\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000",
                "soapResponse": "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\"><soapenv:Header xmlns:wsa=\"http://www.w3.org/2005/08/addressing\">\n\t\t<wsa:To>http://www.w3.org/2005/08/addressing/anonymous</wsa:To>\n\t\t<wsa:ReplyTo>\n\t\t\t<wsa:Address>http://www.w3.org/2005/08/addressing/anonymous</wsa:Address>\n\t\t</wsa:ReplyTo>\n\t\t<wsa:MessageID>urn:uuid:7FA6FFBF62250315181419149009560</wsa:MessageID>\n\t\t<wsa:Action>inquiryByCustomerNumberRequestResponse</wsa:Action>\n\t\t<wsa:RelatesTo RelationshipType=\"http://www.w3.org/2005/08/addressing/reply\">urn:uuid:235a8576-dbd5-4c8f-9ed8-ca338013231d</wsa:RelatesTo>\n\t</soapenv:Header><soapenv:Body>\n\t\t<web:inquiryByCustomerNumberResponse xmlns:web=\"http://webservices.tedata.net\"><adslAccountID>3583520</adslAccountID><adslPhoneNumber>37234566</adslPhoneNumber><adslServiceID>69</adslServiceID><adslSwitchingFeesPrice>600.0</adslSwitchingFeesPrice><areaCode>2</areaCode><cpeRentalAccountID>0</cpeRentalAccountID><cpeRentalServiceID>0</cpeRentalServiceID><createdInvoiceNumber>0</createdInvoiceNumber><createdProformaNumber>0</createdProformaNumber><createdReceiptNumber>0</createdReceiptNumber><currentDate>2014-12-21</currentDate><customerActive>true</customerActive><customerCategoryIDs>3032</customerCategoryIDs><customerCategoryNames>Consumers</customerCategoryNames><customerName>Mohamed Hanafy Mahmoud</customerName><customerNumber>1630101</customerNumber><errorCode>-1</errorCode><errorMessage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><errorOccured>false</errorOccured><existingCustomer>true</existingCustomer><externalPaymentTransactionNumber/><extraUsageDue>0.0</extraUsageDue><gapInDaysBetweenADSLExpiryDateAndToday>-15</gapInDaysBetweenADSLExpiryDateAndToday><gapInDaysBetweenCPERentalExpiryDateAndADSLExpiryDate>0</gapInDaysBetweenCPERentalExpiryDateAndADSLExpiryDate><gapInDaysBetweenCPERentalExpiryDateAndToday>0</gapInDaysBetweenCPERentalExpiryDateAndToday><gapInDaysBetweenOptionPackExpiryDateAndADSLExpiryDate>0</gapInDaysBetweenOptionPackExpiryDateAndADSLExpiryDate><gapInDaysBetweenOptionPackExpiryDateAndToday>0</gapInDaysBetweenOptionPackExpiryDateAndToday><hasPendingProformaOnADSL>false</hasPendingProformaOnADSL><hasPendingProformaOnCPERental>false</hasPendingProformaOnCPERental><hasPendingProformaOnOptionPack>false</hasPendingProformaOnOptionPack><includeCPERentalInRenewal>false</includeCPERentalInRenewal><includeOptionPackInRenewal>false</includeOptionPackInRenewal><internalErrorMessage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveADSLExpiryDate>2015-01-05</lastActiveADSLExpiryDate><lastActiveADSLInvoiceActive>true</lastActiveADSLInvoiceActive><lastActiveADSLInvoiceID>37629885</lastActiveADSLInvoiceID><lastActiveADSLInvoiceNumber>33271310</lastActiveADSLInvoiceNumber><lastActiveADSLPackage>TAL2A ADSL Up to 8MB - (Cap 40G) - 1 Month</lastActiveADSLPackage><lastActiveADSLPackageDownloadSpeed>8192</lastActiveADSLPackageDownloadSpeed><lastActiveADSLPackageDurationInMonths>1</lastActiveADSLPackageDurationInMonths><lastActiveADSLPackageID>5600</lastActiveADSLPackageID><lastActiveADSLPackageLimitationType>Tal2a</lastActiveADSLPackageLimitationType><lastActiveADSLPackageSpeed>8192/1024</lastActiveADSLPackageSpeed><lastActiveADSLPackageUploadRatio>8</lastActiveADSLPackageUploadRatio><lastActiveADSLPackageUploadSpeed>1024</lastActiveADSLPackageUploadSpeed><lastActiveCPERentalExpiryDate xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveCPERentalInvoiceActive>false</lastActiveCPERentalInvoiceActive><lastActiveCPERentalInvoiceID>0</lastActiveCPERentalInvoiceID><lastActiveCPERentalInvoiceNumber>0</lastActiveCPERentalInvoiceNumber><lastActiveCPERentalPackage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveCPERentalPackageDurationInMonths>0</lastActiveCPERentalPackageDurationInMonths><lastActiveCPERentalPackageID>0</lastActiveCPERentalPackageID><lastActiveCPERentalType xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveOptionPackExpiryDate xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveOptionPackInvoiceActive>false</lastActiveOptionPackInvoiceActive><lastActiveOptionPackInvoiceID>0</lastActiveOptionPackInvoiceID><lastActiveOptionPackInvoiceNumber>0</lastActiveOptionPackInvoiceNumber><lastActiveOptionPackPackage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveOptionPackPackageDurationInMonths>0</lastActiveOptionPackPackageDurationInMonths><lastActiveOptionPackPackageID>0</lastActiveOptionPackPackageID><lastActiveOptionPackType xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><maxGapInDaysBetweenADSLExpiryDateAndToday>30</maxGapInDaysBetweenADSLExpiryDateAndToday><maxGapInDaysBetweenCPERentalExpiryDateAndADSLExpiryDate>28</maxGapInDaysBetweenCPERentalExpiryDateAndADSLExpiryDate><maxGapInDaysBetweenCPERentalExpiryDateAndToday>58</maxGapInDaysBetweenCPERentalExpiryDateAndToday><maxGapInDaysBetweenOptionPackExpiryDateAndADSLExpiryDate>28</maxGapInDaysBetweenOptionPackExpiryDateAndADSLExpiryDate><maxGapInDaysBetweenOptionPackExpiryDateAndToday>58</maxGapInDaysBetweenOptionPackExpiryDateAndToday><newADSLPackageID>5600</newADSLPackageID><newADSLPackagePrice>150.0</newADSLPackagePrice><newCPERentalPackageID>0</newCPERentalPackageID><newCPERentalPackagePrice>0.0</newCPERentalPackagePrice><newDurationInMonths>1</newDurationInMonths><newExpiryDateAfterRenewal>2015-2-5</newExpiryDateAfterRenewal><newLimitationType>Tal2a</newLimitationType><newOptionPackPackageID>0</newOptionPackPackageID><newOptionPackPackagePrice>0.0</newOptionPackPackagePrice><newProformaNetAmount>150.0</newProformaNetAmount><newSpeed>8192/1024</newSpeed><optionPackAccountID>0</optionPackAccountID><optionPackServiceID>0</optionPackServiceID><packageOfferTypeID>357</packageOfferTypeID><payRenewalDue>false</payRenewalDue><paymentMethodID>10</paymentMethodID><performRealRenewal>false</performRealRenewal><renewalAdminUserID>11414</renewalAdminUserID><renewalCustomerComment xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><renewalLocationID>213</renewalLocationID><renewalUserName>SSP</renewalUserName><resellerCustomerName xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><resellerCustomerNumber>-1</resellerCustomerNumber><totalDueForRenewal>150.0</totalDueForRenewal><unpaidExtraUsageInvoiceAmountsDue xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><unpaidExtraUsageInvoiceIDs xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><canupgradeInTheMiddle>false</canupgradeInTheMiddle><useExistingDuration>true</useExistingDuration><useExistingLimitationType>true</useExistingLimitationType><useExistingPackageOfferTypeID>true</useExistingPackageOfferTypeID><useExistingSpeed>true</useExistingSpeed><voucherAmounts>0.0000</voucherAmounts><voucherNumbers>UD-168947</voucherNumbers><lastActiveADSLPackagePrice>150.0</lastActiveADSLPackagePrice><newADSLPackage>TAL2A ADSL Up to 8MB - (Cap 40G) - 1 Month</newADSLPackage><newCPERentalPackage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><newCPERentalPackageExpiryDate xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><newOptionPackPackage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><newOptionPackPackageExpiryDate xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><upgradeInTheMiddle>false</upgradeInTheMiddle></web:inquiryByCustomerNumberResponse></soapenv:Body></soapenv:Envelope>"
            }
    }


    public static getBankURL=
        {
            "bankUrl": "https:\/\/payments.tedata.net\/net.tedata.topG.ui\/ViewPaymentWidget?transactionHashCode=70630a0d38ebb8819c08e5c7f1699dce",
        };





    public static getSubscriptionInfo=
        {
            "subscriptionInquiry": {
                "productList": [
                    {
                        "name": "Mega Plus - ADSL 1Mbps (Cap 100GB) - 1 Month",
                        "duration": "1",
                        "startDate": 1494885600000,
                        "endDate": 1497477600000,
                        "startDateString": "16/05/2017",
                        "endDateString": "15/06/2017",
                        "id": 1759,
                        "packageId": 8572
                    }
                ],
                "customerName": "Mohamed Yousry El-Said Kamel",
                "customerNumber": "210068",
                "areaCode": "2",
                "adslNumber": "35829559",
                "subscriptionNetDue": 100,
                "amount": 100,
                "daysUntilNextRenewal": "154",
                "packageName": "Mega Plus - ADSL 1Mbps (Cap 100GB) - 1 Month",
                "adslDownSpeed": 1024,
                "adslUpspeed": 256,
                "adslLimitationTypeId": 4,
                "canUpdateInTheMiddle": false,
                "adslLimitationType": "Tal2a",
                "adslExpirtyDate": 1494799200000,
                "adslExpirtyDateString": "15/05/2017",
                "haveCPE": false,
                "haveOptionPack": false,
                "requestNumber": 6996005,
                "soapRequest": "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:web=\"http://webservices.tedata.net\"><soapenv:Body><web:inquiryByCustomerNumberRequest xmlns:web=\"http://webservices.tedata.net\"><adslPhoneNumber/><areaCode>0</areaCode><customerNumber>210068</customerNumber><includeCPERentalInRenewal>true</includeCPERentalInRenewal><includeOptionPackInRenewal>true</includeOptionPackInRenewal><newDurationInMonths>0</newDurationInMonths><newLimitationType/><newOptionPackPackageID>0</newOptionPackPackageID><newOptionPackPackagePrice>0.0</newOptionPackPackagePrice><newSpeed/><paymentMethodID>10</paymentMethodID><renewalAdminUserID>11414</renewalAdminUserID><renewalLocationID>213</renewalLocationID><renewalUserName>SSP</renewalUserName><packageOfferTypeID>0</packageOfferTypeID><voucherNumber/><upgradeInTheMiddle>false</upgradeInTheMiddle><useExistingDuration>true</useExistingDuration><useExistingLimitationType>true</useExistingLimitationType><useExistingPackageOfferTypeID>true</useExistingPackageOfferTypeID><useExistingSpeed>true</useExistingSpeed></web:inquiryByCustomerNumberRequest></soapenv:Body></soapenv:Envelope>\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000",
                "soapResponse": "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\"><soapenv:Header xmlns:wsa=\"http://www.w3.org/2005/08/addressing\"><wsa:To>http://www.w3.org/2005/08/addressing/anonymous</wsa:To><wsa:ReplyTo><wsa:Address>http://www.w3.org/2005/08/addressing/anonymous</wsa:Address></wsa:ReplyTo><wsa:MessageID>urn:uuid:00000e59-beab-4707-b62a-97b8f8267665</wsa:MessageID><wsa:Action>inquiryByCustomerNumberRequestResponse</wsa:Action><wsa:RelatesTo RelationshipType=\"http://www.w3.org/2005/08/addressing/reply\">urn:uuid:8113f5cd-991c-46dd-ac46-ddf135966748</wsa:RelatesTo></soapenv:Header><soapenv:Body><web:inquiryByCustomerNumberResponse xmlns:web=\"http://webservices.tedata.net\"><adslAccountID>536986</adslAccountID><adslPhoneNumber>35829559</adslPhoneNumber><adslServiceID>69</adslServiceID><adslSwitchingFeesPrice>0.0</adslSwitchingFeesPrice><areaCode>2</areaCode><cpeRentalAccountID>0</cpeRentalAccountID><cpeRentalServiceID>0</cpeRentalServiceID><createdInvoiceNumber>0</createdInvoiceNumber><createdProformaNumber>0</createdProformaNumber><createdReceiptNumber>0</createdReceiptNumber><currentDate>2016-12-12</currentDate><customerActive>true</customerActive><customerCategoryIDs>3032</customerCategoryIDs><customerCategoryNames>Consumers</customerCategoryNames><customerName>Mohamed Yousry El-Said Kamel</customerName><customerNumber>210068</customerNumber><errorCode>-1</errorCode><errorMessage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><errorOccured>false</errorOccured><existingCustomer>true</existingCustomer><externalPaymentTransactionNumber/><extraUsageDue>0.0</extraUsageDue><gapInDaysBetweenADSLExpiryDateAndToday>-154</gapInDaysBetweenADSLExpiryDateAndToday><gapInDaysBetweenCPERentalExpiryDateAndADSLExpiryDate>0</gapInDaysBetweenCPERentalExpiryDateAndADSLExpiryDate><gapInDaysBetweenCPERentalExpiryDateAndToday>0</gapInDaysBetweenCPERentalExpiryDateAndToday><gapInDaysBetweenOptionPackExpiryDateAndADSLExpiryDate>0</gapInDaysBetweenOptionPackExpiryDateAndADSLExpiryDate><gapInDaysBetweenOptionPackExpiryDateAndToday>0</gapInDaysBetweenOptionPackExpiryDateAndToday><hasPendingProformaOnADSL>false</hasPendingProformaOnADSL><hasPendingProformaOnCPERental>false</hasPendingProformaOnCPERental><hasPendingProformaOnOptionPack>false</hasPendingProformaOnOptionPack><includeCPERentalInRenewal>false</includeCPERentalInRenewal><includeOptionPackInRenewal>false</includeOptionPackInRenewal><internalErrorMessage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveADSLExpiryDate>2017-05-15</lastActiveADSLExpiryDate><lastActiveADSLInvoiceActive>true</lastActiveADSLInvoiceActive><lastActiveADSLInvoiceID>57114667</lastActiveADSLInvoiceID><lastActiveADSLInvoiceNumber>51597221</lastActiveADSLInvoiceNumber><lastActiveADSLPackage>Mega Plus - ADSL 1Mbps (Cap 100GB) - 1 Month</lastActiveADSLPackage><lastActiveADSLPackageDownloadSpeed>1024</lastActiveADSLPackageDownloadSpeed><lastActiveADSLPackageDurationInMonths>1</lastActiveADSLPackageDurationInMonths><lastActiveADSLPackageID>8572</lastActiveADSLPackageID><lastActiveADSLPackageLimitationType>Tal2a</lastActiveADSLPackageLimitationType><lastActiveADSLPackageSpeed>1024/256</lastActiveADSLPackageSpeed><lastActiveADSLPackageUploadRatio>4</lastActiveADSLPackageUploadRatio><lastActiveADSLPackageUploadSpeed>256</lastActiveADSLPackageUploadSpeed><lastActiveCPERentalExpiryDate xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveCPERentalInvoiceActive>false</lastActiveCPERentalInvoiceActive><lastActiveCPERentalInvoiceID>0</lastActiveCPERentalInvoiceID><lastActiveCPERentalInvoiceNumber>0</lastActiveCPERentalInvoiceNumber><lastActiveCPERentalPackage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveCPERentalPackageDurationInMonths>0</lastActiveCPERentalPackageDurationInMonths><lastActiveCPERentalPackageID>0</lastActiveCPERentalPackageID><lastActiveCPERentalType xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveOptionPackExpiryDate xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveOptionPackInvoiceActive>false</lastActiveOptionPackInvoiceActive><lastActiveOptionPackInvoiceID>0</lastActiveOptionPackInvoiceID><lastActiveOptionPackInvoiceNumber>0</lastActiveOptionPackInvoiceNumber><lastActiveOptionPackPackage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveOptionPackPackageDurationInMonths>0</lastActiveOptionPackPackageDurationInMonths><lastActiveOptionPackPackageID>0</lastActiveOptionPackPackageID><lastActiveOptionPackType xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><maxGapInDaysBetweenADSLExpiryDateAndToday>60</maxGapInDaysBetweenADSLExpiryDateAndToday><maxGapInDaysBetweenCPERentalExpiryDateAndADSLExpiryDate>28</maxGapInDaysBetweenCPERentalExpiryDateAndADSLExpiryDate><maxGapInDaysBetweenCPERentalExpiryDateAndToday>88</maxGapInDaysBetweenCPERentalExpiryDateAndToday><maxGapInDaysBetweenOptionPackExpiryDateAndADSLExpiryDate>28</maxGapInDaysBetweenOptionPackExpiryDateAndADSLExpiryDate><maxGapInDaysBetweenOptionPackExpiryDateAndToday>88</maxGapInDaysBetweenOptionPackExpiryDateAndToday><newADSLPackageID>8572</newADSLPackageID><newADSLPackagePrice>100.0</newADSLPackagePrice><newCPERentalPackageID>0</newCPERentalPackageID><newCPERentalPackagePrice>0.0</newCPERentalPackagePrice><newDurationInMonths>1</newDurationInMonths><newExpiryDateAfterRenewal>2017-6-15</newExpiryDateAfterRenewal><newLimitationType>Tal2a</newLimitationType><newOptionPackPackageID>0</newOptionPackPackageID><newOptionPackPackagePrice>0.0</newOptionPackPackagePrice><newProformaNetAmount>100.0</newProformaNetAmount><newSpeed>1024/256</newSpeed><optionPackAccountID>0</optionPackAccountID><optionPackServiceID>0</optionPackServiceID><packageOfferTypeID>1759</packageOfferTypeID><payRenewalDue>false</payRenewalDue><paymentMethodID>10</paymentMethodID><performRealRenewal>false</performRealRenewal><renewalAdminUserID>11414</renewalAdminUserID><renewalCustomerComment xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><renewalLocationID>213</renewalLocationID><renewalUserName>SSP</renewalUserName><resellerCustomerName xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><resellerCustomerNumber>-1</resellerCustomerNumber><totalDueForRenewal>100.0</totalDueForRenewal><unpaidExtraUsageInvoiceAmountsDue xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><unpaidExtraUsageInvoiceIDs xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><canupgradeInTheMiddle>false</canupgradeInTheMiddle><useExistingDuration>true</useExistingDuration><useExistingLimitationType>true</useExistingLimitationType><useExistingPackageOfferTypeID>true</useExistingPackageOfferTypeID><useExistingSpeed>true</useExistingSpeed><voucherAmounts/><voucherNumbers/><lastActiveADSLPackagePrice>100.0</lastActiveADSLPackagePrice><newADSLPackage>Mega Plus - ADSL 1Mbps (Cap 100GB) - 1 Month</newADSLPackage><newCPERentalPackage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><newCPERentalPackageExpiryDate xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><newOptionPackPackage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><newOptionPackPackageExpiryDate xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><upgradeInTheMiddle>false</upgradeInTheMiddle></web:inquiryByCustomerNumberResponse></soapenv:Body></soapenv:Envelope>"
            }
        };




    public  static  getOpenedTicketInfo=  {
        "isEligible": true,
        "openTicketInfo": {
            "requestLogId": 12827657,
            "hasTicketOpen": false
        },
        "ProblemType": [
            {
                "value": "Data and Voice Down",
                "option": "Telephone and ADSL are not working"
            },
            {
                "value": "Data Down",
                "option": "ADSL Problem"
            },
            {
                "value": "Voice Down",
                "option": "Telephone Problem"
            },
            {
                "value": "Speed",
                "option": "Slow Speed"
            },
            {
                "value": "Browsing",
                "option": "Service Problem"
            },
            {
                "value": "Option Pack",
                "option": "Static IP Problem"
            },
            {
                "value": "Technical Visit",
                "option": "Technical Visit"
            },
            {
                "value": "Family Internet",
                "option": "Family Service Problem"
            },
            {
                "value": "Info Request",
                "option": "Others"
            }
        ],
        "ProblmeTypeAr": [
            {
                "value": "Data and Voice Down",
                "option": "الهاتف وخدمة الـADSL لا يعملان"
            },
            {
                "value": "Data Down",
                "option": "مشكلة خاصة بخدمة الـADSL"
            },
            {
                "value": "Voice Down",
                "option": "مشكلة خاصة بالهاتف"
            },
            {
                "value": "Speed",
                "option": "السرعة بطيئة"
            },
            {
                "value": "Browsing",
                "option": "مشكلة في الخدمة"
            },
            {
                "value": "Option Pack",
                "option": "مشكلة في الـStatic IP"
            },
            {
                "value": "Technical Visit",
                "option": "زيارة فنية"
            },
            {
                "value": "Family Internet",
                "option": "مشكلة في خدمة الإنترنت العائلي"
            },
            {
                "value": "Info Request",
                "option": "أخرى"
            }
        ],
        "exceptionHandler": {
            "succeded": true,
            "errorMsgEn": "",
            "errorMsgAr": ""
        }
    };

    public static  getOpenedTicketInfo_with_open_ticket=  {
        "isEligible": true,
        "openTicketInfo": {
            "requestLogId": 12828281,
            "hasTicketOpen": true,
            "openTicketTitle": "ADSL Problem",
            "alreadyOpenedTicketNum": "31796074"
        },
        "ProblemType": [
            {
                "value": "Data and Voice Down",
                "option": "Telephone and ADSL are not working"
            },
            {
                "value": "Data Down",
                "option": "ADSL Problem"
            },
            {
                "value": "Voice Down",
                "option": "Telephone Problem"
            },
            {
                "value": "Speed",
                "option": "Slow Speed"
            },
            {
                "value": "Browsing",
                "option": "Service Problem"
            },
            {
                "value": "Option Pack",
                "option": "Static IP Problem"
            },
            {
                "value": "Technical Visit",
                "option": "Technical Visit"
            },
            {
                "value": "Family Internet",
                "option": "Family Service Problem"
            },
            {
                "value": "Info Request",
                "option": "Others"
            }
        ],
        "ProblmeTypeAr": [
            {
                "value": "Data and Voice Down",
                "option": "الهاتف وخدمة الـADSL لا يعملان"
            },
            {
                "value": "Data Down",
                "option": "مشكلة خاصة بخدمة الـADSL"
            },
            {
                "value": "Voice Down",
                "option": "مشكلة خاصة بالهاتف"
            },
            {
                "value": "Speed",
                "option": "السرعة بطيئة"
            },
            {
                "value": "Browsing",
                "option": "مشكلة في الخدمة"
            },
            {
                "value": "Option Pack",
                "option": "مشكلة في الـStatic IP"
            },
            {
                "value": "Technical Visit",
                "option": "زيارة فنية"
            },
            {
                "value": "Family Internet",
                "option": "مشكلة في خدمة الإنترنت العائلي"
            },
            {
                "value": "Info Request",
                "option": "أخرى"
            }
        ],
        "exceptionHandler": {
            "succeded": true,
            "errorMsgEn": "",
            "errorMsgAr": ""
        }
    };


    public static getOpenedTicketInfo_part1={
        "openTicketInfo": {
            "requestLogId": 6996043,
            "hasTicketOpen": false
        }
    };

    public static getOpenedTicketInfo_part1_with_open_ticket=  {
        "openTicketInfo": {
            "requestLogId": 12828281,
            "hasTicketOpen": true,
            "openTicketTitle": "ADSL Problem",
            "alreadyOpenedTicketNum": "31796074"
        }
    };

    public static getOpenedTicketInfo_part2={
        "adslServiceStatus": true
    };


    public static createTicket={
        ticketNumber:989898
    };

    public static addComment=
        {
            "commentAdded": true
        }

    public  static getCustomerInvoices_empty= {
        "Invoices": [

        ],
        "exceptionHandler": {
            "succeded": true,
            "errorMsgEn": "",
            "errorMsgAr": ""
        }
    };



    // adapter:SSPServicesAdapter
    // procedure:getTicketsList
    // compressResponse:
    //     parameters:["2404133"]

    //application/x-www-form-urlencoded; charset=UTF-8
    public static getTickets={
        "ticketsList": [
            {
                "sspStatus": "Closed",
                "ttsStatus": "Closed",
                "customerNumber": 0,
                "downloadAttachments": [

                ],
                "sspType": "Others",
                "technicalThreads": [

                ],
                "creationDate": "15-12-2016 04:37 PM",
                "ttsType": "Info Request",
                "ttsSubReason": "General Inquiry[ Sales Issue]",
                "platform": "ADSL",
                "ticketNumber": "31796074",
                "title": "ADSL Problem",
                "source": "SSP"
            },
            {
                "sspStatus": "Closed",
                "ttsStatus": "Closed",
                "customerNumber": 0,
                "downloadAttachments": [

                ],
                "sspType": "ADSL Problem",
                "technicalThreads": [

                ],
                "creationDate": "31-05-2016 12:01 PM",
                "ttsType": "Data Down",
                "ttsSubReason": "Solved and closed due to customer unreachability",
                "platform": "ADSL",
                "ticketNumber": "27631587",
                "title": "data down",
                "source": "Telephone"
            },
            {
                "ttsSubReason": "Closed by Admin",
                "sspStatus": "Closed",
                "platform": "ADSL",
                "ticketNumber": "21248656",
                "ttsStatus": "Closed",
                "customerNumber": 0,
                "downloadAttachments": [

                ],
                "title": "global problem ",
                "source": "Telephone",
                "technicalThreads": [

                ],
                "creationDate": "21-06-2015 11:53 AM",
                "ttsType": "Global Problem"
            },
            {
                "ttsSubReason": "Card Problem",
                "sspStatus": "Closed",
                "platform": "ADSL",
                "ticketNumber": "20592769",
                "ttsStatus": "Closed",
                "customerNumber": 0,
                "downloadAttachments": [

                ],
                "title": "Global Problem",
                "source": "Telephone",
                "technicalThreads": [

                ],
                "creationDate": "16-05-2015 11:17 AM",
                "ttsType": "Global Problem"
            },
            {
                "ttsSubReason": "Card Problem",
                "sspStatus": "Closed",
                "platform": "ADSL",
                "ticketNumber": "20592212",
                "ttsStatus": "Closed",
                "customerNumber": 0,
                "downloadAttachments": [

                ],
                "title": "globle proplem",
                "source": "Telephone",
                "technicalThreads": [

                ],
                "creationDate": "16-05-2015 10:27 AM",
                "ttsType": "Global Problem"
            },
            {
                "ttsSubReason": "Card Problem",
                "sspStatus": "Closed",
                "platform": "ADSL",
                "ticketNumber": "20542502",
                "ttsStatus": "Closed",
                "customerNumber": 0,
                "downloadAttachments": [

                ],
                "title": "Global Problem",
                "source": "Telephone",
                "technicalThreads": [

                ],
                "creationDate": "13-05-2015 12:55 PM",
                "ttsType": "Global Problem"
            },
            {
                "sspStatus": "Closed",
                "ttsStatus": "Closed",
                "customerNumber": 0,
                "downloadAttachments": [

                ],
                "sspType": "ADSL Problem",
                "technicalThreads": [

                ],
                "creationDate": "13-05-2015 11:22 AM",
                "ttsType": "Data Down",
                "ttsSubReason": "Restart Port",
                "platform": "ADSL",
                "ticketNumber": "20541024",
                "title": "Data Down",
                "source": "Telephone"
            },
            {
                "sspStatus": "Closed",
                "ttsStatus": "Closed",
                "customerNumber": 0,
                "downloadAttachments": [

                ],
                "sspType": "ADSL Problem",
                "technicalThreads": [

                ],
                "creationDate": "07-05-2015 07:17 PM",
                "ttsType": "Data Down",
                "ttsSubReason": "Restart Port",
                "platform": "ADSL",
                "ticketNumber": "20449451",
                "title": "Data down",
                "source": "Telephone"
            },
            {
                "ttsSubReason": "Closed by Admin",
                "sspStatus": "Closed",
                "platform": "ADSL",
                "ticketNumber": "17111478",
                "ttsStatus": "Closed",
                "customerNumber": 0,
                "downloadAttachments": [

                ],
                "title": "global problem",
                "source": "Telephone",
                "technicalThreads": [

                ],
                "creationDate": "22-09-2014 12:30 PM",
                "ttsType": "Global Problem"
            },
            {
                "ttsSubReason": "Instability",
                "sspStatus": "Closed",
                "platform": "ADSL",
                "ticketNumber": "20607041",
                "ttsStatus": "closed",
                "customerNumber": 0,
                "downloadAttachments": [

                ],
                "title": "global problem ",
                "source": "Telephone",
                "technicalThreads": [

                ],
                "creationDate": "17-05-2015 10:44 AM",
                "ttsType": "Global Problem"
            },

            {
                "ttsSubReason": "Instability",
                "sspStatus": "Closed",//Waiting feedback
                "platform": "ADSL",
                "ticketNumber": "20879049",
                "ttsStatus": "opened",
                "customerNumber": 0,
                "downloadAttachments": [

                ],
                "title": "Global Problem",
                "source": "Telephone",
                "technicalThreads": [

                ],
                "creationDate": "31-05-2015 11:30 AM",
                "ttsType": "Global Problem"
            }
        ],
        "exceptionHandler": {
            "succeded": true,
            "errorMsgEn": "",
            "errorMsgAr": ""
        }
    };




    //
    // adapter:SSPServicesAdapter
    // procedure:getTicketDetails
    // compressResponse:
    //     parameters:["31796074"]


    public static getTicketDetails={
        "ticketDetails":
            {
                "downloadAttachments": [],
                "probDesc": "cst",
                "technicalThreads": [

                    {
                        "user": "TEData Support",
                        "dateTime": "06-08-2017 11:47 AM",
                        "comment": "N/A"
                    },
                    {
                        "user": "Ahmed Fouad",
                        "dateTime": "09-08-2017 11:47 AM",
                        "comment": "what is that?!"
                    }
                ],
                "closureDate": "",
                "customerName": "Mostafa Mahmoud Mohamed",
                "customerNumber": 700840,
                "ticketNumber": "36223184",
                "creationDate": "15-06-2017 05:56 PM",
                "source": "Telephone",
                "title": "Physical Instability",
                "sspStatus": "In Progress",
                "sspType": "ADSL Problem",
                "ttsStatus": "Waiting for response",
                "ttsType": "Physical Instability",
                "ttsSubReason": "MV- Change Main Wire",
                "platform": "ADSL"
            }
    }
    ;


    // adapter:SSPServicesAdapter
    // procedure:getCustomerInvoices
    // compressResponse:
    //     parameters:["2404133"]
    public static  getCustomerInvoices={
        "customerInvoicesHistory": [
            {"invoiceNumber":85824110,"invoiceDate":"28/6/2017","invoiceAmount":140.0,"paid":true,"renewalDate":"22/07/2017","subscrip":{"productList":[],"adslDownSpeed":0,"adslUpspeed":0,"adslLimitationTypeId":0,"canUpdateInTheMiddle":false,"haveCPE":false,"haveOptionPack":false},"receipts":[]},
            {"invoiceNumber":83261873,"invoiceDate":"29/5/2017","invoiceAmount":140.0,"paid":true,"renewalDate":"22/06/2017","subscrip":{"productList":[],"adslDownSpeed":0,"adslUpspeed":0,"adslLimitationTypeId":0,"canUpdateInTheMiddle":false,"haveCPE":false,"haveOptionPack":false},"receipts":[]},
            {"invoiceNumber":80446126,"invoiceDate":"29/4/2017","invoiceAmount":140.0,"paid":true,"renewalDate":"22/05/2017","subscrip":{"productList":[],"adslDownSpeed":0,"adslUpspeed":0,"adslLimitationTypeId":0,"canUpdateInTheMiddle":false,"haveCPE":false,"haveOptionPack":false},"receipts":[]}
        ],
        "exceptionHandler": {
            "succeded": true,
            "errorMsgEn": "",
            "errorMsgAr": ""
        }
    };

    //
    // adapter:SSPServicesAdapter
    // procedure:getInvoiceDetails
    // compressResponse:
    //     parameters:["2404133","68551287"]
    public static  getInvoiceDetails={"invoiceDetails":{"invoiceNumber":13326786,"invoiceAmount":10.0,"paid":false,"subscrip":{"productList":[{"name":"ADSL Option Pack 1 - 1 Month","startDate":1324418400000,"endDate":1327010400000,"startDateString":"21/12/2011","endDateString":"20/01/2012","id":0,"packageId":0}],"adslDownSpeed":0,"adslUpspeed":0,"adslLimitationTypeId":0,"canUpdateInTheMiddle":false,"haveCPE":false,"haveOptionPack":false},"receipts":[{"receiptNumber":12217700,"collectionNumber":"J032012","amount":10.0,"originalAmount":0.0,"receiptDate":"20/3/2012"}]}};


    public static  getAreaCodes={
        "areaCodesList": [
            {
                "id": 1,
                "areaCode": "2",
                "nameAr": "2 - القاهرة",
                "nameEn": "2 - Cairo"
            },
            {
                "id": 2,
                "areaCode": "3",
                "nameAr": "3 - الأسكندرية",
                "nameEn": "3 - Alexandria"
            },
            {
                "id": 4,
                "areaCode": "40",
                "nameAr": "40 - الغربية",
                "nameEn": "40 - Al Gharbya"
            },
            {
                "id": 5,
                "areaCode": "88",
                "nameAr": "88 - أسيوط",
                "nameEn": "88 - Assiut"
            },
            {
                "id": 6,
                "areaCode": "97",
                "nameAr": "97 - أسوان",
                "nameEn": "97 - Aswan"
            },
            {
                "id": 7,
                "areaCode": "45",
                "nameAr": "45 - البحيرة",
                "nameEn": "45 - Behira"
            },
            {
                "id": 8,
                "areaCode": "82",
                "nameAr": "82 - بني سويف",
                "nameEn": "82 - Beni Souif"
            },
            {
                "id": 9,
                "areaCode": "50",
                "nameAr": "50 - الدقهلية",
                "nameEn": "50 - Dakahliya "
            },
            {
                "id": 10,
                "areaCode": "57",
                "nameAr": "57 - دمياط",
                "nameEn": "57 - Damietta"
            },
            {
                "id": 11,
                "areaCode": "84",
                "nameAr": "84 - الفيوم",
                "nameEn": "84 - Fayoum"
            },
            {
                "id": 12,
                "areaCode": "64",
                "nameAr": "64 - الإسماعيلية",
                "nameEn": "64 - Ismalia"
            },
            {
                "id": 13,
                "areaCode": "47",
                "nameAr": "47 - كفر الشيخ",
                "nameEn": "47 - Kafr El-Sheikh"
            },
            {
                "id": 14,
                "areaCode": "95",
                "nameAr": "95 - الأقصر",
                "nameEn": "95 - Luxor"
            },
            {
                "id": 15,
                "areaCode": "46",
                "nameAr": "46 - مطروح",
                "nameEn": "46 - Matroh"
            },
            {
                "id": 16,
                "areaCode": "86",
                "nameAr": "86 - المنيا",
                "nameEn": "86 - Menia"
            },
            {
                "id": 17,
                "areaCode": "48",
                "nameAr": "48 - المنوفية",
                "nameEn": "48 - Menoufia"
            },
            {
                "id": 18,
                "areaCode": "68",
                "nameAr": "68 - شمال سيناء",
                "nameEn": "68 - North Sinai"
            },
            {
                "id": 19,
                "areaCode": "66",
                "nameAr": "66 - بور سعيد",
                "nameEn": "66 - Port Said"
            },
            {
                "id": 20,
                "areaCode": "13",
                "nameAr": "13 - القليوبية",
                "nameEn": "13 - Qaliobia"
            },
            {
                "id": 21,
                "areaCode": "96",
                "nameAr": "96 - قنا",
                "nameEn": "96 - Quina"
            },
            {
                "id": 22,
                "areaCode": "65",
                "nameAr": "65 - البحر الأحمر",
                "nameEn": "65 - Red Sea"
            },
            {
                "id": 23,
                "areaCode": "55",
                "nameAr": "55 - الشرقية",
                "nameEn": "55 - Sharkia"
            },
            {
                "id": 24,
                "areaCode": "93",
                "nameAr": "93 - سوهاج",
                "nameEn": "93 - Souhag"
            },
            {
                "id": 25,
                "areaCode": "69",
                "nameAr": "69 - جنوب سيناء",
                "nameEn": "69 - South Sinai"
            },
            {
                "id": 26,
                "areaCode": "62",
                "nameAr": "62 - السويس",
                "nameEn": "62 - Suez"
            },
            {
                "id": 28,
                "areaCode": "92",
                "nameAr": "92 - الوادي الجديد",
                "nameEn": "92 - Wadi Gadid"
            },
            {
                "id": 29,
                "areaCode": "55",
                "nameAr": "55 - العاشر من رمضان",
                "nameEn": "55 - 10th of Ramadan"
            }
        ]
    }


    public static  setCustomerInformation={
        "contactInfoUpdated": true
    };

    public static  sendVerificationSMS={
        "sendStatus": "success"
    }

    public static  getCPETypes={
        "CPETypesList": [
            {
                "cpeInstallationFees": 75,
                "cpe_ID": 323,
                "cpeName": "4 Port Wireless Router",
                "cpeDesc": "hardware desc",
                "selected": true,
                "cpeDescAr": "راوتر لاسلكي + 4مخارج"
            },
            {
                "cpeInstallationFees": 75,
                "cpe_ID": 140,
                "cpeName": "1 Port Router",
                "cpeDesc": "hardware trying",
                "selected": true,
                "cpeDescAr": "راوتر ايثرنت"
            },
            {
                "cpeInstallationFees": 0,
                "cpe_ID": 495,
                "cpeName": "Backup Battery – Sales",
                "cpeDesc": "NetSaver Desc",
                "selected": true
            }
        ]
    }

    public static  getCPETypesByCustomer={
        "cpeSalesTypeList": {
            "cpeSalesTypeByCustomerDtos": [
                {
                    "selected": false,
                    "cpePrice": 150,
                    "cpeTypeID": 140,
                    "cpeTypeName": "CPE Ethernet - Sales"
                },
                {
                    "selected": false,
                    "cpePrice": 250,
                    "cpeTypeID": 323,
                    "cpeTypeName": "CPE 4-port Wireless - Sales"
                },
                {
                    "selected": false,
                    "cpePrice": 500,
                    "cpeTypeID": 495,
                    "cpeTypeName": "Backup Battery – Sales"
                }
            ],
            "requestLogId": 201232253
        }
    }

    public static  getCPELogging={
        "requestLog": {
            "id": 201232253,
            "createdOn": 1502703970776,
            "customerNumber": "1496399",
            "hasPayment": false,
            "username": "revampuser",
            "requestStatusId": 0,
            "requestTypeId": 10,
            "responseStatusId": 0,
            "origin": 2
        }
    }

    public static  getCPEBankURL={
        "bankUrl": "http://192.168.129.30:9080/net.tedata.topG.ui/ViewPaymentWidget?transactionHashCode=53669de234e052dc9f25d85f43cbbb32"
    }

    public static getOptionPackInfo={
        "eligibleToOptionPack": false,
        "adslServiceStatus": true,
        "optionPackList": {
            "availableOptionPackList": [
                {
                    "optionPackPackageId": 4093,
                    "optionPackPackageName": "Business ADSL Option Pack 1 - 10 Months",
                    "price": 100,
                    "monthDuration": 10,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 1",
                    "optionPackPackageTypeid": 71
                },
                {
                    "optionPackPackageId": 4094,
                    "optionPackPackageName": "Business ADSL Option Pack 1 - 11 Months",
                    "price": 110,
                    "monthDuration": 11,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 1",
                    "optionPackPackageTypeid": 71
                },
                {
                    "optionPackPackageId": 4095,
                    "optionPackPackageName": "Business ADSL Option Pack 1 - 12 Months",
                    "price": 120,
                    "monthDuration": 12,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 1",
                    "optionPackPackageTypeid": 71
                },
                {
                    "optionPackPackageId": 4096,
                    "optionPackPackageName": "Business ADSL Option Pack 1 - 1 Month",
                    "price": 10,
                    "monthDuration": 1,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 1",
                    "optionPackPackageTypeid": 71
                },
                {
                    "optionPackPackageId": 4097,
                    "optionPackPackageName": "Business ADSL Option Pack 1 - 2 Month",
                    "price": 20,
                    "monthDuration": 2,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 1",
                    "optionPackPackageTypeid": 71
                },
                {
                    "optionPackPackageId": 4098,
                    "optionPackPackageName": "Business ADSL Option Pack 1 - 3 Months",
                    "price": 30,
                    "monthDuration": 3,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 1",
                    "optionPackPackageTypeid": 71
                },
                {
                    "optionPackPackageId": 4099,
                    "optionPackPackageName": "Business ADSL Option Pack 1 - 4 Months",
                    "price": 40,
                    "monthDuration": 4,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 1",
                    "optionPackPackageTypeid": 71
                },
                {
                    "optionPackPackageId": 4100,
                    "optionPackPackageName": "Business ADSL Option Pack 1 - 5 Months",
                    "price": 50,
                    "monthDuration": 5,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 1",
                    "optionPackPackageTypeid": 71
                },
                {
                    "optionPackPackageId": 4101,
                    "optionPackPackageName": "Business ADSL Option Pack 1 - 6 Months",
                    "price": 60,
                    "monthDuration": 6,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 1",
                    "optionPackPackageTypeid": 71
                },
                {
                    "optionPackPackageId": 4102,
                    "optionPackPackageName": "Business ADSL Option Pack 1 - 7 Months",
                    "price": 70,
                    "monthDuration": 7,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 1",
                    "optionPackPackageTypeid": 71
                },
                {
                    "optionPackPackageId": 4103,
                    "optionPackPackageName": "Business ADSL Option Pack 1 - 8 Months",
                    "price": 80,
                    "monthDuration": 8,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 1",
                    "optionPackPackageTypeid": 71
                },
                {
                    "optionPackPackageId": 4104,
                    "optionPackPackageName": "Business ADSL Option Pack 1 - 9 Months",
                    "price": 90,
                    "monthDuration": 9,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 1",
                    "optionPackPackageTypeid": 71
                },
                {
                    "optionPackPackageId": 4105,
                    "optionPackPackageName": "Business ADSL Option Pack 2 - 10 Months",
                    "price": 500,
                    "monthDuration": 10,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 2",
                    "optionPackPackageTypeid": 281
                },
                {
                    "optionPackPackageId": 4106,
                    "optionPackPackageName": "Business ADSL Option Pack 2 - 11 Months",
                    "price": 550,
                    "monthDuration": 11,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 2",
                    "optionPackPackageTypeid": 281
                },
                {
                    "optionPackPackageId": 4107,
                    "optionPackPackageName": "Business ADSL Option Pack 2 - 12 Months",
                    "price": 600,
                    "monthDuration": 12,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 2",
                    "optionPackPackageTypeid": 281
                },
                {
                    "optionPackPackageId": 4108,
                    "optionPackPackageName": "Business ADSL Option Pack 2 - 1 Month",
                    "price": 50,
                    "monthDuration": 1,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 2",
                    "optionPackPackageTypeid": 281
                },
                {
                    "optionPackPackageId": 4109,
                    "optionPackPackageName": "Business ADSL Option Pack 2 - 2 Month",
                    "price": 100,
                    "monthDuration": 2,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 2",
                    "optionPackPackageTypeid": 281
                },
                {
                    "optionPackPackageId": 4110,
                    "optionPackPackageName": "Business ADSL Option Pack 2 - 3 Months",
                    "price": 150,
                    "monthDuration": 3,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 2",
                    "optionPackPackageTypeid": 281
                },
                {
                    "optionPackPackageId": 4111,
                    "optionPackPackageName": "Business ADSL Option Pack 2 - 4 Months",
                    "price": 200,
                    "monthDuration": 4,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 2",
                    "optionPackPackageTypeid": 281
                },
                {
                    "optionPackPackageId": 4112,
                    "optionPackPackageName": "Business ADSL Option Pack 2 - 5 Months",
                    "price": 250,
                    "monthDuration": 5,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 2",
                    "optionPackPackageTypeid": 281
                },
                {
                    "optionPackPackageId": 4113,
                    "optionPackPackageName": "Business ADSL Option Pack 2 - 6 Months",
                    "price": 300,
                    "monthDuration": 6,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 2",
                    "optionPackPackageTypeid": 281
                },
                {
                    "optionPackPackageId": 4114,
                    "optionPackPackageName": "Business ADSL Option Pack 2 - 7 Months",
                    "price": 350,
                    "monthDuration": 7,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 2",
                    "optionPackPackageTypeid": 281
                },
                {
                    "optionPackPackageId": 4115,
                    "optionPackPackageName": "Business ADSL Option Pack 2 - 8 Months",
                    "price": 400,
                    "monthDuration": 8,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 2",
                    "optionPackPackageTypeid": 281
                },
                {
                    "optionPackPackageId": 4116,
                    "optionPackPackageName": "Business ADSL Option Pack 2 - 9 Months",
                    "price": 450,
                    "monthDuration": 9,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 2",
                    "optionPackPackageTypeid": 281
                },
                {
                    "optionPackPackageId": 4117,
                    "optionPackPackageName": "Business ADSL Option Pack 3 - 10 Months",
                    "price": 1000,
                    "monthDuration": 10,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 3",
                    "optionPackPackageTypeid": 282
                },
                {
                    "optionPackPackageId": 4118,
                    "optionPackPackageName": "Business ADSL Option Pack 3 - 11 Months",
                    "price": 1100,
                    "monthDuration": 11,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 3",
                    "optionPackPackageTypeid": 282
                },
                {
                    "optionPackPackageId": 4119,
                    "optionPackPackageName": "Business ADSL Option Pack 3 - 12 Months",
                    "price": 1200,
                    "monthDuration": 12,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 3",
                    "optionPackPackageTypeid": 282
                },
                {
                    "optionPackPackageId": 4120,
                    "optionPackPackageName": "Business ADSL Option Pack 3 - 1 Month",
                    "price": 100,
                    "monthDuration": 1,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 3",
                    "optionPackPackageTypeid": 282
                },
                {
                    "optionPackPackageId": 4121,
                    "optionPackPackageName": "Business ADSL Option Pack 3 - 2 Month",
                    "price": 200,
                    "monthDuration": 2,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 3",
                    "optionPackPackageTypeid": 282
                },
                {
                    "optionPackPackageId": 4122,
                    "optionPackPackageName": "Business ADSL Option Pack 3 - 3 Months",
                    "price": 300,
                    "monthDuration": 3,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 3",
                    "optionPackPackageTypeid": 282
                },
                {
                    "optionPackPackageId": 4123,
                    "optionPackPackageName": "Business ADSL Option Pack 3 - 4 Months",
                    "price": 400,
                    "monthDuration": 4,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 3",
                    "optionPackPackageTypeid": 282
                },
                {
                    "optionPackPackageId": 4124,
                    "optionPackPackageName": "Business ADSL Option Pack 3 - 5 Months",
                    "price": 500,
                    "monthDuration": 5,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 3",
                    "optionPackPackageTypeid": 282
                },
                {
                    "optionPackPackageId": 4125,
                    "optionPackPackageName": "Business ADSL Option Pack 3 - 6 Months",
                    "price": 600,
                    "monthDuration": 6,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 3",
                    "optionPackPackageTypeid": 282
                },
                {
                    "optionPackPackageId": 4126,
                    "optionPackPackageName": "Business ADSL Option Pack 3 - 7 Months",
                    "price": 700,
                    "monthDuration": 7,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 3",
                    "optionPackPackageTypeid": 282
                },
                {
                    "optionPackPackageId": 4127,
                    "optionPackPackageName": "Business ADSL Option Pack 3 - 8 Months",
                    "price": 800,
                    "monthDuration": 8,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 3",
                    "optionPackPackageTypeid": 282
                },
                {
                    "optionPackPackageId": 4128,
                    "optionPackPackageName": "Business ADSL Option Pack 3 - 9 Months",
                    "price": 900,
                    "monthDuration": 9,
                    "promotionID": 26,
                    "promotionName": "Business Unlimited ADSL - Standard Offering",
                    "optionPackPackageTypeName": "ADSL Option Pack 3",
                    "optionPackPackageTypeid": 282
                }
            ],
            "reqLogID": "201232047"
        }
    }
    public  static checkUserAdslStatus={"adslServiceStatus": false};
}