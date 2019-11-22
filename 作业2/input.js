function btn(){
    let reg = new RegExp(/^[1][3,4,5,7,8][0-9]{9}$/);
    let num = document.getElementById("input");
    var newnum = num.value;
    
    if (reg.test(newnum)){
        alert("提交成功！");
    }else{
        alert("格式有错误");
    }
}
