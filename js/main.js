$(document).ready(function () {
    $('.sideBarBtn').click(function () {
        $('.sideBar').toggleClass('active');
        $('#sec1').toggleClass('sec1Active')
    })
    $('.sideX').click(function () {
        $('.sideBar').toggleClass('active');
        $('#sec1').toggleClass('sec1Active')
    })
    $('.top-area').on("click", function () {
        $(this).next().slideToggle(100);
        $('p').not($(this).next()).slideUp('slow');
    });
    $('#countdown-active').countdown('2023/04/03', function (event) {
        $(this).html(event.strftime(`<div class="single-coundown"><h2>%D D</h2></div> 
    <div class="single-coundown"><h2>%H h</h2></div>
    <div class="single-coundown"><h2>%M m</h2></div> 
    <div class="single-coundown"><h2>%S s</h2></div>  `));
    });
    var maxCharacters = 100;
    document.getElementById('description').onkeyup = function () {
        document.getElementById('characters-counter').innerHTML = (maxCharacters - this.value.length);
    };
})







