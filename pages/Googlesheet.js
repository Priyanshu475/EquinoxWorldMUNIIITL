const scriptURL = 'https://script.google.com/macros/s/AKfycbwLLGKsxWMMr9ptpziZ90Me4CZixL-ZB-yY-xzmNWMpkHJ5axQL2JAqyd5_RpOqLIA1nQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})
