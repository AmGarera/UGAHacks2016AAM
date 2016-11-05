function getCompanyName() {


    if(event.keyCode == 13) {
        $("#companyLogoImg").attr('src', 'https://logo.clearbit.com/');
        var input = document.getElementById("search").value;
        $("#companyLogoImg").attr('src', $('#companyLogoImg').attr('src') + input + ".com");
    }
}
