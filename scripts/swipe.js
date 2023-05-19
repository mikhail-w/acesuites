let touchstartX = 0;
let touchendX = 0;

const delta = 6;
let startX;
let startY;

let gesuredZone = document.getElementById('gesuredZone');

function checkDirection() {
    if (touchendX < touchstartX) {
        console.log("left");
        if (touchstartX - touchendX > 196) {
            console.log('swiped left!', touchstartX, touchendX);
        }
    }
    if (touchendX > touchstartX) {
        console.log("right");
        if (touchendX - touchstartX > 196) {
            console.log('swiped right!', touchstartX, touchendX);
        }
    }
}

// gesuredZone.addEventListener('touchstart', function (event) {
//     touchstartX = event.changedTouches[0].screenX;
// }, false);

// gesuredZone.addEventListener('touchend', function (event) {
//     touchendX = event.changedTouches[0].screenX;
//     checkDirection()
// }, false);

//Desktop click and drag action


