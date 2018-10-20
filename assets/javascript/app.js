
$('document').ready(function () {
  $('#questions').hide();
  $('.answers').hide();

  $("#startButton").click(function () {
    $('#questions').show();
    $(".answers").show();
    $('#startButton').hide();
    var score = 0;
    //Timer function
    var timeLeft = 60;
    var gameTimer = setInterval(function () {
      timeLeft--;
      $("#countdown").text(timeLeft);
      if (timeLeft <= 0) {
        clearInterval(gameTimer);
      }
    },1000)
    var question1 = $("options1[]");
    console.log(question1)
  })
});