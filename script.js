document.getElementById('surprise-button').addEventListener('click', function() {
    // Get the names from input fields
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();

    // Validate input
    if (!name1 || !name2) {
        alert("Please enter both names!");
        return; // Stop further execution
    }

    // Create the message
    const message = `
        🎉 Happy Birthday to the Dynamic Duo, ${name1} dada and ${name2} dada! 🎉
        <br><br>
        Today, we’re not just celebrating your birthdays; we’re celebrating the awesome friendship you have! You both are pros at skipping morning classes and still doing great in everything! 😄
        <br><br>
        I hope your day is filled with laughter, lots of cake, and friends who know how to have fun! Here’s to a year full of adventures, crazy Free Fire games, and avoiding any boring stuff like champs! 🎂✨
        <br><br>
        And remember, getting older is just a number—kind of like your crazy kill counts! So let’s enjoy this day and party like there’s no homework to worry about! Let’s jump into this birthday like it’s the best game ever! 🎈🥳
    `;

    // Display the message
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = message;
    messageDiv.classList.remove('hidden');

    // Hide input fields and button
    document.getElementById('name1').style.display = 'none';
    document.getElementById('name2').style.display = 'none';
    document.getElementById('surprise-button').style.display = 'none'; // Hide the button
    document.querySelector("p").style.display = 'none'

    // Show images
    const images = document.querySelectorAll('.birthday-image');
    images.forEach(image => {
        image.style.display = 'block'; // Show images
    });
});

// Initially hide images
const images = document.querySelectorAll('.birthday-image');
images.forEach(image => image.style.display = 'none');
