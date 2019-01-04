var SV = require('../SV');
module.exports = function (app, appEnv_shared_opject_option)
{

    var  tcp_sender= require('../Modules/tcpSender/tcpSenderRoutes');
    app.use('/tcp_sender',new tcp_sender(app).Router  );



    var  devicesServerFrontEnd= require('../Modules/devicesServerFrontEnd/devicesServerFrontEndRoutes');
    app.use('/devicesServerFrontEnd',new devicesServerFrontEnd(app).Router  );


    var  pushNotificationServerFrontEnd= require('../Modules/pushNotificationServerFrontEnd/pushNotificationServerFrontEndRoutes');
    app.use('/pushNotificationServerFrontEnd',new pushNotificationServerFrontEnd(app).Router  );


    var  MySocketSender= require('../Modules/socketSender/socketSenderRoutes');
    app.use('/SocketSender',new MySocketSender(app).Router  );



    app.use('/project_customer_customers_info_urls',require('../Modules/ProjectsServerFrontEnd/project_customer_customers_info_urls/project_customer_customers_info_urls_routes' ) );


    app.use('/pushNotificatonRegistrationInfo',require('../Modules/MobilePushNotification/MobilePushNotificatonRouets' ) );

    app.use('/updatemobileproject',   require('../Modules/MobileServerUpdate/MobileServerUpdateRoutes'));

    app.use('/Projects',   require('../Modules/ProjectsServerFrontEnd/ProjectsServerFrontEndRoutes'));


  //  app.use('/Routes',   require('../Modules/Buses_Routes/Buses_RoutesRoutes'));

    var login = require('../Modules/Login/LoginRoutes');
    app.use('/', login.Router);
 
    //app.use('/Exams', globalVariables.check_token_and_user_and_session,globalVariables.check_user_Athontcation('id_login_to_adminPage_privilege_id'), require('../Modules/Exams/ExamsRoutes'));
 // app.use('/questions', globalVariables.check_token_and_user_and_session, globalVariables.check_user_Athontcation('id_login_to_adminPage_privilege_id'), require('../Modules/questions/questionsRoutes'));
    
   // app.use('/students', globalVariables.check_token_and_user_and_session, globalVariables.check_user_Athontcation('id_login_to_adminPage_privilege_id'), require('../Modules/students/studentsRoutes'));
    

    
    
   // var answer = require('../Modules/Answers/Router_Answers');
   // app.use('/Answer', answer.Router);
    
   // var  DataVersion = require('../Modules/DataVersion/Router_DataVersion');
   // app.use('/DataVersion', DataVersion.Router);
    
   // var Result = require('../Modules/Result/Router_Result');
   // Result = new Result(app);
   // app.use('/Result', Result.Router);




}