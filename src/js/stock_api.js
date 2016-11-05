/**
 * Created by apdun on 11/5/2016.
 */
var url = "https://www.quandl.com/api/v3/datasets/WIKI/AAPL.json?column_index=4&order=asc&collapse=quarterly&start_date=2012-01-01&end_date=2013-12-31&api_key=";
var apiKey = "hBsaZY9LvrjvdqwB-QLt";

var dateArray = [];
var priceArray = [];

function getStocks(symbol) {

    console.log(symbol);

    /**
     * Response handling function.
     * response  : Data structure containing all objects returned by Quandl.
     * rArray : Data structure within rData containing article/sentiment objects.
     */
    fetch(url + apiKey)
        .then(function(response) {
            console.log(response);
            return response.json();
        }).then(function (response) {
            console.log(response);
            var rArray = response.dataset.data;
            console.log(rArray);
        // console.log(rArray[0].source);
        for (var i = 0; i < rArray.length; i++)
        {
            console.log("InsideLoop");
            console.log("Date: "  + rArray[i][0]);
            console.log("Price: " + rArray[i][1]);
            dateArray.push(rArray[i][0]);
            priceArray.push(rArray[i][1])
        }
        console.log(priceArray);
    }).catch(function(err) {
        // Error :(
        console.log(err)
    });

    var ctx = document.getElementById("stockChart").getContext('2d');
    var stockChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dateArray,
            datasets: [{
                backgroundColor: [
                    "#00e676"
                ],
                data: priceArray
            }]
        },
        options: {
            tooltips: true,
            responsive: false
        }

    });
}
