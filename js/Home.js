$(function() {    
    $("#home").vegas({
        delay:10000,
        timer: false,
        loop:true,
        slides: [
            { src: "myImages/Home/Home1.jpg" },
            { src: "myImages/Home/Home2.jpg" },
            { src: "myImages/Home/Home3.jpg" },
            { src: "myImages/Home/Home4.jpg" },
            { src: "myImages/Home/Home6.jpg" },
            { src: "myImages/Home/Home7.jpg" },
            { src: "myImages/Home/Home8.jpg" },
            { src: "myImages/Home/Home10.png" }
        ],
         animation: [ 'kenburnsDown', 'kenburnsUp', 'kenburnsLeft', 'kenburnsRight' ],
        //  loop:true,
        //  cover:true
    });


});