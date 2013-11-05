

$(function(){

$(".addtolist").on("click",function(){
	var input = $("#thingtodo").val();
	$('ul').append("<li><input class='check' type='checkbox'/><span>"+input+"</span></li>");
	$("#thingtodo").val("");
		$('ul li:last-child').children("input.check").click(function(){
		$(this).siblings('span').toggleClass('strike');
		}); //end input.check click function
	$('#thingtodo').focus();
	});

$("button.clear").on("click", function(){
	$('span.strike').closest('li').remove();

});
}); //end doc load







