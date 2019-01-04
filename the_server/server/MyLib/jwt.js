var CryptoJS = require("crypto-js");
function jwt() {
    
     
 

}

jwt.prototype.createJWTToken = function (header, playload, secret_salat) {
    //var header = {};
    //var playload = {};
    //var secret = "";
    
    
    var header_base64 = this.getBase64Encoded(JSON.stringify(header));
    
    var playload_base64 = this.getBase64Encoded(JSON.stringify(playload));
   // var x = this.getBase64Decoded(playload_base64);
    var salat_wordArray = CryptoJS.enc.Base64.parse(secret_salat);
    var signature_word_array = CryptoJS.PBKDF2(header_base64 + "." + playload_base64  , salat_wordArray, { iterations: 10, hasher: CryptoJS.algo.SHA512 });
    // generate 128 bit IV
   // var signature = CryptoJS.hash256(header_base64 + "." + playload_base64 , secret)
    var signature_base64 = CryptoJS.enc.Base64.stringify(signature_word_array);
    
    var jwt =  playload_base64 + "." + signature_base64 +"."+ header_base64;
    
    return jwt;


}


jwt.prototype.getBase64Encoded = function (rowStr) {
   
    var wordArray = CryptoJS.enc.Utf8.parse(rowStr);
  
    var result = CryptoJS.enc.Base64.stringify(wordArray);
    return result;
}


jwt.prototype.getBase64Decoded = function (encStr) {
    var wordArray = CryptoJS.enc.Base64.parse(encStr);
    var result = wordArray.toString(CryptoJS.enc.Utf8)
 
    return result;
}


jwt.prototype.decode = function (token, salat)
{
    var string_array = token.split('.');

    var playload_base64 = string_array[0];
     var signature_base64_temp = string_array[1];
    var header_base64 = string_array[2];
    var playload = this.getBase64Decoded(playload_base64);
    var header = this.getBase64Decoded(header_base64);
    
    var salat_wordArray = CryptoJS.enc.Base64.parse(salat);

    var signature_word_array = CryptoJS.PBKDF2(header_base64 + "." + playload_base64  , salat_wordArray, { iterations: 10, hasher: CryptoJS.algo.SHA512 });
    // generate 128 bit IV
    // var signature = CryptoJS.hash256(header_base64 + "." + playload_base64 , secret)
    var signature_base64 = CryptoJS.enc.Base64.stringify(signature_word_array);
    if (signature_base64_temp != signature_base64) {

        return new Error("problem with signature")
    }

     
    return playload;
}

module.exports = new jwt(); //defualt1111111111111111