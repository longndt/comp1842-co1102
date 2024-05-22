document.getElementById("grade").addEventListener('input', () => {

   let grade = document.getElementById("grade").value;

   //declare variable for result (default : empty)
   let result = "";

   //use conditional statement (if elseif else) to return corresponding result
   if (grade >= 70 && grade <= 100) {
      result = "Distinction";
   } else if (grade >= 60) {
      result = "Merit";
   } else if (grade >= 40) {
      result = "Pass";
   } else if (grade >= 0) {
      result = "Fail";
   } else {
      result = "Invalid grade";
   }

   //display result to output
   document.getElementById("result").innerHTML = grade;
});