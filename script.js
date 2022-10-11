const pass1 = document.querySelector('#password');
const pass2 = document.querySelector('#passwordConf');
const spanImage = document.querySelector('.checkPass');
let icon = document.createElement('img');
icon.classList.add('addedIcon');
spanImage.appendChild(icon);

pass2.addEventListener('input', checkCoincide);

function checkCoincide () {
    console.log(pass2.value);
    if (pass1.value === pass2.value){
        icon.src = "./images/check.png";
    }else{
        icon.src = "./images/cancel.png";
    }
}

/*
const validIcon = document.createElement('img');
const invalidIcon = document.createElement('img');
validIcon.src = "./images/check.png";
validIcon.classList.add('addedIcon');
invalidIcon.src = "./images/cancel.png";
invalidIcon.classList.add('addedIcon');

pass2.addEventListener('input', checkCoincide);

function checkCoincide () {
    console.log(pass2.value);
    if (pass1.value === pass2.value){
        console.log(`correct`);
        spanImage.appendChild(validIcon);
    }else{
        console.log('incorrect');
        spanImage.appendChild(invalidIcon);

    }
}
*/