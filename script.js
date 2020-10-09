function showhidemenu(){
    let mn = document.querySelector('#topnav')
    if(mn.style.display==='flex'){
        mn.style.display = 'none'
    }else{
        mn.style.display = 'flex'
    }
}