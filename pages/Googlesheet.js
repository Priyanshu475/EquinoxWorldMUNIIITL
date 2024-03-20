const scriptURL = 'https://script.google.com/macros/s/AKfycby-jj4QWPPt258JZvR8ISRktZqo71voKr4xhWvM5WXIUZj3qmosYMsQaHzZrc6wSL6RlA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})
