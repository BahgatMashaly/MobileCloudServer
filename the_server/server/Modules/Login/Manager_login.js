
//var Cluster = require('cluster');
var ADO = require('../../Libs/ADO');

function LoginManager() {
    
 

}

LoginManager.prototype.Login = function (req, res) {
    try {
         
       // Number(req.query["the_id"])
        var json_parameter = { student_login_name:  req.query.student_login_name, student_password : req.query.student_password }
        //this.ADO.ExecuteReader("select * from table1 where the_id>=:the_id and the_name like :the_name " , json_parameter, function (err, rows, fields) {
         
        ADO.ExecuteReader("select * from  t_students where student_login_name =@student_login_name and student_password  = @student_password ", json_parameter, function (err, result)
             {
            
            if (err) {
                res.status(500).send({ message: err.message});
                return;
            }
            if (result.length == 1) {
                
                var student_id = result[0].student_id;
                ADO.ExecuteReader("select [multiblechoise_id],[multiblechoise_text],[multiblechoise_question_id_fr],[multiblechoise_is_right_answer] "
+ " , [question_id], [question_text], [question_Exam_id_fr] "
           +"     from [dbo].[t_multiblechoises] join [dbo].[t_questions] on [multiblechoise_question_id_fr] = [question_id] "
             +"   join [dbo].[t_Exams] on  [question_Exam_id_fr] = [Exam_name] "
              +"  where  [Exam_active_or_not] = 1", null, function (err, result) {
                    
                    function convert(array) {
                      //  var root = {};
                        var map = {};
                        for (var i = 0; i < array.length; i++) {
                            var obj = array[i];
                           // obj.children  = [];
                            
                         //   map[obj.multiblechoise_id] = obj;
                            var level1 = obj.question_Exam_id_fr;
                            if (!map[level1]) { 
                                map[level1] = {
                                    Questions : []
                                };
                            }
                             
                           // var result = $.grep(myArray, function (e) { return e.multiblechoise_question_id_fr == obj.multiblechoise_question_id_fr ; });
                            
                            var current_level2 = map[level1].Questions.filter(function (v) {
                                return v.Question_ID === obj.multiblechoise_question_id_fr ; // filter out appropriate one
                            })[0];
                            
                      //      obj = _.find(map[level1].Questions, function (obj) { return e.multiblechoise_question_id_fr == obj.multiblechoise_question_id_fr })

                             ;

                            if (!current_level2) {
                                map[level1].Questions.push({ Question_ID: obj.multiblechoise_question_id_fr, Question_Text: obj.question_text  , previousUseAnswerID: null, multibleChoise: [] });
                                
                                var current_level2 = map[level1].Questions.filter(function (v) {
                                    return v.Question_ID === obj.multiblechoise_question_id_fr; // filter out appropriate one
                                })[0];
                            }
                            
                             
                            current_level2.multibleChoise.push(obj);
                            
                            
                        }
                        
                        return map;

                    }
                    
                    var ExamAndQuestionsAndMulti = convert(result);
                    
                    var json_parameter = { exam_id: Object.keys(ExamAndQuestionsAndMulti)[0], answer_student_id_fr : student_id }
                    ADO.ExecuteReader(" select * from t_answers where answer_exam_id_fr=@exam_id and answer_student_id_fr = @answer_student_id_fr  ", json_parameter, function (err, result) {
                        if (err) {
                            res.status(500).send({ message: err.message });
                            return;
                        }
                        
                      
                        for (var i = 0; i < result.length; i++) {
                          //  var xx = ExamAndQuestionsAndMulti[Object.keys(ExamAndQuestionsAndMulti)[0]]["Questions"];
                            
                             ExamAndQuestionsAndMulti[Object.keys(ExamAndQuestionsAndMulti)[0]]["Questions"].filter(function (v) { 
                                if (v.Question_ID === result[i].answer_question_id_fr) {
                                    v.previousUseAnswerID = result[i].answer_multiblechoise_id_fr;
                                }
                            });

                            //var cc = xx;
                        }
                       

                        res.send({ 'student_id': student_id, 'ExamData': ExamAndQuestionsAndMulti });

                    });
                     
                   

                });
            }
            else {
                if (result.length == 0) {
                    res.status(404).send({ message:"Error:User Not Found."});
                 
                }
                else {
                    res.status(500).send({ message: "Error:more user used the same login name." });
                    
                }
               
                 
            }
           
        })
       
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
};


 

//module.exports = new LoginManager(null); //defualt1111111111111111
//call with
//var logger1 = require('./logger');
//logger1.log('This is an informational message');

 module.exports.newInstance = LoginManager;
//call with
//var logger = require('./logger');
//var logger3_new_instance = new logger.newLoggerInstance('kkk');
////var logger3_new_instance =    logger.__proto__ ; لم تعمل
//logger3_new_instance.namex = "44444444444"

 