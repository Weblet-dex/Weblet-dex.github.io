let dBg = true; //debugging
//let lastY = 0; //previous window height value for comparison
//let dLog = dBg ? document.getElementById("logTxt") : ""; //debugging

$(document).ready(function($){
    // if ($(window).width() < $('.hero-pr').width()) {
    //     $('.hero-pr').each(function(){
    //         let left = (($(window).width() - $(this).width()) / 2) + 'px';
    //         $(this).css('left', left);
    //     });
    // }
    //ovrY = $('.herolay').height();
    //$('.herolay').css('top', -$('.herolay').height());
    //lastY = $(window).height();
    //if(dBg) console.log('lastY: ' + lastY + ' - winHt: ' + $(window).height());
}(jQuery));



$(window).resize(function(){
    // if($(window).height() != lastY){
    //     $('.herolay').css('top', -$('.herolay').height());
    // }
    //if(dBg) console.log('lastY: ' + lastY + ' - winHt: ' + $(window).height());
    //$('.herolay').css('top', -$('.herolay').height());
    //if(dBg) console.log('herolay top' + $('.herolay').css('top') + ' - height: ' + $('.herolay').height());

    //if(dBg) console.log('width: ' + $(window).width() + ' height: ' + $(window).height());
    //if(dBg) console.log('img width: ' + $('.hero-pr').width() + ' img height: ' + $('.hero-pr').height());
    // if ($(window).width() < $('.hero-pr').width()) {
    //     $('.hero-pr').each(function(){
    //         //set the img left position to half the difference between the window width and the img width
    //         let left = (($(window).width() - $(this).width()) / 2) + 'px';
    //         $(this).css('left', left);
    //     });
    // }else{
    //     $('.hero-pr').each(function(){
    //         $(this).css('left', '0px');
    //     });
    
    // }
});

$(window).scroll(function(){
    //if(dBg) console.log(window.scrollY);

	// $('.hero-pr').each(function(){
    //     var pScrll = (window.scrollY * 0.5) + 'px';
    //     if(dBg) console.log('offsetTp: ' + $(this).offset().top + ' - height: ' + $(this).height());
    //     var offstBtm = $(this).offset().top + $(this).height();
	// 	if (($(this).offset().top) < (window.scrollY + 56) && window.scrollY < offstBtm) {
    //         var olTp = $(this).css('top');
    //         $(this).css('top', pScrll);
    //         if(dBg) console.log('Mid - offsetTp: ' + $(this).offset().top + ' - +56: ' + (window.scrollY + 56) + '| scrollY: ' + window.scrollY + ' - offstBtm: ' + offstBtm);
    //         if(dBg) console.log('Mid - old top: ' + olTp + ' - new top: ' + pScrll);
	// 	}else if(window.scrollY < 1){
    //         $(this).css('top', '0px');
    //         if(dBg) console.log('Top - offsetTp: ' + $(this).offset().top + ' top: ' + $(this).css('top') + ' scrollY: ' + window.scrollY);
	// 	}else if(window.scrollY > offstBtm){
    //         if(dBg) console.log('Below - scrollY: ' + window.scrollY + ' - offstBtm: ' + offstBtm);
    //     }else{}
	// });
    // $('.hero-pr').each(function(){
    //     //if(dBg) console.log('bottom: ' + $(this).css('bottom') + ' - offset: ' + $(this).offset().top + ' - height: ' + Number($(this).css('height')) + ' - winScrTop: ' + window.scrollY);
    //     if(dBg) console.log('bottom: ' + $(this).css('bottom') + ' - offset: ' + ($(this).offset().top + $(this).height()) + ' - winScrTop: ' + window.scrollY);
    //     // if(dBg) console.log($(this).offset().top +  $(this).css('height'));
    //     if(dBg) console.log($(this).height());
    // });
});

$('.navbar-toggler').click(function(){
    if(dBg) console.log($('#navbarNav').css('display'));
    if($('#navbarNav').css('display') == 'none'){
        $('.navbar').css('background-color', 'var(--darkgreen)');
    }else{
        $('.navbar').css('background-color', 'var(--transprnt)');
    }
});

window.addEventListener("keydown", function(event) {
    if (event.key === "t") {
        //log the scrolltop value of the page
        if(dBg) console.log(window.pageYOffset);
        if(dBg) console.log(document.body.scrollTop);  
        //if(dBg) console.log(this.window.screenX, this.window.screenY);
        //if(dBg) console.log("menuEnd height: " + lastItm.getBoundingClientRect().height);
    }
    if (event.key === "s") {
        $(window).scrollTop(window.scrollY+1);
    }
    if (event.key === "w") {
        $(window).scrollTop(window.scrollY-1);
    }
    if (event.key === "q") {
        $(window).scrollTop(window.scrollY-3);
    }
    if (event.key === "a") {
        $(window).scrollTop(window.scrollY+3);
    }
});

window.onbeforeunload = function() {
    if(dBg) console.log(window.scrollY);
    if(dBg) console.log($(window).scrollTop());
    window.scrollTo(0, 0);
}

//colours
//dark green: #0a5c11
//yellow/gold: #ffce20
//faded yellow/gold: #f6d365
//faded blue: #2460ae

// $(window).resize(function(){
//     if(dBg) console.log('width: ' + $(window).width() + ' height: ' + $(window).height());
//     if(dBg) console.log('img width: ' + $('.hero-pr').width() + ' img height: ' + $('.hero-pr').height());
//     if ($(window).width() < $('.hero-pr').width()) {
//         $('.parallax').each(function(){
//             //set the img left position to half the difference between the window width and the img width
//             let left = (($(window).width() - $('.hero-pr').width()) / 2) + 'px';
//             $(this).find('img').css('left', left);
//         });
//     }
// });