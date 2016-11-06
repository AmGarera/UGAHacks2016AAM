/**
 * Created by apdun on 11/5/2016.
 */
//Makes the sentiment series array gloabl
var sentiemntSeries = [];
var sentimentScore;

$( document ).ready(function() {
    $('#posnegChart').hide();
});

function calcSetiment() {
    var positive = 0;
    var negative = 0;
    var average = 0;
    console.log("Inside calcSentiment");
    console.log(allScores);

    // Loops through the array
    for (var i = 0; i < allScores.length; i++)
    {

        // Determins if its positive, negative, or nutral
        console.log(allScores[i]);
        if (allScores[i] > 0) {
            console.log("Positive " + allScores[i]);
            positive = positive + allScores[i];
            average = average + allScores[i];
        }
        else if (allScores[i] == 0) {
            console.log("Neutral " + allScores[i]);
        }
        else {
            console.log("Negative " + allScores[i]);
            negative = negative + allScores[i];
            average = average + allScores[i];
        }

    }

    console.log("positive" + positive);
    console.log("negative" + negative);
    console.log("average" + average);

    var total = positive + (negative*-1);


    // Pushed the positive, negative and average values into the array
    sentiemntSeries.push((positive + (negative*-1))/(negative*-1), ((negative*-1) + positive)/positive) ;


    // Displays if its positive, negative or neutral
    if (average > 0) {
        document.getElementById("sentiment").innerText = "Positive sentiment!";
        $('#posnegChart').show();
        localStorage.setItem("sRating", positive)

    }
    else if (average == 0) {
        document.getElementById("sentiment").innerText = "Neutral sentiment!";
        $('#posnegChart').hide();
        localStorage.setItem("sRating", 0);
        sentimentScore = 0
    }
    else {
        document.getElementById("sentiment").innerText = "Negative sentiment!";
        $('#posnegChart').show();
        localStorage.setItem("sRating", negative);
        sentimentScore= negative
    }

    console.log(sentiemntSeries);


    var ctx = document.getElementById("posnegChart").getContext('2d');
    var posnegChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Positive Sentiment", "Negative Sentiment"],
            datasets: [{
                backgroundColor: [
                    "#00e676",
                    "#f44336",
                    "#95a5a6",
                    "#9b59b6",
                    "#f1c40f",
                    "#e74c3c",
                    "#34495e"
                ],
                data: sentiemntSeries
            }]
        }
    });

}
