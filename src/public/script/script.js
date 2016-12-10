
var cv = {
    bindOpenCloseExperience : function (){
        document.querySelectorAll('.open-close').forEach(function(elem){
            elem.addEventListener('click',function(event){
                if (elem.innerHTML === '+') {
                    elem.innerHTML = '-';
                    elem.parentNode.parentNode.querySelectorAll('.yellow-block').forEach(function(elemi){
                        elemi.style.display = 'none';
                    })
                } else {
                    elem.innerHTML = '+';
                    elem.parentNode.parentNode.querySelectorAll('.yellow-block').forEach(function(elemi){
                        elemi.style.display = 'block';
                    })
                }
            })
        })
    }
};

document.addEventListener("DOMContentLoaded", function(event) {
    cv.bindOpenCloseExperience();
});