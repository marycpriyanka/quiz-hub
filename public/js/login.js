//formhandler for login page in views/layouts/handlers for login
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    //setting up const for email and password 
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#psw').value.trim();

    //fetches email and password info via POST route from controllers/api/userRoutes.js
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      //checks response for login
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }
  };

  //submit button
  document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
  

 