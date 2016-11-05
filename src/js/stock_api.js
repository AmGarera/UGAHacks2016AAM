/**
 * Created by apdun on 11/5/2016.
 */
var url = 'http://dev.markitondemand.com/MODApis/Api/v2/InteractiveChart/json?parameters=%7B%22Normalized%22%3Afalse%2C%22NumberOfDays%22%3A365%2C%22DataPeriod%22%3A%22Day%22%2C%22Elements%22%3A%5B%7B%22Symbol%22%3A%22AAPL%22%2C%22Type%22%3A%22price%22%2C%22Params%22%3A%5B%22c%22%5D%7D%5D%7D';

function getStocks(symbol) {

    console.log("symbol = " + symbol);

    /**
     * Response handling function.
     * rData  : Data structure containing all objects returned by Alchemy.
     * rArray : Data structure within rData containing article/sentiment objects.
     */
    fetch(url).then (function(response) {
        console.log(response);
        console.log(response.url);
        return response.json();
    }).then (function (response) {
        console.log(response);
    })
}
