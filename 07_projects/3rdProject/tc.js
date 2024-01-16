const clock=document.getElementById('clock')




// Event Control Method
setInterval(function(){
    let date=new Date()
    clock.innerHTML=date.toLocaleString()
}, 1000);