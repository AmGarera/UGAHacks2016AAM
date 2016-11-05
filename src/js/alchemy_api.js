/**
 * Created by apdun on 11/4/2016.
 */

//https://gateway-a.watsonplatform.net/calls/data/GetNews?apikey=b6d15d85a0a1b7f76fcf63b53298a8568eefdf89
var url = "https://gateway-a.watsonplatform.net/calls/data/GetNews?";
var apikey =  "5630a4a68f741c6df423d94dabba58526fd96518";
var mode = "&outputMode=json";
var timeFrame = "&start=now-3hr&end=now&count=1";
var search = "q.enriched.url.entities.entity=|text=";
var type = "type=company|";
var returns = "&return=enriched.url.docSentiment.type,enriched.url.docSentiment.score";
var rank = "&rank=high";
var count = "&count=4";

// url + "apikey=" + apikey + mode + mode + timeFrame + search + companyName + type
function callAlchemy(companyName) {

    // Simple response handling
    fetch(url + "apikey=" + apikey + mode + mode + timeFrame + search + companyName + type + returns + rank)
        .then(function(rData) {
            console.log(rData);
            console.log(rData.url);
            return rData.json();
    }).then(function (rData) {
        console.log(rData);
        console.log(rData.status);
        // bruteForce(rData.status, companyName);
        var rArray = rData.result.docs;
        var sScores = [];
        console.log(rArray);
        // console.log(rArray[0].source);
        for (var i = 0; i < rArray.length; i++)
        {
            // console.log([i]);
            console.log(rArray[i].source.enriched.url.docSentiment.type);
            console.log(rArray[i].source.enriched.url.docSentiment.score);
            sScores.push(rArray[i].source.enriched.url.docSentiment.score);
        }
        console.log(sScores);
        // document.getElementById("status").innerText = rData.status;
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
