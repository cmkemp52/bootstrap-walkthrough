$(function() {
    $.ajax({
        type: "GET",
        url: "https://api.chucknorris.io/jokes/random",
        success: function(response){
            $("#chuckSays").text(response.value);
        },
        error: function(error){
            console.error(error);
        }
    })
})

$("#newQuote").click(function(){
    console.log();
    fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then(data=>$("#chuckSays").text(data.value));
})
