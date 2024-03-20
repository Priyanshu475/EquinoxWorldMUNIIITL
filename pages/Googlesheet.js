const scriptURL = 'https://script.google.com/macros/s/AKfycby-jj4QWPPt258JZvR8ISRktZqo71voKr4xhWvM5WXIUZj3qmosYMsQaHzZrc6wSL6RlA/exec'

const form = document.forms['contact-form'];
const loader = document.getElementById('loader');

form.addEventListener('submit', e => {
  e.preventDefault();
  loader.style.display = 'block'; // Show loader

  // Combine all selected committee options into a single string
  let committeeOptions = "";
  document.querySelectorAll('input[name="school-option"]:checked').forEach(checkbox => {
    committeeOptions += checkbox.value + " ";
  });
  document.querySelectorAll('input[name="university-option"]:checked').forEach(checkbox => {
    committeeOptions += checkbox.value + " ";
  });

  // Remove trailing space if exists
  committeeOptions = committeeOptions.trim();

  // Append the committee options to FormData
  const formData = new FormData(form);
  formData.append('committeeOptions', committeeOptions);

  fetch(scriptURL, { method: 'POST', body: formData})
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
