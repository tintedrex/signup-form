{/* <div class="input">
  <input type="text" id="fname" class="fname" placeholder="First Name" required>
  <span id="error" style="color: red; display: none;">First name is required</span>
</div> */}
{/* <button id="submit">Submit</button> */}


  document.getElementById('submit').addEventListener('click', function(event) {
    const inputField = document.getElementById('fname');
    const errorSpan = document.getElementById('error');
    
    if (inputField.value.trim() === '') {
      errorSpan.style.display = 'inline';
      event.preventDefault(); // Prevent form submission if necessary
    }
  });

