$(document).ready(function() {
    $("#table-map area").click(function() {
      $("#booking-modal").removeClass("hidden").css("display", "block");
      const tableNumber = $(this).data("table");
      $("#tableNumberDisplay").text(`${tableNumber}`);
    });
  
    $(".close").click(function() {
      $("#booking-modal").addClass("hidden").css("display", "none");
    });
  
    $(window).click(function(event) {
      if (event.target == $("#booking-modal")[0]) {
        $("#booking-modal").addClass("hidden").css("display", "none");
      }
    });
  
    $("#booking-form").submit(function(event) {
      event.preventDefault();
      const tableNumber = $("#tableNumberDisplay").text(); 
      const formData = {
        tableNumber: tableNumber.replace("Столик ",""),
        date: $("#date").val(),
        time: $("#time").val(),
        guests: $("#guests").val(),
        name: $("#name").val()
      };
  
      console.log(formData); 
      alert("Заявка на бронирование отправлена!");
      $("#booking-modal").addClass("hidden").css("display", "none");
    });
  });