//var city = "Accra";
$("#form").submit(function (e){
    e.preventDefault();


    var query = $("#search").val();

$.get("https://api.openweathermap.org/data/2.5/weather?q="+ query+ "&units=metric&appid=999640461393bd67593a62abb27adf08", function(data){
    console.log(data);
    $("#results").empty();

    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp= data.main.temp;
    var weather = data.weather[0].main
    $(".icon").attr("src", icon);
    $(".weather").append(weather);
    $(".temp").append(temp);

    //humiidty
    var hum = data.main.humidity;
    $(".hum").append(hum);

    // pressure
    var press = data.main.pressure;
    $(".press").append(press);

});

});