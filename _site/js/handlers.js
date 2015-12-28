$(document).ready(function () {


    function getRef(id) {
        return "articles/" + id + ".html";           // The function returns the product of p1 and p2
    }
    function getID(ref) {
        return ref;           // The function returns the product of p1 and p2
    }
    // All sides
    var sides = ["left",  "right" ];
   // $("h1 span.version").text($.fn.sidebar.version);

    // Initialize sidebars
    for (var i = 0; i < sides.length; ++i) {
        var cSide = sides[i];
        $(".sidebar." + cSide).sidebar({ side: cSide });
    }
    //create global var
    var     main_id =null; 


    //get the first  ul  and save to main
    $("#main_article").empty();
    var $first_article = $('#all_articles ul li div').first();

    main_id = $first_article.attr("id");
   // $("#main_article").load(getRef(main_id));
    $("#main_article").hide().html($first_article.html()).show(500);
    $first_article.empty();


    // Click handlers
    $(".btn[data-action]").on("click", function () {
        var $thisElem = $(this);
        var action = $thisElem.attr("data-action");
        if (action=="toggle"){
            var side = $thisElem.attr("data-side");
            $(".sidebar." + side).trigger("sidebar:" + action);
        }
        else {

            var $currentArticle = $thisElem.parent();
            var ref = $thisElem.attr("tag");
            
            var current_id = $currentArticle.attr("id");



            //put the content of main back to its place
            //get the element
            $("#" + main_id).empty();
            $("#" + main_id).hide().html($("#main_article").html()).show(500);
            //$("#" + main_id).load(getRef(main_id));
            // put the selected on into main 
            $("#main_article").empty();
            $("#main_article").hide().html($thisElem.parent().html()).show(500);
            //$("#main_article").load(ref);
            main_id = current_id; 
            // empty out the selected one 
            $currentArticle.empty();
            changeCommentsUrl("http://imafcritic.github.io/articles//"); 
        }
        return false;
    });
});
