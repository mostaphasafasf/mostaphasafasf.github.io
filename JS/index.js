$(function(){
	
	$('#about').click(function () {
    $('html, body').delay(380).animate({scrollTop:500}, 'slow');
    return false;
	});			
	$('#features').click(function () {
    $('html, body').delay(380).animate({scrollTop:2000}, 'slow');
    return false;
	});	
		$('#slidebuttoni').click(function () {
    $('html, body').delay(380).animate({scrollTop:800}, 'slow');
    return false;
	});	
			$('#featuresbeforefooter').click(function () {
    $('html, body').delay(380).animate({scrollTop:800}, 'slow');
    return false;
	});	

			/* ...............................respensive..........................*/
			$('#navicon').click(function(){
				$('.navlili').css({'width':'60%'})

			});
});