
$('img[data-default-src]').each(function(){
    var defaultSrc = $(this).data('default-src');
    $(this).on('error', function(){
        $(this).attr({src: defaultSrc});
    });
});

$('searchIcon').addClass('active');

//Side nav enabled and configured
$('.button-collapse').sideNav({
      menuWidth: 240,
      edge: 'right',
      closeOnClick: true,
      draggable: true
    }
);

//Collapsible company section enabled
$(document).ready(function(){
    $('.collapsible').collapsible();
    $('.button-collapse').sideNav({
      menuWidth: 240,
      edge: 'right',
      closeOnClick: true,
      draggable: true
    }
);
});

//Chart.js setup
var ctx = document.getElementById("pChartsCanvas").getContext("2d");
var posnegChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

$('searchIcon').addClass('active');

var searchedCompany = [];
var globalSearchedCompanies = searchedCompany;


function getCompanyName() {

    if (event.keyCode == 13) {
        $("#companyLogoImg").attr('src', 'https://logo.clearbit.com/');
        // searchedCompany.push(document.getElementById("search").value);
        $("#companyLogoImg").attr('src', $('#companyLogoImg').attr('src') + searchedCompany[searchedCompany.length - 1] + ".com");


        callAlchemy(globalSearchedCompanies[globalSearchedCompanies.length - 1]);
        localStorage.setItem("cName", globalSearchedCompanies[globalSearchedCompanies.length - 1]);
        localStorage.setItem("cLogo", "https://logo.clearbit.com/" + globalSearchedCompanies[globalSearchedCompanies.length - 1] + ".com")

    }
}


// /* SENTIMENT CALLS START HERE */
// //STOCK PROVIDES THESE
// window.symbol;
// window.cValue;
//
// //ALCH PROVIDES THESE
// window.cName;
// window.sRating;
// window.cLogo;
//
// window.cName = globalSearchedCompanies[globalSearchedCompanies.length - 1];
// window.sRating = sentimentScore;
// window.cLogo = "https://logo.clearbit.com/" + cName + ".com";
