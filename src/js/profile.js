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


/* SENTIMENT CALLS START HERE */
var template = function(text) {
    return '<div class="chip"><img id="companyLogoImg" src="https://logo.clearbit.com/" alt="Contact Person"><script type="text/javascript">document.write(globalCompany);</script></div>';
};
var main = function() {
    $('form').submit(function() {
        var todo = $('#todo');
        if (todo.val() !== "") {
            var html = template(todo.val());
            $(html).appendTo('.list');
            $(todo).val("");
        }
        return false;
    });
    $(document).on("click", '.glyphicon-remove', function() {
        $(this).parent().remove();
    });
    $(document).on("click", '.glyphicon-star', function() {
        $(this).toggleClass('active');
    });
};
$(document).ready(main);