/*resize and height and plugin animated*/
$(document).ready(function() {
    
$("#portfolio_grid").mixItUp();
    
$(".s_portfolio li").click(function(){
    $(".s_portfolio li").removeClass("active");
    $(this).addClass("active");
});
    
$('.popup').magnificPopup({type:'image'});
$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
});
       
$(".top_text h1").animated("fadeInDown", "fadeOutUp");
$(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");
$(".animation_2").animated("fadeInLeft", "fadeOutLeft");
$(".animation_3").animated("fadeInRight", "fadeOutRight");
$(".animation_1").animated("flipInY", "flipOutY");
$(".left").animated("fadeInLeft", "fadeOutLeft");
$(".contact_height").animated("fadeInLeft", "fadeOutLeft");
$(".right").animated("fadeInRight", "fadeOutRight");
$(".main_form").animated("fadeInRight", "fadeOutRight");
$(".filter_div").animated("fadeInRight", "fadeOutRight");
$("#portfolio_grid").animated("fadeInLeft", "fadeOutLeft");
     
function heightDetect() {
    $(".main_head").css("height", $(window).height());
};
heightDetect();
$(window).resize(function() {
    heightDetect();
});

/*Кнопка меню*/    
    
$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});  
});

/*Создаю открытие popup окна*/
$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
});

/*Loader & preloader*/

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

$("input, select, textarea").jqBootstrapValidation();

$(".top_mnu ul a").mPageScroll2id();

/*Активация кнопки маню*/
$(document).ready(function(){
	$('.nav_button').click(function(){
		$('#burger').toggleClass('active-sandwich');
	});
});



