  var config = {
    apiKey: "AIzaSyAOEQvZEXXLFlncLwe9SqqMoBM1xVRQ9FQ",
    authDomain: "quesewise.firebaseapp.com",
    databaseURL: "https://quesewise.firebaseio.com",
    projectId: "quesewise",
    storageBucket: "quesewise.appspot.com",
    messagingSenderId: "253954385312"
   };
  firebase.initializeApp(config);
  var firestore = firebase.firestore();
 // alert("hi");
 // alert("hi");
 var paramval=get('ref');
 var agentCode;
 var hotelId;
// alert(paramval);
  function get(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
}
 function initChat(){
  //alert("initChat");
           var data=[];
           var pic = '<img src="https://www.smartbots.ai/wp-content/uploads/2019/04/bot-new.gif" width="30px" height="30px" />';
          var con = '<img src="https://www.smartbots.ai/wp-content/uploads/2019/04/bot-new.gif" width="100px" height="100px" /><br><p>Hi Jayesh Welcome to phonix market place I will be your assistant for your shopping experience.</p>';
          //data.push(pic);
          data.push(con);
          data.push("Right now I can assist with following options");
          data.push("1. Offers of the day");
          data.push("2. Locate the store.");
          data.push("3. Special Offers ");
          data.push("4. Join the poll and poll result.");
          data.push("5. I want to buy");
          data.push("6. Emergecy numbers.");
          data.push("7. Pay Parking ticket");
          data.push("8. Tell me a Joke!");
          data.push("9. Events video");

          //data.push("5. I want to buy");  


          data.push(" Please type any option number from 1 to 7 ");
           expdefinput=true;
           newMessageRecieved(data);

 }
 function GetTheOffers(){
    var data=[];
    var element = '<div class="card 3"><div class="card_image"><img src="https://i.pinimg.com/originals/fd/2c/1a/fd2c1a96b654e220d09525f006482477.gif" /></div><div class="card_title"><p>20 % off at Max</p></div></div><div><img src="/assets/img/tu.png" width="30px" height="30px" /><img src="https://firebasestorage.googleapis.com/v0/b/quesewise.appspot.com/o/tu.png?alt=media&token=2404a36a-b724-4cf3-8d84-5840ec6060b5" width="30px" height="30px" /></div>';
    var element2 = '<div class="card 3"><div class="card_image"><img src="https://i.pinimg.com/originals/fd/2c/1a/fd2c1a96b654e220d09525f006482477.gif"  /></div><div class="card_title"><p>10 % off at Bata</p></div></div><div><img src="/assets/img/tu.png" width="30px" height="30px" /><img src="https://firebasestorage.googleapis.com/v0/b/quesewise.appspot.com/o/td.png?alt=media&token=fff2fc64-fba2-4bb4-9484-e67add0f80d5" width="30px" height="30px" /></div>';

    data.push(element);
    data.push(element2);
    newMessageRecieved(data);
 }
 function GetRandomJoke(){
//  alert("in GetRandomJoke");
  var jokedata=[];
    document.getElementById("statusId").innerHTML="typing...";
   $.ajax({
          type: "GET",
          contentType : "text/plain",
          url: "https://official-joke-api.appspot.com/jokes/random",
          data: "test",
          cache: false,
          success: function(result) {
          //alert(result.setup);

          var joke  = result.setup+"<br>"+result.punchline+"<p><br><img src='https://firebasestorage.googleapis.com/v0/b/quesewise.appspot.com/o/laugh1.gif?alt=media&token=32103875-a432-4be5-8de2-16362ef70f55' width='50px' height='50px'></img><img src='https://firebasestorage.googleapis.com/v0/b/quesewise.appspot.com/o/laugh.gif?alt=media&token=86fddf12-a797-4fa9-a98b-fb61f7eaae95' width='50px' height='50px'></img></p>";
           jokedata.push(joke);
          newMessageRecieved(jokedata);
           document.getElementById("statusId").innerHTML="online";
           //alert(json);
          // alert(json.total_count);
         //  UpdateData(json);

        },
          error: function(err) {

          alert(err);
            //$("#msg").html( "<span style='color: red'>Name is required</span>" );
          }
        });




       
}
function GetVideos(){
  var data=[];
  var youtubevideo = "<iframe width='240' height='315' src='https://www.youtube.com/embed/gKTKxp9OUaQ' autoplay allowfullscreen></iframe>";
  data.push(youtubevideo);
  newMessageRecieved(data);
}
function GetPollResult(){
  var data=[];
 var element = '<p>Who will win IPL 2020?</p><br><div id="chartContainer" style="height: 300px; width: 250px;"></div>';
  data.push(element);
  newMessageRecieved(data);  
  var chart = new CanvasJS.Chart("chartContainer", {
  animationEnabled: true,
  title: {
    text: "Poll Results"
  },
  data: [{
    type: "pie",
    startAngle: 240,
    yValueFormatString: "##0.00\"%\"",
    indexLabel: "{label} {y}",
    dataPoints: [
      {y: 20, label: "Mumbai"},
      {y: 20, label: "Rajasthan"},
      {y: 60, label: "Chennai"}
      
    ]
  }]
});
  chart.render();

  
}
function PayTicket(){
  window.location = "upi://pay?pa=jglodhiya@okicici&pn=JAYESH%20LODHIYA&aid=uGICAgIDA3qSUUA&url=https://queuewise.in/assist.html?ref=18234&am=1";
}
function ScratchCard(){
  var data=[];
  var element = ' <div class="container"><div id="scratchCard" width="50px" height="50px"></div></div>'
  data.push(element);
  newMessageRecieved(data);
 /*    $('#scratchCard').wScratchPad({
    size        : 70,          // The size of the brush/scratch.
    bg          : 'https://firebasestorage.googleapis.com/v0/b/quesewise.appspot.com/o/winning-card.jpg?alt=media&token=20ce1be3-df9e-4218-8041-cdd114ff0e03',  // Background (image path or hex color).
    // fg          : '#0195FF',  // Foreground (image path or hex color).
    fg          : 'https://firebasestorage.googleapis.com/v0/b/quesewise.appspot.com/o/google-scratch-card.jpg?alt=media&token=f544891f-c8fa-4ca6-9714-7b6561745f95',  // Foreground (image path or hex color).
    realtime    : true,       // Calculates percentage in realitime.
    scratchDown: null, 
    // function(e, percent){ console.log("scratchDown:" + percent); },
  scratchMove: function(e, percent){ 
    // console.log("scratchMove:" + percent); 
if(percent > 50){
    this.clear();
}
},
  scratchUp: null, 
  // function(e, percent){ console.log("scratchUp:" +  percent); },
  cursor      : 'pointer' // Set cursor.
  });*/
  
}
var reqObj = {}; 
var baseUrl =  "https://first-alert-security.herokuapp.com";
function dialogflowApiNew(text){
  var serverurl =  baseUrl+"/frontDeskbot";
   var hotel = localStorage.getItem("HotleId");
/*fetch(serverurl, { 
    method: 'POST',
    body:    JSON.stringify(text),
    headers: { 'Content-Type': 'text/plain' },
})*/
   reqObj.message = text;
   reqObj.hotelId = hotel;
   var userObj = localStorage.getItem("UserObj");
   //alert(userObj);
   //alert(userObj.FirstName);
   reqObj.UserObj = userObj;
   //var fdata = JSON.stringify(reqObj);
   //alert(JSON.stringify(reqObj));
             $.ajax({
     type: "POST",
     url: serverurl,
     data: JSON.stringify(reqObj) ,
     contentType: 'application/json',
     success: function (response) {
       
      var data=[];
                // var str = JSON.stringify(response);
                 console.log("Resp="+response);
                //var obj = JSON.parse(str);
                var speech = response;
               // speech = speech.replace(/\"/g, "");
                //alert(speech);
               // var element = 
              //  data.push(speech);
                // Here you will get the response to your query in json, you will have to parse it based on the type it has like text, image, card etc. & show it to user. 
              //  parseResponse(response); // function to parse your response. 
              //alert(json.fulfillment.speech);
            //  newMessageRecieved(data);
            var speecharr=[];
              if(speech.includes('#')){

                  speecharr = speech.split('#');
                //  alert(speecharr[0]);

                appendMessage(BOT_NAME, BOT_IMG, "left", speecharr[0].replace(/\"/g, ""));
                appendMessage(BOT_NAME, BOT_IMG, "left", speecharr[1].replace(/\"/g, ""));

                  speekResponse(speecharr[0]);
                 

                 // speekResponse(speecharr[1]);
              }else{
                 if(speech===''){

                 }else{
                  appendMessage(BOT_NAME, BOT_IMG, "left", speech.replace(/\"/g, ""));
                  speekResponse(speech);
                  CallAPi(speech);
                  }
              }

              if(speech===''){
                  speech = "Sorry I did not get what u said,may be you can select any of the suggestions given below!";
                   speekResponse(speech);
                    appendMessage(BOT_NAME, BOT_IMG, "left", speech);
                  
                  //dialogflowApi('hi');
              }

              //  web.addMessage(speech, "", "", "");
                // web.processMessages();              
                document.getElementById("talkId").setAttribute("class", "show");
              document.getElementById("slientId").setAttribute("class", "hide");
   
     },
     error: function (jqXHR, textStatus, err) {
      alert('text status '+textStatus+', err '+err)
     },
    });
}
function dialogflowApi(text) {
     //alert(text);
     dialogflowApiNew(text);
     return;
     agentCode ="269472863eda425390b193a622eca910";
         jQuery.ajax({
            type: "POST",
            url: serverurl,
            contentType: "application/json; charset=utf-8",
            data: {ques : text},
            success: function(response) {
                console.log("success");
                 var data=[];
                 var str = JSON.stringify(response);
                 console.log("Resp="+str);
                var obj = JSON.parse(str);
                var speech = obj["result"]["fulfillment"]["speech"];
               // var element = 
              //  data.push(speech);
                // Here you will get the response to your query in json, you will have to parse it based on the type it has like text, image, card etc. & show it to user. 
              //  parseResponse(response); // function to parse your response. 
              //alert(json.fulfillment.speech);
            //  newMessageRecieved(data);
            var speecharr=[];
              if(speech.includes('#')){

                  speecharr = speech.split('#');
                //  alert(speecharr[0]);
                appendMessage(BOT_NAME, BOT_IMG, "left", speecharr[0]);
                appendMessage(BOT_NAME, BOT_IMG, "left", speecharr[1]);
                  speekResponse(speecharr[0]);

                 // speekResponse(speecharr[1]);
              }else{
                 if(speech===''){

                 }else{
                  appendMessage(BOT_NAME, BOT_IMG, "left", speech);
                  speekResponse(speech);
                  CallAPi(speech);
                  }
              }

              if(speech===''){
                  speech = "Sorry I did not get what u said,may be you can select any of the suggestions given below!";
                   speekResponse(speech);
                    appendMessage(BOT_NAME, BOT_IMG, "left", speech);
                  
                  //dialogflowApi('hi');
              }

              
                document.getElementById("talkId").setAttribute("class", "show");
              document.getElementById("slientId").setAttribute("class", "hide");
               // say(speech); 
               //speekResponse(speech);
            },
            error: function(xhr, errorType, exception) {
                console.log("Error"+xhr);
            }
        });
}

function CallAPi(speech){
 // alert();
  if(speech.includes('wait for a sec')){
     setTimeout(() => {
   // appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
  // dialogflowApi(msgText);
  var res = "Yes we have 10 flats available which is under your budget.";
 appendMessage(BOT_NAME, BOT_IMG, "left",res);
 speekResponse(res);
  }, 10000);
 }
  }


var voices = window.speechSynthesis.getVoices();
console.log(voices);
var sayit = function ()
{
    var msg = new SpeechSynthesisUtterance();

    msg.voice = voices[48];
    msg.voiceURI = 'native';
    msg.volume = 3; // 0 to 1
    msg.rate = 1; // 0.1 to 10
    msg.pitch = 1; //0 to 2
    msg.lang = 'hi-IN';
    msg.onstart = function (event) {

        console.log("started");
         document.getElementById("talkId").setAttribute("class", "show");
              document.getElementById("slientId").setAttribute("class", "hide");

    };
    msg.onend = function(event) {
        console.log('Finished in ' + event.elapsedTime + ' seconds.');
          document.getElementById("talkId").setAttribute("class", "hide");
          document.getElementById("slientId").setAttribute("class", "show");
    };
    msg.onerror = function(event)
    {

        console.log('Errored ' + event);
 //         document.getElementById("talkId").setAttribute("class", "hide");
   //       document.getElementById("slientId").setAttribute("class", "show");
    }
    msg.onpause = function (event)
    {
        console.log('paused ' + event);
         // document.getElementById("talkId").setAttribute("class", "hide");
         // document.getElementById("slientId").setAttribute("class", "show");

    }
    msg.onboundary = function (event)
    {
        console.log('onboundary ' + event);
          document.getElementById("talkId").setAttribute("class", "hide");
          document.getElementById("slientId").setAttribute("class", "show");
    }

    return msg;
}


var speekResponse = function (text)
{
    speechSynthesis.cancel(); // if it errors, this clears out the error.

    var sentences = text.split(".");
    for (var i=0;i< sentences.length;i++)
    {
        var toSay = sayit();
        toSay.text = sentences[i];
        speechSynthesis.speak(toSay);
    }
}

function initChat(){

  var paramval=get('param');
  hotelId = paramval.split(",")[1];
 // alert(hotelId);
  localStorage.setItem("HotleId", hotelId);
  GetGuestInfo(paramval);
  //alert(paramval);
}
function GetGuestInfo(paramval){

   var serverurl =  baseUrl+"/getGuestInfo";
   
   var reqObj = {};
   reqObj.docId = paramval;

    $.ajax({
     type: "POST",
     url: serverurl,
     data: {paramval},
     success: function (data) {
      // alert(data.FirstName);
       WelcomeTxt(data);
       localStorage.setItem("UserObj",JSON.stringify(data));
       UpdateDeviceId(data);
      // initMap();
                
        //  swal("Good job!", "Submitted!", "success");
     },
     error: function (jqXHR, textStatus, err) {
      //alert('text status '+textStatus+', err '+err)

     },
    });
}
function WelcomeTxt(data){
    var msg ="Hi "+data.FirstName+", Welcome to Heaven Hotel myself Jenny and I will be available for you all the time.you can ask anything or you can use suggestions below.";
    document.getElementById("initmsg").innerHTML = msg;

}  
function  UpdateDeviceId(data){
  var serverurl =  "/updateDeviceId";
  var hotelId =localStorage.getItem("HotleId");
  var deviceId = localStorage.getItem("notifyId");
  var guestId = data.docId;
//  alert(deviceId); 
 $.ajax({
     type: "POST",
     url: serverurl,
     data: {hotel : hotelId,device : deviceId,user : guestId},
     success: function (data) {
     
     },
     error: function (jqXHR, textStatus, err) {
      //alert('text status '+textStatus+', err '+err)

     },
    });
}
function CallReception(){
  var hotelId =localStorage.getItem("HotleId");
 $.ajax({
     type: "POST",
     url: '/callRecption',
     data: {hotel : hotelId},
     success: function (data) {
      // alert(data.FirstName);
      
                
        //  swal("Good job!", "Submitted!", "success");
     },
     error: function (jqXHR, textStatus, err) {
      //alert('text status '+textStatus+', err '+err)

     },
    }); 
 }
 //speekResponse("Hi, welcome to Atria Constructions! will help you to find your dream home. Before moving please tell me your name and mobile number.");
  