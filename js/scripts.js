// Business Logic

function check() {

  var score=0
  var questionNumbers=5;

   var question1=parseInt('input:radio[name=quiz1]:checked').value;
   var question2=parseInt('input:radio[name=quiz2]:checked').value;
   var question3=parseInt('input:radio[name=quiz3]:checked').value;
   var question4=parseInt('input:radio[name=quiz4]:checked').value;
   var question5=parseInt('input:radio[name=quiz5]:checked').value;
   var sum = parseInt(question1 + question2 + question3 + question4 + question5);
   var output = document.getElementById("number_correct").innerHTML= sum;


    for(var i = 1; i <= questionNumbers; i++){
      if(('quiz'+ 1) == '') {
       alert("answer all questions" + 1);
     }

     if (quiz1 == "JAVASCRIPT") {
       score++
     }

     if (quiz2 == ".reverse()") {
       score++

     }

      if (quiz3 == ".pop()") {
        score++

      }

     if (quiz4 == "unshift()") {
       score++

     }

     if (quiz5 == "CSS") {
       score++

    }


    var number_correct = document.getElementById('number_correct');
    number_correct.innerHTML= "<h2>Your score are " + score + " points out of " + questionNumbers + "</h2>"

    alert("Your scores are " + score + " out of " + questionNumbers);



}
}
