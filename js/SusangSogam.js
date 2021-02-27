$(function() {    
    $(".SusangsogamVegas").vegas({
        delay: 5000,
    timer: false,
    firstTransition: 'fade',
    firstTransitionDuration: 5000,
    transition: 'slideLeft2',
    transitionDuration: 2000,
        slides: [
            { src: "myImages/Sogam/Sogam1.jpg" },
            { src: "myImages/Sogam/Sogam2.jpg" },
            { src: "myImages/Sogam/Sogam3.jpg" },
            { src: "myImages/Sogam/Sogam4.jpg" },
            { src: "myImages/Sogam/Sogam5.jpg" },
            { src: "myImages/Sogam/Sogam6.jpg" },
            { src: "myImages/Sogam/Sogam7.jpg" },
        ],
    });

    $("#btn1").button();

});