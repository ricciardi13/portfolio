function start(){
    $("#wrapper").on("click", ".js-nav-icon", function(){
        $(".js-nav-list").toggle();
    });
}

$(start);