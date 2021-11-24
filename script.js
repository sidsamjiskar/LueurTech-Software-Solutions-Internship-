const username = document.getElementById('USERNAME')
const email = document.getElementById('EMAIL')
const password = document.getElementById('PASSWORD')
const password2 = document.getElementById('CONFIRM PASSWORD')
const form = document.getElementById('form')
// Functions
function showError(input, message) {
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.innerText = message
}
function showSuccess(input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${input.id} IS REQUIRED.`)
    } else {
      showSuccess(input)
    }
  })
}
function validateEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (re.test(input.value.trim())) {
    showSuccess(input)
  } else {
    showError(input, 'EMAIL IS INVALID')
  }
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${input.id} MUST BE ATLEAST ${min} CHARACTERS`)
  } else if (input.value.length > max) {
    showError(input, `${input.id} MUST BE LESS THAN ${max} CHARACTERS`)
  } else {
    showSuccess(input)
  }
}
function checkPasswordsMatch(input, input2) {
  if (input.value !== input2.value) {
    showError(input2, 'PASSWORDS DIDNT MATCH')
  }
}
// Event Listener

form.addEventListener('submit', function (e) {
  e.preventDefault()
  checkRequired([username, email, password, password2])
  validateEmail(email)
  checkLength(username, 3, 15)
  checkLength(password, 6, 20)
  checkPasswordsMatch(password, password2)
})