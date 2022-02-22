$(document).ready(function () {
    $("#search").click(function () {
        var city = $("#city").val();

        if (!city) {
            alert("Please Enter City To Search");
            return;
        }

        $("#weather").text("Loading")

        $.ajax({
            type: 'GET',
            url: `/api/weather?city=${city}`,
            success: function (data) {
                $("#weather").text(data);
            }
        });
    });
})