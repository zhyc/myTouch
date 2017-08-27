$(function(){
	$(".next").click(function(){
		$(".boradingBody").animate({left:"-100%"})
	})
	
//	{left:"-"+ 100*index + "%"}
	var index = $(".next").attr("data-index");
	console.log(index);
	var start_x, start_y, end_x, end_y, move_num;
    var client_width = $(window).width();
 
    $("#boradingBody>div").on("touchstart", function(e) {
        start_x = e.originalEvent.targetTouches[0].clientX;
        start_y = e.originalEvent.targetTouches[0].clientY;
        console.log(start_x);
        console.log(start_y);
 
    });
    $("#boradingBody>div").on("touchmove", function(e) {
        $(this).removeClass("slow_action");
        end_x = e.originalEvent.targetTouches[0].clientX;
        end_y = e.originalEvent.targetTouches[0].clientY;
        move_num = (end_x - start_x).toFixed(2);
        console.log(move_num);
        var tf_num = "translateX(" + move_num + "px)";
       $("#boradingBody").css("-webkit-transform", tf_num);
 
    });
    $("#boradingBody>div").eq(index).on("touchend", function() {
        //$(this).addClass("slow_action");
        if (move_num < -(client_width / 2)) {
 			debugger;
            $("#boradingBody").css({
                "-webkit-transform": "translateX(-"+ client_width*index +"px)",
 
            });
 
        } else if (move_num > 0) {
            $("#boradingBody").css({
                "-webkit-transform": "translateX(0px)",
 
            });
        } else {
           $("#boradingBody").css({
                "-webkit-transform": "translateX(0px)",
 
            });
 
        }
 
 
 
 
    });
})
