/**
 * Created by apdun on 11/4/2016.
 */

//https://gateway-a.watsonplatform.net/calls/data/GetNews?apikey=b6d15d85a0a1b7f76fcf63b53298a8568eefdf89
var url = "https://gateway-a.watsonplatform.net/calls/data/GetNews?";
var apikey =  "b6d15d85a0a1b7f76fcf63b53298a8568eefdf89";
var mode = "&outputMode=json";
var timeFrame = "&start=now-7d&end=now&count=1";
var search = "q.enriched.url.entities.entity=|text=";
var type = "type=company|";

function callAlchemy(companyName) {

    // Simple response handling
    fetch(url + "apikey=" + apikey + mode + mode + timeFrame + search + companyName + type).then(function(response) {
        console.log(response);
        var watsonData = JSON.parse(response);
        console.log(watsonData.result)
    }).catch(function(err) {
        // Error :(
        console.log(err)
    });

}
