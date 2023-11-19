var input_name=document.querySelector('.name_text');

input_name.onblur = () => {
    let username = input_name.value;
    if (username.length == 0){
        document.querySelector('.error_name').innerHTML ='Name cannot blank';
    } else if (username.length < 3 || 25 < username.length){
        document.querySelector('.error_name').innerHTML='Name must be between 3 and 25';
    } else {
         document.querySelector('.error_name').innerHTML=" ";
    }
}



$(document).ready(function(){
$( ".email_text" ).focusout(function() {
    var inputvalue = $(this).val();
    var regemail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if((!regemail.test(inputvalue)) && (inputvalue!='')){
        document.querySelector('.error_email').innerHTML="Email is not valid. It should be in the format 'email@domain.com'";
    }else if(inputvalue == ''){
        document.querySelector('.error_email').innerHTML="Email cannot blank";
    }else{
        document.querySelector('.error_email').innerHTML=" ";
}
});

$('.phone_text').focusout(function() {
    var phone = $(this).val();
    var regtel = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    if(!regtel.test(phone)){
        document.querySelector('.error_phone').innerHTML="Phone is not valid";
    }else if (phone==" "){
        document.querySelector('.error_phone').innerHTML="Email cannot blank";
    }else{
        document.querySelector('.error_phone').innerHTML=" ";
    }
});
});

var mestext=document.querySelector('.massage-bt')

mestext.onblur = () => {
    let usermes = mestext.value;
    if (usermes.length == 0){
        document.querySelector('.error_mes').innerHTML ='Massage cannot blank';
    } else if (usermes.length < 10 || 250 < usermes.length){
        document.querySelector('.error_mes').innerHTML='Name must be between 10 and 250';
    } else {
         document.querySelector('.error_mes').innerHTML=" ";
    }
};


const form = document.getElementById("send_form");

form.onclick=function(){
    document.querySelector('.name_text').value='';
    document.querySelector('.email_text').value='';
    document.querySelector('.phone_text').value='';
    document.querySelector('.massage-bt').value='';
};


$(document).ready(function(){
$( ".email_end" ).focusout(function() {
    var mail_value = $(this).val();
    var reg_mail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if((!reg_mail.test(mail_value)) && (mail_value!='')){
        document.querySelector('.email_error').innerHTML="Email is not valid. It should be in the format 'email@domain.com'";
    }else if(mail_value == ''){
        document.querySelector('.email_error').innerHTML="Email cannot blank";
    } else {
        document.querySelector('.email_error').innerHTML=" ";
    }
});
});

document.getElementById("send-email").onclick=function(){
     document.querySelector('.email_end').value='';
}
