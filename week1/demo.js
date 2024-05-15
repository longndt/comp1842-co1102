function displayWelcome() {
   //1) get input from textbox
   var name = document.getElementById("name").value;
   var age = document.getElementById("age").value;

   //get current year
   var currentYear = 2024;

   //calculate birth year
   var birthYear = currentYear - age;

   //2) display output to heading
   document.getElementById("output").innerHTML =
      "Hello " + name + "<br>"
      + "You are " + age + " years old <br>"
      + "You were born in " + birthYear;
}