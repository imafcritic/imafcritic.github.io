 
function changeCommentsUrl(newUrl) {
    // should refresh fb comments plugin for the "newUrl" variable
    $(".fb-comments").attr("data-href", $(".fb-comments").attr("tag")+newUrl);//
     FB.XFBML.parse(document.getElementById('comments'));
}