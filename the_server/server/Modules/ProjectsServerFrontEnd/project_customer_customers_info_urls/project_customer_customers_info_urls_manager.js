var ADO = require('../../../MyLib/ADO');
 
function project_customer_customers_info_urls_manager() {
    
 

}


project_customer_customers_info_urls_manager.getbyID=function (req, res)   {

    try {

        // http://localhost:4000/answer?answer_student_id_fr=1&answer_exam_id_fr=Exam1&answer_question_id_fr=1&answer_multiblechoise_id_fr=1


        ADO.ExecuteReader("select * from project_customer_customers_info_urls where project_id=:project_id" , req.params, function (err, result, fields) {
            if (err) {
                res.status(500).send({ message: err.message });
                return;
            }
            else {
                res.json(result)
            }




        });


    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
}
project_customer_customers_info_urls_manager.update = function (req, res) {
    
    try {
        ADO.ExecuteNonQuery("update  project_customer_customers_info_urls set url_full_path = :url_full_path , url_name_description = :url_name_description  where url_id=:url_id  " , req.body, function (err, result, fields) {
            if (err) {
                res.status(500).send({ message: err.message });
                return;
            }
            else {
                res.json(result)
            }
        });
      
       
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
}


project_customer_customers_info_urls_manager.delete = function (req, res) {
    
    try {
        
        
        ADO.ExecuteNonQuery("delete from  project_customer_customers_info_urls  where url_id = :url_id " , req.body , function (err, result, fields) {
            if (err) {
                res.status(500).send({ message: err.message });
                return;
            }
            else {
                res.json(result)
            }

           

             
        });
      
       
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
}

project_customer_customers_info_urls_manager.insert = function (req, res) {
    
    try {

        ADO.ExecuteNonQuery("insert into   project_customer_customers_info_urls  (project_id,url_name_description,url_full_path) values(:project_id,:url_name_description,:url_full_path)" , req.body , function (err, result, fields) {
            if (err) {

                res.status(500).send({ message: err.message });
                return;
            }
            else {
                res.json(result)
            }

           

             
        });
      
       
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
}


//module.exports = new LoginManager(null); //defualt1111111111111111
//call with
//var logger1 = require('./logger');
//logger1.log('This is an informational message');

module.exports = project_customer_customers_info_urls_manager;
//call with
//var logger = require('./logger');
//var logger3_new_instance = new logger.newLoggerInstance('kkk');
////var logger3_new_instance =    logger.__proto__ ; لم تعمل
//logger3_new_instance.namex = "44444444444"

 