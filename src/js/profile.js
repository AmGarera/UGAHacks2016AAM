//Collapsible company section enabled
$(document).ready(function() {
    //Side nav enabled and configured
    $('.button-collapse').sideNav({
        menuWidth: 240,
        edge: 'right',
        closeOnClick: true,
        draggable: true
    });
    $('.collapsible').collapsible();
    $('.button-collapse').sideNav({
        menuWidth: 240,
        edge: 'right',
        closeOnClick: true,
        draggable: true
    });
    
    document.getElementById("cName").innerText = localStorage.getItem("symbol");
    document.getElementById("rating").innerText = localStorage.getItem("sRating");
    //document.getElementById("cValue").innerText = localStorage.getItem("cValue");
    document.getElementById("cLogo").src = localStorage.getItem("cLogo");

    calcSetiment();

    //Add companies to list and remove them
    $('.addCompany').click(function(e) {
        e.preventDefault();

        var name = localStorage.getItem("cName");
        var symbol = localStorage.getItem("symbol");
        var rating = localStorage.getItem("rating");

        saveCompanyList(symbol, rating, name)

        $(".collapsible-body").append(
            '<div class="chip">' + returnedData() + '</div>');
    });

    // Remove parent of 'remove' link when link is clicked.
    $('.chip').on('click', '.chip', function(e) {
        e.preventDefault();

        $(this).parent().remove();
    });
});
