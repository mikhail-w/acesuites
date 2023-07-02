let touchstartX = 0;
let touchendX = 0;
let startX;

let gesturedZone = document.getElementById('gesturedZone');

// function checkDirection() {
//     if (touchendX < touchstartX) {
//         console.log("left");
//         if (touchstartX - touchendX > 196) {
//             console.log('swiped left!', touchstartX - touchendX);
//             getSuite("next");
//         }
//     }
//     if (touchendX > touchstartX) {
//         console.log("right");
//         if (touchendX - touchstartX > 196) {
//             console.log('swiped right!', touchendX - touchstartX);
//             getSuite("prev");
//         }
//     }
// }

gesturedZone.addEventListener('touchstart', function (event) {
    touchstartX = event.changedTouches[0].screenX;
    // console.log(touchstartX);
}, false);

gesturedZone.addEventListener('touchend', function (event) {
    touchendX = event.changedTouches[0].screenX;
    // console.log(touchendX);
    // checkDirection();
    getActive();
}, false);

//Desktop click and drag action


