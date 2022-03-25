//formhandler for login page in views/layouts/handlers for logout
const logout = async () => {
    //setting up const for logout response and fetches POST route from 
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    //checks response for log out
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log out.');
    }
  };
  
  //logout button
  document.querySelector('#logout').addEventListener('click', logout);
  