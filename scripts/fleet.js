

//Set new date
let curDate = document.getElementById('dates').getAttribute('value');
console.log(curDate);
date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
curDate = month + "/" + day + "/" + year;

//Data Range Calender Picker
$(function selectDates() {
    console.log("SelectDates Function");
    $('input[name="daterange"]').daterangepicker({
        opens: 'left'
    }, function (start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});

//Image Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
