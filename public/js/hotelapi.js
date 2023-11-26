function GetAllStaff(hotelId){
     $.ajax({
     type: "POST",
     url: "/getAllStaff",
     data: { id: hotelId },
     success: function (data) {
      // alert(data);
       var obj = JSON.parse(data);
       //createTable(obj);
       createStaff(obj);
    //  return obj;
     },
     error: function (jqXHR, textStatus, err) {
     // alert('text status '+textStatus+', err '+err)
     },
    });
}