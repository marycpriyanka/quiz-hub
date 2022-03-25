//formhandler for login page in views/layouts/handlers for sign up
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    //setting up const for username, email, and password 
    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#psw').value.trim();

    //fetches username, email, and password info via POST route from controllers/api/userRoutes.js
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      //checks response for sign up
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };

  //submit button
  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
