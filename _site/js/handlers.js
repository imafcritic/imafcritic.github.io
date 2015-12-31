App = {};
App.main_id = null;
App.startTime = null;

App.initialisation = function () {

    //Show divs
    $("main").show();
    $(".sidebar").show();

    // All sides
    var sides = ["left","right"];

    // Initialize sidebars
    for (var i = 0; i < sides.length; ++i) {
        var cSide = sides[i];
        $(".sidebar." + cSide).sidebar({ side: cSide });
    }

    //get the first  ul  and save to main
    $("#main_article").empty();
    var $first_article = $('#all_articles ul li div').first();

    main_id ="#"+$first_article.attr("id");
    // $("#main_article").load(getRef(main_id));
    $("#main_article").hide().html($first_article.html()).show(500);
    $first_article.empty();
}


App.ChangeMainArticle = function ($thisElem) {
   
    var action = $thisElem.attr("data-action");
    if (action =="toggle") {
        if (App.startTime != null) {
            var time = new Date().getTime() - App.startTime;
            if (time < 80) {
                return false;
            }
            App.startTime = null;
        }

        var side = $thisElem.attr("data-side");
        $(".sidebar." + side).trigger("sidebar:" + action);
    }
    else {
        
        App.startTime = new Date().getTime();

        var current_id ="#"+$thisElem.attr("tag");

        var $currentArticle = $(current_id);
        //put the content of main back to its place
        //get the element
        $(main_id).empty();
        $(main_id).hide().html($("#main_article").contents()).show(500);
        //$("#" + main_id).load(getRef(main_id));
        // put the selected on into main 
        $("#main_article").empty();
        $("#main_article").hide().html($currentArticle.contents()).show(500);
        //$("#main_article").load(ref);
        main_id = current_id;
        // empty out the selected one 
        $currentArticle.empty();
        App.changeCommentsUrl(main_id);
    }
    return false;
}

App.getRef = function (id) {
    return"articles/" + id +".html";
}

App.getID = function (ref) {
    return ref;
}