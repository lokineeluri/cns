// Select the HTML element with the class 'container' and store it in the 'container' variable.
const container = document.querySelector('.container');

// Select the HTML element with the class 'signUp-link' and store it in the 'signUpLink' variable.
const signUpLink = document.querySelector('.signUp-link');

// Select the HTML element with the class 'signIn-link' and store it in the 'signInLink' variable.
const signInLink = document.querySelector('.signIn-link');

// Add a click event listener to the 'signUpLink' element.
signUpLink.addEventListener('click', () => {
    container.classList.add('animate-signIn');

    // Remove the CSS class 'animate-signUp' from the 'container' element.
    // This class might have been applied previously to trigger a different animation.
    container.classList.remove('animate-signUp');
});

// Add a click event listener to the 'signInLink' element.
signInLink.addEventListener('click', () => {
    container.classList.add('animate-signUp');

    // Remove the CSS class 'animate-signIn' from the 'container' element.
    // This class might have been applied previously to trigger a different animation.
    container.classList.remove('animate-signIn');
});






// Function to handle signup form submission
const handleSignUp = async (event) => {
  event.preventDefault();

  const username = document.getElementById('signup-username').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  try {
      const response = await fetch('http://localhost:4000/api/auth/signup', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name: username, email, password }) // Fix: Pass 'username' instead of 'name'
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
          // Show success message
          alert('User account created successfully. Please login.');

          // Redirect or any other action after successful signup
      } else {
          console.error('Error:', data.errors);
          // Handle error, show error message to the user, etc.
      }
  } catch (error) {
      console.error('Error:', error);
      // Handle error, show error message to the user, etc.
  }
};

// Function to handle login form submission

const handleLogin = async (event) => {
  event.preventDefault();
const name = document.getElementById('login-username').value;
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  try {
      const response = await fetch('http://localhost:4000/api/auth/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name,email, password })
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
          // Redirect to home page
          window.location.href = 'home1.html'; // Updated redirection URL
      } else {
          // Show error message
          alert('Invalid credentials. Please try again.');

          console.error('Error:', data.errors);
          // Handle error, show error message to the user, etc.
      }
  } catch (error) {
      console.error('Error:', error);
      // Handle error, show error message to the user, etc.
  }
};


// Add event listener to the signup form
document.getElementById('signup-form').addEventListener('submit', handleSignUp);

// Add event listener to the login form
document.getElementById('login-form').addEventListener('submit', handleLogin);
