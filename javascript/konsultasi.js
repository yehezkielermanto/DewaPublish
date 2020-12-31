/*--------------------------check is input allow number only*/
function isNumberPhone(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}


/*---------------------------check is empty field*/
function CheckName(){
    $('#name').focusout(function(){
        // Get the value and trim it
        var name = $('#name').val().trim();

        // Check if empty of not
        if (name.length > 0) {
            $(".fielderror_1").html("");
            $(".fielderror_1").removeClass('warning');
            $(".col_1").css("border", "1px solid gray");

        } else {
            $(".fielderror_1").html("Data Kosong!");
            $(".fielderror_1").addClass('warning');
            //$(".input_name").addClass('input_name_error').removeClass('border');
            $(".col_1").css("border", "1px solid red");
            $(".col_1").css("border-radius", "3px");
        }
    });
}

function CheckPhone(){
    $('#phone').focusout(function(){

        // Get the value and trim it
        var phone = $('#phone').val().trim();

        // Check if empty of not
        if (phone.length > 0) {
            $(".fielderror_2").html("");
            $(".fielderror_2").removeClass('warning');
            //$(".border_phone").removeClass('border_phone_error');
            $(".col_2").css("border", "1px solid gray");
        } else {
            $(".fielderror_2").html("Data Kosong!");
            $(".fielderror_2").addClass('warning');
            $(".col_2").css("border", "1px solid red");
            $(".col_2").css("border-radius", "3px");
            //$(".border_phone").addClass('border_phone_error');
        }
    });
}

function CheckEmail(){
    $('#email').focusout(function(){

        // Get the value and trim it
        var email = $('#email').val().trim();

        // Check if empty of not
        if (email.length > 0) {
            $(".fielderror_3").html("");
            $(".fielderror_3").removeClass('warning');
            $(".col_3").css("border", "1px solid gray");
            //$(".border_email").removeClass('border_email_error');
        } else {
            $(".fielderror_3").html("Data Kosong!");
            $(".fielderror_3").addClass('warning');
            $(".col_3").css("border", "1px solid red");
            $(".col_3").css("border-radius", "3px");
            //$(".border_email").addClass('border_email_error');
        }
    });
}

function CheckAge(){
    $('#age').focusout(function(){

        // Get the value and trim it
        var age = $('#age').val().trim();

        // Check if empty of not
        if (age.length > 0) {
            $(".fielderror_4").html("");
            $(".fielderror_4").removeClass('warning');
            $(".col_4").css("border", "1px solid gray");
            //$(".border_email").removeClass('border_email_error');
        } else {
            $(".fielderror_4").html("Data Kosong!");
            $(".fielderror_4").addClass('warning');
            $(".col_4").css("border", "1px solid red");
            $(".col_4").css("border-radius", "3px");
            //$(".border_email").addClass('border_email_error');
        }
    });
}

function CheckTitle(){
    $('#title').focusout(function(){

        // Get the value and trim it
        var title = $('#title').val().trim();

        // Check if empty of not
        if (title.length > 0) {
            $(".fielderror_6").html("");
            $(".fielderror_6").removeClass('warning');
            $(".col_6").css("border", "1px solid gray");
            //$(".border_email").removeClass('border_email_error');
        } else {
            $(".fielderror_6").html("Data Kosong!");
            $(".fielderror_6").addClass('warning');
            $(".col_6").css("border", "1px solid red");
            $(".col_6").css("border-radius", "3px");
            //$(".border_email").addClass('border_email_error');
        }
    });
}

function CheckProblem(){
    $('#problem').focusout(function(){

        // Get the value and trim it
        var problem = $('#problem').val().trim();

        // Check if empty of not
        if (problem.length > 0) {
            $(".fielderror_7").html("");
            $(".fielderror_7").removeClass('warning');
            $(".col_7").css("border", "1px solid gray");
            //$(".border_email").removeClass('border_email_error');
        } else {
            $(".fielderror_7").html("Data Kosong!");
            $(".fielderror_7").addClass('warning');
            $(".col_7").css("border", "1px solid red");
            $(".col_7").css("border-radius", "3px");
            //$(".border_email").addClass('border_email_error');
        }
    });
}

/*---------------------------------check checkbox selection*/
function Check(){
    var checked =  0;
    var chkjobs = document.getElementById('jobs');
    var chks = jobs.getElementsByTagName('INPUT');
    var mydiv = document.getElementById('button');
   
    for (var i = 0; i < chks.length; i++) {
        if (chks[i].checked){
            checked++;
        }
    }

    if( checked > 0){
        $(".fielderror_5").html("");
        $(".fielderror_5").removeClass('warning');
        $(".border_jobs").css("border", "none");
        document.getElementById('button').disabled = false;
        mydiv.classList.add('button_1');
        mydiv.classList.add('button_active'); 
    }else if(checked < 1){
        $(".fielderror_5").html("Pilihan Kosong!");
        $(".fielderror_5").addClass('warning');
        $(".border_jobs").css("border", "1px solid red");
        $(".border_jobs").css("border-radius", "3px");

    }if(checked > 0 && document.getElementById("name").value!="" &&
        document.getElementById("phone").value!="" &&
        document.getElementById("email").value!="" &&
        document.getElementById("age").value!="" &&
        document.getElementById("title").value!="" &&
        document.getElementById("problem").value!=""&&
        ((document.getElementById("gender_wanita").checked) ||
        (document.getElementById("gnder_pria").checked) ||
        (document.getElementById("gender_lainnya").checked))){
        //alert(checked + "checkbox are checked");
        document.getElementById('button').disabled = false;
        mydiv.classList.add('button_1');
        mydiv.classList.add('button_active');       
    }else{
        document.getElementById('button').disabled = true;
        mydiv.classList.remove('button_1');
        mydiv.classList.remove('button_active');
        
    }
};

/*check onpress up-----------------------------------*/
function stopedtype() {
    var mydiv = document.getElementById('button');

    if(document.getElementById("name").value!="" &&
        document.getElementById("phone").value!="" &&
        document.getElementById("email").value!="" &&
        document.getElementById("age").value!="" &&
        document.getElementById("title").value!="" &&
        document.getElementById("problem").value!=""
        ) { 
            document.getElementById('button').disabled = false;
            mydiv.classList.add('button_1');
            mydiv.classList.add('button_active'); 
        }
        else{
            document.getElementById('button').disabled = true;
            mydiv.classList.remove('button_1');
            mydiv.classList.remove('button_active'); 
        }
}

/*----------------------------------------check radio button*/
function radio_gender(){
    var mydiv = document.getElementById('button');
    var chkjobs = document.getElementById('jobs');
    var chks = jobs.getElementsByTagName('INPUT');
    var checked = 0;

    for (var i = 0; i < chks.length; i++) {
        if (chks[i].checked){
            checked++;
        }
    }

    if(((document.getElementById("gender_wanita").checked)||
        (document.getElementById("gender_pria").checked)||
        (document.getElementById("gender_lainnya").checked))){
        $(".fielderror_8").html("");
        $(".fielderror_8").removeClass('warning');
        $(".border_gender").css("border", "none");
        document.getElementById('button').disabled = false;
    }else{
        $(".fielderror_8").html("Pilihan Kosong!");
        $(".fielderror_8").addClass('warning');
        $(".border_gender").css("border", "1px solid red");
        $(".border_gender").css("border-radius", "3px");
    }if(((document.getElementById("gender_wanita").checked) ||
        (document.getElementById("gender_pria").checked) ||
        (document.getElementById("gender_lainnya").checked)) &&
        checked > 0 && document.getElementById("name").value!="" &&
        document.getElementById("phone").value!="" &&
        document.getElementById("email").value!="" &&
        document.getElementById("age").value!="" &&
        document.getElementById("title").value!="" &&
        document.getElementById("problem").value!=""){
        
        document.getElementById('button').disabled = false;
        mydiv.classList.add('button_1');
        mydiv.classList.add('button_active');     
    }else{
        document.getElementById('button').disabled = true;
        mydiv.classList.remove('button_1');
        mydiv.classList.remove('button_active');
    }
}

/*--------------------------------------check button*/
function checkValidate(){
    // Get the modal
var modal = document.getElementById("myModal");


    var mydiv = document.getElementById('button');
    var chkjobs = document.getElementById('jobs');
    var chks = jobs.getElementsByTagName('INPUT');
    var checked = 0;

    for (var i = 0; i < chks.length; i++) {
        if (chks[i].checked){
            checked++;
        }
    }

    if(checked > 0){
        $(".fielderror_5").html("");
        $(".fielderror_5").removeClass('warning');
        $(".border_jobs").css("border", "none");
    }if(((document.getElementById("gender_wanita").checked) ||
        (document.getElementById("gender_pria").checked) ||
        (document.getElementById("gender_lainnya").checked))){
        $(".fielderror_8").html("");
        $(".fielderror_8").removeClass('warning');
        $(".border_gender").css("border", "none");
    }else{
        $(".fielderror_8").html("Pilihan Kosong!");
        $(".fielderror_8").addClass('warning');
        $(".border_gender").css("border", "1px solid red");
        $(".border_gender").css("border-radius", "3px");
    }
    if(((document.getElementById("gender_wanita").checked) ||
        (document.getElementById("gender_pria").checked) ||
        (document.getElementById("gender_lainnya").checked)) &&
        checked > 0){
        //show popup
        modal.style.display = "block";
    }else if(checked <1){
        $(".fielderror_5").html("Pilihan Kosong!");
        $(".fielderror_5").addClass('warning');
        $(".border_jobs").css("border", "1px solid red");
        $(".border_jobs").css("border-radius", "3px");        
    }
}

/*email validation---------------------------------------*/
function emailValidate(){
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var email = document.getElementById("email");
    var email_lenght = $('#email').val().trim();

    if(email.value.match(mailformat)){
        $(".fielderror_3").html("");
        $(".fielderror_3").removeClass('warning');
        $(".col_3").css("border", "none");
    
    }else if(email_lenght.length<1){
        $(".fielderror_3").html("Data Kosong!");
        $(".fielderror_3").addClass('warning');
        $(".col_3").css("border", "1px solid red");
        $(".col_3").css("border-radius", "3px");
    }else{
        $(".fielderror_3").html("Email salah!");
        $(".fielderror_3").addClass('warning');
        $(".col_3").css("border", "1px solid red");
        $(".col_3").css("border-radius", "3px");
    }
}

/*onkeyup function--------------------------------------*/
function empty_name(){
        // Get the value and trim it
    var name = $('#name').val().trim();

        // Check if empty of not
    if (name.length > 0) {
        $(".fielderror_1").html("");
        $(".fielderror_1").removeClass('warning');
        $(".col_1").css("border", "1px solid gray");

    } else {
        $(".fielderror_1").html("Data Kosong!");
        $(".fielderror_1").addClass('warning');
        //$(".input_name").addClass('input_name_error').removeClass('border');
        $(".col_1").css("border", "1px solid red");
        $(".col_1").css("border-radius", "3px");
    }
}

function empty_phone(){
        // Get the value and trim it
    var phone = $('#phone').val().trim();

        // Check if empty of not
    if (phone.length > 0) {
        $(".fielderror_2").html("");
        $(".fielderror_2").removeClass('warning');
        $(".col_2").css("border", "1px solid gray");

    } else {
        $(".fielderror_2").html("Data Kosong!");
        $(".fielderror_2").addClass('warning');
        //$(".input_name").addClass('input_name_error').removeClass('border');
        $(".col_2").css("border", "1px solid red");
        $(".col_2").css("border-radius", "3px");
    }
}

function empty_age(){
        // Get the value and trim it
    var age = $('#age').val().trim();

        // Check if empty of not
    if (age.length > 0) {
        $(".fielderror_4").html("");
        $(".fielderror_4").removeClass('warning');
        $(".col_4").css("border", "1px solid gray");

    } else {
        $(".fielderror_4").html("Data Kosong!");
        $(".fielderror_4").addClass('warning');
        //$(".input_name").addClass('input_name_error').removeClass('border');
        $(".col_4").css("border", "1px solid red");
        $(".col_4").css("border-radius", "3px");
    }
}

function empty_title(){
        // Get the value and trim it
    var title = $('#title').val().trim();

        // Check if empty of not
    if (title.length > 0) {
        $(".fielderror_6").html("");
        $(".fielderror_6").removeClass('warning');
        $(".col_6").css("border", "1px solid gray");

    } else {
        $(".fielderror_6").html("Data Kosong!");
        $(".fielderror_6").addClass('warning');
        //$(".input_name").addClass('input_name_error').removeClass('border');
        $(".col_6").css("border", "1px solid red");
        $(".col_6").css("border-radius", "3px");
    }
}

function empty_problem(){
        // Get the value and trim it
    var problem = $('#problem').val().trim();

        // Check if empty of not
    if (problem.length > 0) {
        $(".fielderror_7").html("");
        $(".fielderror_7").removeClass('warning');
        $(".col_7").css("border", "1px solid gray");

    } else {
        $(".fielderror_7").html("Data Kosong!");
        $(".fielderror_7").addClass('warning');
        //$(".input_name").addClass('input_name_error').removeClass('border');
        $(".col_7").css("border", "1px solid red");
        $(".col_7").css("border-radius", "3px");
    }
}