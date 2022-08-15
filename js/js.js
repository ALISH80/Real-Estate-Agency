console.log('ok');

let right_state = true;
let banner_btn = $('.btn_handel').children('.btn_1')[0];
let last_clicked_id = banner_btn.id;
$('.btn_1').click(function (e) {
    let w = $(this).width();
    if (last_clicked_id !== $(this).attr('id')){
        let myElement = document.querySelector('.btn-back');
        if(right_state){
            myElement.style.transform = "translateX(" + (-w*1.3) + "px)";
            right_state = false;
        }
        else {
            myElement.style.transform = "translateX(" + (0) + "px)";
            right_state = true;
        }
        last_clicked_id = $(this).attr('id');
    }

});