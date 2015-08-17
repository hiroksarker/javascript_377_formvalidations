/*JS Validaiton Code*/
function validateForm() {
    'use strict';
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        var parent = inputs[i].parentElement;
        var errmessage = document.getElementById(inputs[i].id + 'errmsg');
        if (inputs[i].value === "") {
            var newNode = document.createElement('span');
            newNode.id = inputs[i].id + 'errmsg';
            newNode.innerHTML = inputs[i].getAttribute("data-val") + " is required.";
            newNode.style.color = 'red';
            if (errmessage !== null) {
                parent.removeChild(errmessage);
            }
            parent.appendChild(newNode);

        } else {

            if (errmessage !== null) {
                parent.removeChild(errmessage);
            }
        }
    }
    if (passWord.value !== passConf.value) {
        alert("Password not matched");
    }

}
validateForm(onclick.load);