//Business Logic
function add(question1,question2,question3,question4,question5){
  return question1 + question2 + question3 + question4 + question5;
};

// User Interface

  $(document).ready(function() {var question1=parseInt($('input:radio[name=quiz1]:checked').val());
   var question2=parseInt($('input:radio[name=quiz2]:checked').val());
   var question3=parseInt($('input:radio[name=quiz3]:checked').val());
   var question4=parseInt($('input:radio[name=quiz4]:checked').val());
   var question5=parseInt($('input:radio[name=quiz5]:checked').val());
  $("form#quiz").submit(function(event) {
  event.preventDefault();
   var question1=parseInt($('input:radio[name=quiz1]:checked').val());
   var question2=parseInt($('input:radio[name=quiz2]:checked').val());
   var question3=parseInt($('input:radio[name=quiz3]:checked').val());
   var question4=parseInt($('input:radio[name=quiz4]:checked').val());
   var question5=parseInt($('input:radio[name=quiz5]:checked').val());
   var sum = add(question1,question2,question3,question4,question5);

   $("#after_submit").text(sum);

if (sum >= 80) {
  $("#result").show();
  $("#after_submit").text("Excellent" + sum);

} else if (sum <= 79 && sum>= 70) {
  $("#result").show();
  $("#after_submit").text("Well done! Your Score is " + sum);

}  else if (sum <= 69 && sum>= 60) {
    $("#result").show();
    $("#after_submit").text("keep it up! Your Score is " + sum);


}  else if (sum <= 59 && sum>= 50) {
    $("#result").show();
    $("#after_submit").text("Fair! Your Score is " + sum);

}    else if (sum <= 49 && sum>= 40) {
     $("#result").show();
     $("#after_submit").text("You need to do better! Your Score is " + sum);
    };

  });
 });
