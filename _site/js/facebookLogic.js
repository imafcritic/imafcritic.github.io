 
function changeCommentsUrl(newUrl) {
    // should refresh fb comments plugin for the "newUrl" variable
     $(".fb-comments").attr("data-href" ,newUrl);
     FB.XFBML.parse(document.getElementById('comments'));
}