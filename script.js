const pass1 = document.querySelector('#password');
const pass2 = document.querySelector('#passwordConf');

pass2.addEventListener('input', checkCoincide);

function checkCoincide () {
    console.log(pass2.value);
    if (pass1.value === pass2.value){
        console.log(`correct`);
    }else{
        console.log('incorrect');
    }
}