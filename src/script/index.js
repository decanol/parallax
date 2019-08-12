window.addEventListener('scroll', function (awesomeParallax) {
    const target = document.querySelector('.back-text');
    const targetHead = document.querySelector('.head-img');
    const targetSmoke = document.querySelector('.smoke-img');
    const targetSpray = document.querySelector('.spray-img');
    const targetJp = document.querySelector('.back-jp-text');
    const targetPero = document.querySelector('.pero');

    var scrolled = window.pageYOffset;
    var rateBg = scrolled * 0.07;
    var rateHead = scrolled * 0.04;
    var rateSmoke = scrolled * -0.05;
    var rateSpray = scrolled * 0.14;
    var rateJp = scrolled * 0.03;
    var ratePero = scrolled * -0.18;

    target.style.transform = 'translate3d(0px,'+rateBg+'px, 0px)';
    targetHead.style.transform = 'translate3d(0px,'+rateHead+'px, 0px)';
    targetSmoke.style.transform = 'translate3d(0px,'+rateSmoke+'px, 0px)';
    targetSpray.style.transform = 'translate3d(0px,'+rateSpray+'px, 0px)';
    targetJp.style.transform = 'translate3d(0px,'+rateJp+'px, 0px)';
    targetPero.style.transform = 'translate3d(0px,'+ratePero+'px, 0px)';
});