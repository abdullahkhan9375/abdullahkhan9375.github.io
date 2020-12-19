const form = document.querySelector('.container--form-main');
const containerMain = document.querySelector('.main');
const xBtn = document.querySelector('#x');
const talkBtn = document.querySelector('.btn-talk');


function showForm(){
    form.classList.remove('hide')
    form.classList.add('show')
    containerMain.classList.add('hide')
    containerMain.classList.remove('show')
    
}

function hideForm(){
    form.classList.add('hide')
    form.classList.remove('show')
    containerMain.classList.add('show')
    containerMain.classList.remove('hide')
}


//form functionality
talkBtn.addEventListener('click', showForm)
xBtn.addEventListener('click', hideForm)
