function calculateAge() {
    // Get the selected date of birth
    let dobInput = document.getElementById("dob");
    let dob = new Date(dobInput.value);

    // Get the current date
    let currentDate = new Date();

    // Calculate the age
    let age = currentDate.getFullYear() - dob.getFullYear();

    // Adjust the age if the birthday hasn't occurred yet this year
    if (currentDate.getMonth() < dob.getMonth() || (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())) {
      age--;
    }

    // Display the result
    let resultElement = document.getElementById("result")
    resultElement.innerHTML = "Your age is " + age + "years.";
  
  }

