/**
 * Created by apdun on 11/5/2016.
 */
function saveCompanyList(retSymbol, retCompanyName, retRating, retLogo, retValue) {

    var storeSymbol = retSymbol;
    var storeCompanyName = retCompanyName;
    var storeRating = retRating;
    var storeLogo = retLogo;
    var storeValue = retValue;

    console.log("storeSymbol: " + storeSymbol);
    console.log("storeCompanyName: " + storeCompanyName);
    console.log("storeRating: " + storeRating);
    console.log("storeLogo: " + storeLogo);
    console.log("storeValue: " + storeValue);

    var db = new Dexie("MyDatabase");
    db.version(1).stores({
        companyList: "symbol, companyName, rating, logo, value"
    });


    db.companyList.add(
        {
            symbol: storeSymbol,
            companyName: storeCompanyName,
            rating: storeRating,
            logo: storeLogo,
            value: storeValue
        });
}
