/*JS Validaiton Code*/
function validateForm() {
	"use strict";
    if (document.validate.userName.value === "") {
        erruser.style.visibility = "visible";
    } else {
        erruser.style.visibility = "hidden";
    }

    if (document.validate.passWord.value === "") {
        errpass.style.visibility = "visible";
    } else {
        errpass.style.visibility = "hidden";
    }

    if (document.validate.passConf.value === "") {
        errpassconf.style.visibility = "visible";
    } else {
        errpassconf.style.visibility = "hidden";
    }
    if (passWord.value !== passConf.value) {
        alert("Password not matched");
    }	

    if (document.validate.fname.value === "") {
        errfirst.style.visibility = "visible";
    } else {
        errfirst.style.visibility = "hidden";
    }	

    if (document.validate.lname.value === "") {
        errlast.style.visibility = "visible";
    } else {
        errlast.style.visibility = "hidden";
    }

    if (document.validate.emailCheck.value === "") {
        errmail.style.visibility = "visible";
    } else {
        errmail.style.visibility = "hidden";
    }
}