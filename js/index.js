
document.addEventListener('DOMContentLoaded',function(){
    var myMenu = document.querySelector('.my-header nav');
    console.log(myMenu)
    var menuY = 200;
    var menuFlag = 0;
    document.addEventListener('scroll',function(){
        
        var currentY = window.pageYOffset;
        console.log(currentY)
        if(currentY>100 && menuFlag===0){
            myMenu.classList.add('menu-small')
            menuFlag=1;
        }
        else if(currentY<100 && menuFlag===1){
            myMenu.classList.remove('menu-small')
            menuFlag=0;
        }
        console.log(window.pageYOffset);
    })
})