
$( document ).ready(function(){
    $.ajax({url: "http://api.openweathermap.org/data/2.5/weather?q=Stockholm&units=metric&appid=5cfa4d30a6600c77662bba3875d1402c", success: function(result){
        console.log(result);
        var textContent = result.main.temp + "°C";
        $(".text").text(textContent);
        textContent = result.main.pressure + " Bar";
        $(".text2").text(textContent);
        textContent = result.name;
        $(".text3").text(textContent);
    }});
});
