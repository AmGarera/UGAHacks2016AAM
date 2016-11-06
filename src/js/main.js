$('searchIcon').addClass('active');

var searchedCompany = [];
var globalSearchedCompanies = window.searchedCompany;

function getCompanyName() {

    if (event.keyCode == 13) {
        $("#companyLogoImg").attr('src', 'https://logo.clearbit.com/');
        searchedCompany.push(document.getElementById("search").value);
        $("#companyLogoImg").attr('src', $('#companyLogoImg').attr('src') + searchedCompany[searchedCompany.length - 1] + ".com");


        callAlchemy(globalSearchedCompanies[globalSearchedCompanies.length - 1]);
        localStorage.setItem("cName", globalSearchedCompanies[globalSearchedCompanies.length - 1]);
        localStorage.setItem("cLogo", "https://logo.clearbit.com/" + globalSearchedCompanies[globalSearchedCompanies.length - 1] + ".com")

    }
}


/* SENTIMENT CALLS START HERE */
//STOCK PROVIDES THESE
window.symbol;
window.cValue;

//ALCH PROVIDES THESE
window.cName;
window.sRating;
window.cLogo;

window.cName = globalSearchedCompanies[globalSearchedCompanies.length - 1];
window.sRating = sentimentScore;
window.cLogo = "https://logo.clearbit.com/" + cName + ".com";