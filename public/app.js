const contactForm = document.querySelector('.contact-form');

let name = document.querySelector('#name')
let email = document.querySelector('#email')
let phone = document.querySelector('#phone')
let subject = document.querySelector('#subject')
let message = document.querySelector('#message')

contactForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    const formData ={
        name: name.value,
        email: email.value,
        phone: phone.value,
        subject: subject.value,
        message: message.value
    }
    console.log(formData);
    let xhr = new XMLHttpRequest();

    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert("Se ha enviado el correo!")
            name.value = "";
            email.value = "";
            phone.value = "";
            subject.value = "";
            message.value = "";

        } else {
            alert("Algo salio mal :(")
        }
    }

    xhr.send(JSON.stringify(formData));


})
