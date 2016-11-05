
$('img[data-default-src]').each(function(){
    var defaultSrc = $(this).data('default-src');
    $(this).on('error', function(){
        $(this).attr({src: defaultSrc});
    });
});
//TODO Fix this so that Company Logo's work.
function getCompanyName(form) {
    var cName = form.action;
    $("#companyLogoImg").attr('src', $('#companyLogoImg').attr('src') + "https://logo.clearbit.com/" + cName + ".com");
    console.log(cName);
}

// $("#search").keyup(function(event){
//     if(event.keyCode == 13){
//         $("#companyLogoImg").attr('src', $('#companyLogoImg').attr('src') + "https://logo.clearbit.com/" + domain + ".com");
//         return false;
//     } else {
//         return true;
//     }
// });



// function getCompanyLogo(e) {
//     var domain = document.getElementById("search");
//     fetch("https://logo.clearbit.com/" + domain)
//         .then(function (response) {
//             console.log(response);
//             return response;
//
//         });
//
//     $("#companyLogoImg").attr('src', $('#companyLogoImg').attr('src') + domain + ".com")
//
// }
