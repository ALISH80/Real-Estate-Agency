console.log('ok');

let right_state = true
$('.btn_1').click(function (e) {
    let w = $(this).width();
    let myElement = document.querySelector('.btn-back');
    if(right_state){
        myElement.style.transform = "translateX(" + (-w*1.3) + "px)";
        right_state = false;
    }
    else {
        myElement.style.transform = "translateX(" + (0) + "px)";
        right_state = true;
    }

});