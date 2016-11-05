function getCompanyName() {


    if(event.keyCode == 13) {
        var input = document.getElementById("search").value;
        $("#companyLogoImg").attr('src', $('#companyLogoImg').attr('src') + input + ".com");
    }
}
