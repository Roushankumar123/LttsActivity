let password = document.querySelector('#pass');
const loginBtn = document.querySelector('#login');
const showerror = document.querySelector('#errormsg2');

function login(){
    if(password.value.length < 6){
        showerror.className = "error";
        showerror.innerHTML =" Enter password above 6 characters";
        return false;
    }
    else{
        showerror.className = "errorMsg";
        showerror.innerHTML ="Login successFully";
       
    }
        
}
loginBtn.addEventListener('click', login);