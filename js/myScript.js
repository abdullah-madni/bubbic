$(document).ready(function(){
    if (window.innerWidth < 768) {
        $('#section1 .img-main').attr('src', 'img/section1-img1-sm.png')
    }


    $('#myNavbar .navbar-toggler').click(function(){
        $('#myNavbar .navbar-toggler > i').toggleClass('fa-bars');
        $('#myNavbar .navbar-toggler > i').toggleClass('fa-xmark');
    });



    // my accord
    $('#myAccord li .header').click(function(){

        var x = $(this).parent().hasClass('active');
        
        $('#myAccord li').removeClass('active')
        $('#myAccord li .body').slideUp();

        if (!x) {
            $(this).next().slideDown().parent().addClass('active');
        }
        
    });



    // Text slider
    new Splide('#txtSlider', {
        type   : 'loop',
        drag   : 'free',
        focus  : 'center',
        perPage:  checkForTxtSlider(),
        autoScroll: {
          speed: 1,
        },
        arrows: false,
    }).mount(window.splide.Extensions);

    // Image slider
    new Splide('#ImgSlider', {
       type   : 'loop',
       drag   : 'free',
       focus  : 'center',
       perPage: checkForImgSlider(),
       autoScroll: {
         speed: 1,
       },
       arrows: false,
       pagination: false,
   }).mount(window.splide.Extensions);



});



function checkForTxtSlider(){
    if (window.innerWidth < 900) {
        if (window.innerWidth < 700) {
            if (window.innerWidth < 500) {
                return 1;
            } else {
                return 1.5;
            }
        } else {
            return 2;
        }
    } else {
        return 2.5;
    }
}

function checkForImgSlider(){
    if (window.innerWidth < 1400) {
        if (window.innerWidth < 1180) {
            if (window.innerWidth < 660) {
                if (window.innerWidth < 530) {
                    if (window.innerWidth < 400) {
                        return 1;
                    } else {
                        return 1.5;
                    }
                } else {
                    return 2;
                }
            } else {
                return 2.5;
            }
        } else {
            return 3;
        }
    } else {
        return 3.5;
    }





}