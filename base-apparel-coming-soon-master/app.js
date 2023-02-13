const button = document.getElementById('arrow');
const form = document.querySelector('.form');
const text = document.querySelector('#error-msg');
const input = document.getElementById('inpud');
const error = document.getElementById('errpic');

// Email Validation 
const validateEmail = (mail) => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(input.value.match(validRegex)){
        return true
    } else {
        return false 
    }
};

// Event Listeners 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const emailAddress = input.value;
    if (!validateEmail(emailAddress)){
        text.style.display = 'block';
        form.classList.add('error');
        error.style.display = 'block';
    } else {
        alert('Thank you for subscribing! :)')
        form.reset();
    }
})

input.addEventListener('keydown', () => {
    form.classList.remove('error');
    text.style.display = 'none';
    error.style.display = 'none';
})

form.addEventListener('keyup', (e) => {
    e.preventDefault();
    if(e.keyCode === 13) {
        button.click();
}
});