alert('test 1');

function submit(){
    alert ("test 2");
    let fName = document.getElementById('fName').nodeValue
    let lName = document.getElementById('lName').nodeValue
    let clinic = document.getElementById('clinic').nodeValue
    let subject = document.getElementById('subject').nodeValue
    window.open('mailto:info@lgn.com');
};
