document.addEventListener('DOMContentLoaded', function () {
   var welcomeContainer = document.getElementById('welcome-container');
   var welcomeMessage = document.getElementById('welcome-message');

   var user = JSON.parse(localStorage.getItem('signUp'));

   if (user) {
       var userName = user[user.length - 1].name; 
       welcomeMessage.textContent = 'Welcome ' + userName ;
   } else {
       
       welcomeContainer.innerHTML = '<p>Error: User information not found.</p>';
   }
});
