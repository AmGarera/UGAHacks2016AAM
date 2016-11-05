/**
 * Created by apdun on 11/5/2016.
 */
//Makes the sentiment series array gloabl
var sentiemntSeries = [];
var sentiementSeries = [];

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

    // Pushed the posative, negative and average values into the array
    sentiemntSeries.push((100/positive), (100/(negative*-1)));


    // Displays if its posative, negative or nutral
    if (average > 0) {
        document.getElementById("sentiment").innerText = "Positive sentiment!"

    }
    else if (average == 0) {
        document.getElementById("sentiment").innerText = "Neutral sentiment!"
    }
    else {
        document.getElementById("sentiment").innerText = "Negative sentiment!"
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
