/*
     Brandon Hess
     10/14/14
     PWA-1
*/

(function(){

    myform.onsubmit = function(e){

        var input_uname = document.querySelector("#f_username");
        var input_email = document.querySelector("#f_email");
        var input_phone = document.querySelector("#f_phone");
        var input_password = document.querySelector("#f_password");
        var input_ssn = document.querySelector("#f_ssn");

        validateField(input_uname);
        validateField(input_email);
        validateField(input_phone);
        validateField(input_password);
        validateField(input_ssn);

        e.preventDefault();
        return false;
    };

    var validateField = function(inputName){

        if(inputName.name === "f_username"){
            var pattern = /^([A-Z][a-z]+)\s([A-Z][a-zA-Z-]+)$/;

        }else if(inputName.name === "f_email"){
            var pattern = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*([,;]\s*\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)*/;

        }else if(inputName.name === "f_phone"){
            var pattern = /^[\\(]{0,1}([0-9]){3}[\\)]{0,1}[ ]?([^0-1]){1}([0-9]){2}[ ]?[-]?[ ]?([0-9]){4}[ ]*((x){0,1}([0-9]){1,5}){0,1}$/;

        }else if(inputName.name === "f_ssn"){
            var pattern = /^\d{3}-\d{2}-\d{4}$/;

        }else if(inputName.name === "f_password"){
            var pattern = /^[a-zA-Z]\w{3,14}$/;

        }

        var pass = pattern.test(inputName.value);
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || inputName.value.length < 2){
            errorMsg.style.display="block";
            inputName.style.backgroundColor = "red";

        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display="none";
            inputName.style.backgroundColor = "green";

        } else {
            errorMsg.style.display="none";
            inputName.style.backgroundColor = "white";

        }
    };

})();
