function generateMessage() {
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
  
    if (!name1 || !name2) {
      alert("Please enter both names to send birthday wishes!");
      return;
    }
  
    const message = `
      🎉 Happy Birthday to the Dynamic Duo, ${name1} dada and ${name2} dada! 🎉
      <br><br>
      Today, you’re not just sharing a birthday; you’re celebrating the awesome friendship you both have! You’re pros at skipping morning classes and still doing great in everything! 😄
      <br><br>
      I hope your day is filled with laughter, lots of cake, and friends who know how to have fun! Here’s to a year full of adventures, crazy Free Fire games, and avoiding any boring stuff like champs! 🎂✨
      <br><br>
      And remember, getting older is just a number—kind of like your crazy kill counts! So let’s enjoy this day and party like there’s no homework to worry about! Let’s jump into this birthday like it’s the best game ever! 🎈🥳
    `;
  
    const messageDiv = document.getElementById("message");
    const inputs = document.querySelectorAll("input"); // Select all input fields
  
    messageDiv.innerHTML = message;
    messageDiv.classList.remove("hidden");
  
    // Hide the input fields
    inputs.forEach(input => {
      input.style.display = 'none';
    });
  
    // Optionally, hide the button too
    const button = document.querySelector("button");
    button.style.display = 'none';
  }
  