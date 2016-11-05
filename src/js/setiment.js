/**
 * Created by apdun on 11/5/2016.
 */
function calcSetiment() {
    var positive = 0;
    var negative = 0;
    var average = 0;
    console.log("Inside calcSentiment");
    console.log(allScores);

    for (var i = 0; i < allScores.length; i++)
    {

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

    console.log("positive" + positive.toString());
    console.log("negative" + negative);
    console.log("average" + average);

    if (average > 0) {
        document.getElementById("sentiment").innerText = "Positive sentiment!"
    }
    else if (average == 0) {
        document.getElementById("sentiment").innerText = "Neutral sentiment!"
    }
    else {
        document.getElementById("sentiment").innerText = "Negative sentiment!"
    }

}
