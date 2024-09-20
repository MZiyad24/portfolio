let menuIcon = document.querySelector('#menue-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick =()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/*------------------scroll section----------------  */

function handleEmail()
{
    const userEmail = document.getElementById("user-email").value;
    const emailSubject = document.getElementById("email-subject").value;
    const emailBody = document.getElementById("email-body").value;
    const userName = document.getElementById("user-name").value;
    const userPhone = document.getElementById("user-phone").value;

    console.log("email sender : "+userEmail)
    console.log("email subject : "+emailSubject)
    console.log("email body : "+emailBody)
    window.location.href = `mailto:mziyad154@gmail.com?from=${userEmail}&subject=${emailSubject}&body=${emailBody}%0A${userName}%0A${userPhone}`;
}

/*------------------Handling Email-----------------  */ 

