const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const submit = document.getElementById('submit');
const form = document.getElementById('form');
const demo = document.getElementById('demo');

function validation(e){
    var text;
    if(name.value===''){
        text = "Name Cannot be empty";
        console.log(text);
        demo.innerHTML = text;
        name.focus();
        return false;
    }
    if(email.value===''){
        text = "Email Cannot be empty";
        console.log(text);
        demo.innerHTML = text;
        email.focus();
        return false;
    }
    var emaiId = email.value;
    let atpos = emaiId.indexOf('@');
    let dotpos = emaiId.indexOf('.');
    if(atpos<1 && (dotpos-atpos)<2){
        text = "Please Enter Valid Email id";
        demo.innerHTML = text;
        console.log(text);
        email.focus();
        return false;
    }
    if(phone.value==='' || isNaN(phone.value)|| phone.value.length!=10){
        text = "please enter 10 digit of mobile no";
        console.log(text);
        demo.innerHTML = text;
        phone.focus();
        return false;
    }
    if(subject.value == "0" ) {
        text = "Please provide your area of expertise";
        console.log(text);
        demo.innerHTML = text;
        return false;
     }




    return true;
    


}


form.addEventListener('submit',validation);
