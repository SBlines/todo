function adder() {
	var input = $("#thingtodo").val();
	$('ul').append("<li><input class='check' type='checkbox'/><span>"+input+"</span></li>");
	$("#thingtodo").val("");
		$('ul li:last-child').children("input.check").click(function(){
		$(this).siblings('span').toggleClass('strike');
		}); //end input.check click function
	$('#thingtodo').focus();
	};


$(function(){
	$(".addtolist").click(adder);
	$("#thingtodo").keypress(function(e){
		if (e.keyCode == 13 || e.keyCode == 108){
			adder();
		}
	})



$("button.clear").on("click", function(){
	$('span.strike').closest('li').remove();

});
}); //end doc load

// $(".addtolist").on("click",function(){
// 	var input = $("#thingtodo").val();
// 	$('ul').append("<li><input class='check' type='checkbox'/><span>"+input+"</span></li>");
// 	$("#thingtodo").val("");
// 		$('ul li:last-child').children("input.check").click(function(){
// 		$(this).siblings('span').toggleClass('strike');
// 		}); //end input.check click function
// 	$('#thingtodo').focus();
// 	});



