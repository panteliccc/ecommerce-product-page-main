$(document).ready(function(){
    $('.basket').css('display','none');
    var ind = false;
    $('.ham').click(function(){
        $('.links').css('display','flex');
        $('.bg-menu').css('display','block');
    });
    $('.close').click(function(){
        $('.links').css('display','none');
        $('.bg-menu').css('display','none');
    });
    var br = 1;
    $('.next').click(function(){
        $('.preview'+br).removeClass('active_image');
        if(br < 4) { br++; }
        else { br = 1;}
        $('.preview'+br).addClass('active_image');
        
        console.log(br)
    });
    $('.prev').click(function(){
        $('.preview'+br).removeClass('active_image');
        if(br > 1) { br--; }
        else { br = 4}
        $('.preview'+br).addClass('active_image');
        
        console.log(br) 
    });
    $('.thumbnail').click(function(){
        $('.thumbnail').removeClass('active');
        $(this).addClass('active');
        $('.preview').removeClass('active_image');
        $('.preview'+$(this).attr('id')).addClass('active_image');
    });
    $('.preview').click(function(){
        if($(window).width() > 820)
        $('.light_box').css('display','block');
        else 
        $('.light_box').css('display','none');
    });
    $('.light_box .close').click(function(){
        $('.light_box').css('display','none');
        
    });
    if($(window).width() > 820)
    $('.light_box').css('display','none');
    var br_p = 0;
    var price = 125.0;
    $('.plus').click(function(){
        br_p++;
        $('.quantity').text(br_p);    
    });
    $('.minus').click(function(){
        br_p--;
        if(br_p < 0) { 
            $('.quantity').text('0');
            br_p = 0;
        }
        else
        $('.quantity').text(br_p);    
    });
    $('.btt').click(function(){
        $('.nav .sing h3').text(br_p);
        $('.br_prod').text(br_p);
        check_cart();
        $('.res').text((br_p * price)+".00");
    });
    function check_cart(){
        if(br_p == 0){ 
            $('.text_cart').css('display','block');
            $('.cart_filled').css('display','none');
        }
        else { 
            $('.text_cart').css('display','none');
            $('.cart_filled').css('display','flex');
        }
    }
    $('.btt_cart').click(function(){
        if(ind == false){
            $('.basket').css('display','block');
            ind = true;
        }
        else{
            $('.basket').css('display','none');
            ind = false;
        }
    });
    $('.clear').click(function(){
        br_p = 0;
        $('.nav .sing h3').text(br_p);
        $('.cart_filled').css('display','none');
        $('.text_cart').css('display','block');
        $('.quantity').text(br_p);    
    });
    
});