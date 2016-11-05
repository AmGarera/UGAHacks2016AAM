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
var returns = "&return=enriched.url.docSentiment.type";

// url + "apikey=" + apikey + mode + mode + timeFrame + search + companyName + type
function callAlchemy(companyName) {

    // Simple response handling
    fetch(url + "apikey=" + apikey + mode + mode + timeFrame + search + companyName + type + returns)
        .then(function(response) {
            console.log(response);
            return response.json();
    }).then(function (j) {
        console.log(j);
        console.log(j.status);
        // j.docs.forEach()
        // console.log(j.source.enriched.url.docSentiment.type);
        document.getElementById("status").innerText = j.status;
    }).catch(function(err) {
        // Error :(
        console.log(err)
    });

}
