var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    "user_id": Number,
    token : String ,
    "first_name": String,
    "last_name": String,
    "email": String ,
    "id_login_to_adminPage_privilege_id": Number,
    "id_New_privilege_id": Number,
    "id_Edit_privilege_id": Number,
    "id_Delete_privilege_id": Number,
    "id_change_admin_pass_privilege_id": Number
     
});
 
module.exports = mongoose.model('users', userSchema);    