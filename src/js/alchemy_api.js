/**
 * Created by apdun on 11/4/2016.
 */

//https://gateway-a.watsonplatform.net/calls/data/GetNews?apikey=b6d15d85a0a1b7f76fcf63b53298a8568eefdf89
var url = "https://gateway-a.watsonplatform.net/calls/data/GetNews?";
var apikey =  "b6d15d85a0a1b7f76fcf63b53298a8568eefdf89";
var mode = "&outputMode=json";

function callAlchemy(companyName) {

    // Simple response handling
    fetch(url + "apikey=" + apikey + mode).then(function(response) {

    }).catch(function(err) {
        // Error :(
    });

}
