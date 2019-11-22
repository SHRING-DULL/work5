function btn1(){
    let reg = new RegExp(/^(?![0-9]+$)(?![a-b]+$)(?![A-B]+$).{8,}$/);
    let password = document.getElementById("mima");
    var newpassword = password.value;
    

    if (reg.test(newpassword)){
    alert("格式正确！")
}else{
    alert("密码格式不符合规范")
}

}
function btn2(){
    let repassword = document.getElementById("queren");
    let newrepass = repassword.value;
    let newpass = document.getElementById("mima");
    let newpassword = newpass.value;

    if(newpassword == newrepass){
        alert("密码设置成功！")
    }else{
        alert("前后密码输入不一致，请再次输入密码")
    }
}