document.addEventListener("DOMContentLoaded", function() 
{

  const submitButton = document.getElementById("submit-answer");
  const feedback = document.getElementById("feedback");

  submitButton.addEventListener("click", checkAnswer);

  function checkAnswer() {
    const correctAnswer = "4";

    const selectedRadio = document.querySelector('input[name="quiz"]:checked');

    if (!selectedRadio) {
      feedback.textContent = "⚠️ Please select an answer before submitting.";
      feedback.style.color = "#dc3545";
      return;
    }

    const userAnswer = selectedRadio.value;

    if (userAnswer === correctAnswer) 
    {
      feedback.textContent = "Correct! Well done.";
      feedback.style.color = "#28a745";
    } 
    else {
      feedback.textContent = "That's incorrect. Try again!";
      feedback.style.color = "#dc3545";
    }
  }
});
