$(function () {
    getDate();

    setInterval(function () {
        getDate();
    }, 3000);

    function getDate() {
        var query = $.ajax("/Home/Time")
        .done(function (r) {
            $('#dateNow').html(r);
        });
    };
});