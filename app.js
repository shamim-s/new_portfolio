let textWrapper = document.getElementById('content-wrapper');
let fluid = document.getElementById('fluid');
let buttion = document.getElementById('btn');

textWrapper.style.opacity = '0%';
fluid.style.marginLeft = '100%';

buttion.style.scale = '0';

function pageLoad() {
    textWrapper.style.transition = 'opacity 1s ease-in';
    textWrapper.style.opacity = '100%';
    fluid.style.marginLeft = '0%';
    fluid.style.transition = '0.8s ease-in';

    buttion.style.scale = '1';
    buttion.style.transition = '0.2s ease-in';
    buttion.style.transitionDelay = '0.2s ease-in';
}

// navbar animations 
let icon1 = document.getElementById('one');
let icon2 = document.getElementById('absolute');

icon1.style.bottom = "0px";
icon2.style.top = "-40px";

function mouse_in() {
    icon1.style.transition = '0.2s ease-in';
    icon1.style.bottom = "-40px";

    icon2.style.bottom = "-400px";
    icon2.style.transition = '0.2s ease';

}

function mouse_out() {
    icon1.style.transition = '0.2s ease-in';
    icon1.style.bottom = "0px";

    icon2.style.bottom = "0px";
    icon2.style.transition = '0.2s ease';

}


let menuIcon = document.getElementById('menu_icon');
let drop_down = document.getElementById('drop_down');

drop_down.style.transition = 'all 0.3s ease';
drop_down.style.height = '0px';
drop_down.style.padding = '0px';

let line1 = document.getElementById('line_1');
let line2 = document.getElementById('line_2');

let isTrue = false;

menuIcon.addEventListener('click', function() {
    isTrue = !isTrue;

    if (isTrue) {

        line1.style.transition = '0.3s ease';
        line1.style.marginBottom = '0px';
        line1.style.rotate = '45deg';

        line2.style.transition = '0.3s ease';
        line2.style.rotate = '-45deg';

        drop_down.style.transition = 'all 0.4s ease';
        drop_down.style.height = 'auto';
        drop_down.style.padding = '30px';

    } else {
        line1.style.transition = '0.4s ease';
        line1.style.marginBottom = '10px';
        line1.style.rotate = '0deg';

        line2.style.transition = '0.4s ease';
        line2.style.rotate = '0deg';

        drop_down.style.transition = 'all 0.3s ease';
        drop_down.style.height = '0px';
        drop_down.style.padding = '0px';
    }
})

// about section

let about = document.getElementById('about');