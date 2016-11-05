/**
 * Created by apdun on 11/4/2016.
 */

//https://gateway-a.watsonplatform.net/calls/data/GetNews?apikey=b6d15d85a0a1b7f76fcf63b53298a8568eefdf89
var url = "https://gateway-a.watsonplatform.net/calls/data/GetNews?";
var apikey =  "b6d15d85a0a1b7f76fcf63b53298a8568eefdf89";
var mode = "&outputMode=json";
var timeFrame = "&start=now-3d&end=now&count=1";
var search = "q.enriched.url.entities.entity=|text=";
var type = "type=company|";
var returns = "&return=enriched.url.docSentiment.type";
var rank = "&rank=high";

// url + "apikey=" + apikey + mode + mode + timeFrame + search + companyName + type
function callAlchemy(companyName) {

    // Simple response handling
    fetch(url + "apikey=" + apikey + mode + mode + timeFrame + search + companyName + type + returns)
        .then(function(response) {
            console.log(response);
            console.log(response.url);
            return response.json();
    }).then(function (j) {
        console.log(j);
        console.log(j.status);
        bruteForce(j.status, companyName);
        // j.docs.forEach()
        // console.log(j.source.enriched.url.docSentiment.type);
        document.getElementById("status").innerText = j.status;
    }).catch(function(err) {
        // Error :(
        console.log(err)
    });

}


function bruteForce(status, companyName) {
    if (status === "ERROR") {
        console.log("Loop");
        callAlchemy(companyName)
    }
    else {
        return true
    }
}
