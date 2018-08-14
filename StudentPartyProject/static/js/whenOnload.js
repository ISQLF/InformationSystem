/**
 * Created by QLF on 2018/4/11.
 */
window.onload = function () {
    var menu_btn = document.getElementById('menu_btn');
    var accordion = document.getElementById('accordion');
    var left_nav = document.getElementById('left_nav');
    var right_nav=document.getElementById('right_nav');

    var screenWidth=window.screen.availWidth;

    if (screenWidth<768) {
        right_nav.className='col-sm-12 col-xs-12 center-block';
        menu_btn.onclick = function () {
            if (left_nav.className == 'col-lg-2 col-sm-2 col-xs-3 hidden-xs') {
                left_nav.className = 'click_menu';
            }
            else {
                left_nav.className = 'col-lg-2 col-sm-2 col-xs-3 hidden-xs'
            }

        }
    }
    else {
        left_nav.className = 'col-lg-2 col-sm-2 col-xs-3 hidden-xs';
        right_nav.className='col-lg-10 col-sm-10 col-xs-9';
    }
}
