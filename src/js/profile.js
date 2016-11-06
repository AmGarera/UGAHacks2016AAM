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
    });
    console.log(localStorage.getItem("symbol"));
    document.getElementById("cName").innerText = localStorage.getItem("symbol");
    document.getElementById("rating").innerText = localStorage.getItem("sRating");
    document.getElementById("cValue").innerText = localStorage.getItem("cValue");
    document.getElementById("cLogo").src = localStorage.getItem("cLogo");

});

//Chart.js setup
var ctx = document.getElementById("pChartsCanvas");
var pChartsCanvas = new Chart(ctx, {
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

//Add companies to list and remove them
$('.addCompany').click(function(e) {
    e.preventDefault();

    var name = localStorage.getItem("cName");
    var symbol = localStorage.getItem("symbol");
    var rating = localStorage.getItem("rating");

    saveCompanyList(rating, symbol, name)

    $(".collapsible-body").append(
        '<div class="chip">' + returnedData() + '</div>');
});

// Remove parent of 'remove' link when link is clicked.
$('.chip').on('click', '.chip', function(e) {
    e.preventDefault();

    $(this).parent().remove();
});

