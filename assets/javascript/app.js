$('#btn-start').mouseover( function() {

    var name = "";

    $(".btn-start").hover(function() {
        name = $(this).attr("#btn-start");
        $(this).stop().show().animate({ opacity: 1 });
    }, function() {
        name = $(this).attr("id");
        $("#image-"+name).stop().animate({ opacity: 0 });
    });

});