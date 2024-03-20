const scriptURL = 'https://script.google.com/macros/s/AKfycby-jj4QWPPt258JZvR8ISRktZqo71voKr4xhWvM5WXIUZj3qmosYMsQaHzZrc6wSL6RlA/exec'

const form = document.forms['contact-form'];
const loader = document.getElementById('loader');

form.addEventListener('submit', e => {
  e.preventDefault();
  loader.style.display = 'block'; // Show loader

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      loader.style.display = 'none'; // Hide loader
      alert("Thank you! Your form is submitted successfully.");
      window.location.reload();
    })
    .catch(error => {
      loader.style.display = 'none'; // Hide loader
      console.error('Error!', error.message);
    });
});
