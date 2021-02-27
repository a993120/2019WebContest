$(function(){ 
    $(".navmenu").mouseover(function(){ 
        $(this).children("ul").show();  
    }) 
    $(".navmenu").mouseout(function(){ 
        $(this).children("ul").hide();
    }) 
    $(".navmenu").children("ul").hide();
    $(window).scroll(function () {
        var window_height = $(window).height();
        var window_scrollTop = $(window).scrollTop();
        var document_height = $(document).height();
        if(window_height + window_scrollTop == document_height){
            setTimeout(
                function() 
                {
                    $("#button-1,#button-2").removeClass("disabled");
                }, 600);
        }
        else {
            $("#button-1,#button-2").addClass("disabled");
        }
    })
    }) 