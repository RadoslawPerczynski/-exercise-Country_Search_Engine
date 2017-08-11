$(document).ready(function() {

var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

$('#country-name').on('keypress', function (e) {
    if (e.which === 13) {
        searchCountries();
    }
});

function searchCountries() {
    var countryName = $('#country-name').val();

    if(!countryName.length) countryName = 'Malta';

    $.ajax({
         url: url + countryName,
         method: 'GET', 
         success: showCountriesList,
         error: showError
        });

    function showCountriesList(resp) {
        countriesList.empty();
        resp.forEach(function(item) {
            $('<li>').text(item.name + " | capital city: " + item.capital + ", currency: " + item.currencies + ", borders: " + item.borders).appendTo(countriesList)
        });
    }
    
    function showError() {
        countriesList.empty()
        $('<li>').text('Error! ' + countryName + " doesn't exist.").appendTo(countriesList);
    }
}

$('#hyperlink').click(function() {
    $('body').animate({
        scrollTop: $("#appTitle").offset().top
    }, 700);

})


})