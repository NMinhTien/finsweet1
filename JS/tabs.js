$(document).ready(function(){
    $('.tabs-content__item').hide();
    $('.tabs-content__item:first-child').fadeIn();
    $('.right-tabs li').click(function(){    
        // active
        $('.right-tabs li').removeClass('active');
        $(this).addClass('active');
        // show tab
        let id_tabs_content = $(this).children('a').attr('href');
        // alert(id_tabs_content);
        $('.tabs-content__item').hide();
        $(id_tabs_content).fadeIn();
        return false;
    })
});