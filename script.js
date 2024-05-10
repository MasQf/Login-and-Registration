const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnLoginPopup = document.querySelector('.btnLogin-popup')
const btnClose = document.querySelector('.icon-close')

const loginEye = document.querySelector('.loginEye');
const registerEye = document.querySelector('.registerEye');
const loginPwd = document.querySelector('#loginPwd');
const registerPwd = document.querySelector('#registerPwd');

loginEye.addEventListener('click',()=>{
    if(loginEye.name == 'eye-off'){
        loginEye.name = 'eye'
        loginPwd.type = 'text'
    }else{
        loginEye.name = 'eye-off'
        loginPwd.type = 'password'
    }
})

registerEye.addEventListener('click',()=>{
    if(registerEye.name == 'eye-off'){
        registerEye.name = 'eye'
        registerPwd.type = 'text'
    }else{
        registerEye.name = 'eye-off'
        registerPwd.type = 'password'
    }
})

btnLoginPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup')
})

btnClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup')
})

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active')
})

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active')
})

document.addEventListener('DOMContentLoaded', function() {  
    // 获取所有的 inputbox 容器  
    var inputboxes = document.querySelectorAll('.inputbox');  
      
    // 遍历每个 inputbox 容器  
    inputboxes.forEach(function(inputbox) {  
        var input = inputbox.querySelector('input');  
        var label = inputbox.querySelector('label');  
        
        input.addEventListener('focus', function() {    
            label.style.top = '-5px';  
        }); 

        input.addEventListener('input', function() {  
            if (input.value.trim() !== '') {  
                label.style.top = '-5px';  
            }else{
                label.style.top = '50%'
            }
        });  
    });  
});

