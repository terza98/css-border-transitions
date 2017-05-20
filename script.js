//appending the function if the ajax loading is finished
 document.addEventListener('pageChange', function(){ 
   setNavigation();
   console.log("the new page id is –", document.body.id);
 });
//appending the <span> element to a product's <a> tag
$(document).ready(function () {
    $( ".index-item-link" ).prepend( '<span class="left-border"></span>' );
});

 // init watch function
 window.onload = watch;
 function watch(){
    MutationObserver=window.MutationObserver||window.WebKitMutationObserver;
    var a=new MutationObserver(function(a){
        for(var b=0;b<a.length;b++){
            var c=a[b];
            if("attributes"===c.type){
                var d=new Event("pageChange");
                document.dispatchEvent(d)
            }
        }
});
    a.observe(document.body,{attributes:!0,attributeFilter:["id"]})}

//if the url path of the browser matches the url in <a> tag of the page 
//the class "active" is appending to the navigation.
function setNavigation() {
    var path = window.location.pathname;
    path = path.replace(/\/$/, "");
    path = decodeURIComponent(path);

    $(".site-navigation a").each(function () {
        var href = $(this).attr('href');
        if (path.substring(0, href.length) === href) {
            $(this).closest('.nav-item').addClass('active');
        }
    });
}
