let panels=document.querySelectorAll('.panel');
panels.forEach(panel=>{
    panel.addEventListener('click',function(){
        removeClass();
        panel.classList.add('active');
    })
})
function removeClass(){
    panels.forEach(panel=>{
        panel.classList.remove('active');
    })
}