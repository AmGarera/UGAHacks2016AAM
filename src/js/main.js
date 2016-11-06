$('searchIcon').addClass('active');

var searchedCompany = [];
var globalSearchedCompanies = top.searchedCompany;

function getCompanyName() {

    if(event.keyCode == 13) {
        $("#companyLogoImg").attr('src', 'https://logo.clearbit.com/');
        searchedCompany.push(document.getElementById("search").value);
        $("#companyLogoImg").attr('src', $('#companyLogoImg').attr('src') + searchedCompany[searchedCompany.length - 1] + ".com");
    }
}