/**
 * Created by apdun on 11/4/2016.
 */

//https://gateway-a.watsonplatform.net/calls/data/GetNews?apikey=b6d15d85a0a1b7f76fcf63b53298a8568eefdf89

var sScores = [];
var allScores = top.sScores;

function callAlchemy(companyName) {

    console.log("companyName = " + companyName);
    sScores = [];

    /**
     * Response handling function.
     * rData  : Data structure containing all objects returned by Alchemy.
     * rArray : Data structure within rData containing article/sentiment objects.
     */


    fetch("https://gateway-a.watsonplatform.net/calls/data/GetNews?outputMode=json&start=now-3h&end=now&count=5&q.enriched.url.title="+ companyName +"&return=enriched.url.url,enriched.url.title,enriched.url.docSentiment.type,enriched.url.docSentiment.score,enriched.url.entities.entity.text&apikey=267ae3c897e398964e788596d723841287e7c700")
        .then(function(rData) {
            console.log(rData);
            console.log(rData.url);
            companySearch(companyName);
            return rData.json();
        }).then(function (rData) {
        console.log(rData);
        console.log(rData.status);
        // bruteForce(rData.status, companyName);
        var rArray = rData.result.docs;
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
        calcSetiment();
        // document.getElementById("status").innerText = rData.status;
    }).catch(function(err) {
        // Error :(
        console.log(err)
    });

}

/**
 * Use if no more API transactions for the day.
 */
function bruteForce(status, companyName) {
    if (status === "ERROR") {
        console.log("Loop");
        callAlchemy(companyName);
    }
    else {
        return true;
    }
}
