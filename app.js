// Add event listener for button
document.querySelector('.get-jokes').addEventListener('click', getJokes);


function getJokes(e){
  // Select inputted number
  const number = document.querySelector('input[type="number"]').value;

  // Begin request
  const xhr = new XMLHttpRequest();

  // Initialize GET request
  xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`, true);

  
  xhr.onload = function(){
    // Check for successful request
    if(this.status === 200){
      // Retrieve JSON
      const response = JSON.parse(this.responseText);
      
      let output = '';
      // Check for successful data retrival
      if(response.type === 'success'){
        // Add each joke as a list item to the output
        response.value.forEach(function(joke){
          output += `<li>${joke.joke}</li>`;
        });
      } 
      else {
        output += '<li>Something went wrong</li>';
      }
      // Add the output to the html
      document.querySelector('.jokes').innerHTML = output;
    }
  }

  // Send the request
  xhr.send();

  e.preventDefault();
}