$(document).ready(function(){
//menu
$('.cmn-toggle-switch').click(function(){
$(this).toggleClass('active');
$('.burger_container').toggleClass('active').slideToggle(200)

});




$('.burger_container>ul>li>a').click(function(){
if($(this).closest('.burger_container').hasClass('active')){
$(this).next().slideToggle(200);
}
})

/**/
$(document).on('click',function (e) {
	$('.bottom').removeClass('active');
});
$('.bottom .bheading').click(function(e){
	 e.stopPropagation();
	$(this).closest('.bottom').toggleClass('active');
	
});
$('.bottom .openform').click(function(e){
	 e.stopPropagation();
	$('.bottom.breviews .content.form').show();
})
$('.bottom.breviews a.down').click(function(e){
	e.preventDefault();
	if($(this).closest('.bottom').find('.reviews_wrapper').find('.r_single:visible').length>2)
		$(this).closest('.bottom').find('.reviews_wrapper').find('.r_single:visible').first().hide();
	if($(this).closest('.bottom').find('.reviews_wrapper').find('.r_single:visible').length>2)
		$(this).closest('.bottom').find('.reviews_wrapper').find('.r_single:visible').first().hide();
})
$('.bottom.breviews a.up').click(function(e){
	e.preventDefault();
	$(this).closest('.bottom').find('.reviews_wrapper').find('.r_single:hidden').last().show();
	$(this).closest('.bottom').find('.reviews_wrapper').find('.r_single:hidden').last().show();
})
$('.bottom.breviews a.close_form').click(function(e){
	e.preventDefault();
	$('.bottom.breviews .content.form').hide();
	
})
$('.bottom').click(function(e){
	e.stopPropagation();
})

});













