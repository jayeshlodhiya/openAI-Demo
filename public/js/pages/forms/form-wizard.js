$(function () {
    //Horizontal form basic
    var chekinObj ={};
    $('#wizard_horizontal').steps({
        headerTag: 'h2',
        bodyTag: 'section',
        transitionEffect: 'slideLeft',
        onInit: function (event, currentIndex) {
            setButtonWavesEffect(event);
        },
        onStepChanged: function (event, currentIndex, priorIndex) {
            setButtonWavesEffect(event);
        }
    });

    //Vertical form basic
    $('#wizard_vertical').steps({
        headerTag: 'h2',
        bodyTag: 'section',
        transitionEffect: 'slideLeft',
        stepsOrientation: 'vertical',
        onInit: function (event, currentIndex) {
            setButtonWavesEffect(event);
        },
        onStepChanged: function (event, currentIndex, priorIndex) {
            setButtonWavesEffect(event);
        }
    });

    //Advanced form with validation
    var form = $('#wizard_with_validation').show();
    form.steps({
        headerTag: 'h3',
        bodyTag: 'fieldset',
        transitionEffect: 'slideLeft',
        onInit: function (event, currentIndex) {
            $.AdminBSB.input.activate();

            //Set tab width
            var $tab = $(event.currentTarget).find('ul[role="tablist"] li');
            var tabCount = $tab.length;
            $tab.css('width', (100 / tabCount) + '%');

            //set button waves effect
            setButtonWavesEffect(event);
        },
        onStepChanging: function (event, currentIndex, newIndex) {
            if (currentIndex > newIndex) { return true; }

            if (currentIndex < newIndex) {
                form.find('.body:eq(' + newIndex + ') label.error').remove();
                form.find('.body:eq(' + newIndex + ') .error').removeClass('error');
            }

            form.validate().settings.ignore = ':disabled,:hidden';
            return form.valid();
        },
        onStepChanged: function (event, currentIndex, priorIndex) {
            setButtonWavesEffect(event);
        },
        onFinishing: function (event, currentIndex) {
            form.validate().settings.ignore = ':disabled';
            return form.valid();
        },
        onFinished: function (event, currentIndex) {

            var name = document.getElementById("firstNameId").value;
            var lastName = document.getElementById("lastNameId").value;
            var email = document.getElementById("emailId").value;
            var mobile = document.getElementById("mobileId").value;
            var address= document.getElementById("addressId").value;
            var roomNumber = document.getElementById("roomNameId").value;

            chekinObj["FirstName"] = name;
            chekinObj["LastName"] = lastName;
            chekinObj["Email"] = email;
            chekinObj["Mobile"] = mobile;
            chekinObj["Address"] = address;
            chekinObj["RoomNumber"] = roomNumber;
            chekinObj["isCheckedIn"] = "yes";

           var checkIndata = JSON.stringify(chekinObj);
          //  alert(roomNumber);
            GuestCheckIn(checkIndata);

            
        }
    });

    form.validate({
        highlight: function (input) {
            $(input).parents('.form-line').addClass('error');
        },
        unhighlight: function (input) {
            $(input).parents('.form-line').removeClass('error');
        },
        errorPlacement: function (error, element) {
            $(element).parents('.form-group').append(error);
        },
        rules: {
            'confirm': {
                equalTo: '#password'
            }
        }
    });
});

function GuestCheckIn(requestData){
 //   alert("In guest checkIn");
    var hotelDocId = "MfGqJsRJ7YZTbAt2YFNC";
     
     $.ajax({
     type: "POST",
     url: "/checkInGuest",
     data: { reqObj: requestData,hotelDocId : hotelDocId },
     success: function (data) {
      // alert(data);
      // initMap();

          swal("Good job!", "Submitted!", "success");
     },
     error: function (jqXHR, textStatus, err) {
      //alert('text status '+textStatus+', err '+err)
     },
    });
}

function setButtonWavesEffect(event) {
    $(event.currentTarget).find('[role="menu"] li a').removeClass('waves-effect');
    $(event.currentTarget).find('[role="menu"] li:not(.disabled) a').addClass('waves-effect');
}